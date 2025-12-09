import { useState, useRef, useEffect } from 'react';

const CustomScrollbar = ({ scrollRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(40);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);
  const dragStartPos = useRef(0);
  const scrollStartPos = useRef(0);

  useEffect(() => {
    const updateScrollbar = () => {
      if (scrollRef.current && trackRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(progress);
        
        const currentTrackWidth = trackRef.current.offsetWidth;
        setTrackWidth(currentTrackWidth);
        
        const visibleRatio = clientWidth / scrollWidth;
        const calculatedWidth = Math.max(currentTrackWidth * visibleRatio, 40);
        setThumbWidth(calculatedWidth);
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', updateScrollbar);
      window.addEventListener('resize', updateScrollbar);
      updateScrollbar();
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', updateScrollbar);
      }
      window.removeEventListener('resize', updateScrollbar);
    };
  }, [scrollRef]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartPos.current = e.clientX;
    scrollStartPos.current = scrollRef.current.scrollLeft;
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    dragStartPos.current = e.touches[0].clientX;
    scrollStartPos.current = scrollRef.current.scrollLeft;
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !scrollRef.current) return;

      const delta = e.clientX - dragStartPos.current;
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      const scrollRatio = maxScroll / (trackWidth - thumbWidth);
      const newScrollLeft = scrollStartPos.current + (delta * scrollRatio);
      
      scrollRef.current.scrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !scrollRef.current) return;

      const delta = e.touches[0].clientX - dragStartPos.current;
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      const scrollRatio = maxScroll / (trackWidth - thumbWidth);
      const newScrollLeft = scrollStartPos.current + (delta * scrollRatio);
      
      scrollRef.current.scrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, scrollRef, thumbWidth, trackWidth]);

  const handleTrackClick = (e) => {
    if (!scrollRef.current || !trackRef.current) return;
    
    const track = trackRef.current;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    
    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    const targetProgress = (clickX - thumbWidth / 2) / (trackWidth - thumbWidth);
    const newScrollLeft = targetProgress * maxScroll;
    
    scrollRef.current.scrollTo({
      left: Math.max(0, Math.min(newScrollLeft, maxScroll)),
      behavior: 'smooth'
    });
  };

  const maxThumbPosition = trackWidth - thumbWidth;
  const thumbLeftPx = (scrollProgress / 100) * maxThumbPosition;

  return (
    <div className="md:hidden w-full">
      <div ref={trackRef}
            className="relative w-full h-[2px] bg-[#E0E7FF] rounded-full cursor-pointer"
            onClick={handleTrackClick}>
        <div className={`absolute h-[6px] rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] 
                     top-1/2 -translate-y-1/2 transition-all ease-out cursor-grab
                     ${isDragging ? 'cursor-grabbing scale-105' : 'duration-150'}`}
              style={{
                width: `${thumbWidth}px`,
                left: `${thumbLeftPx}px`
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart} />
      </div>
    </div>
  );
};

export default CustomScrollbar;