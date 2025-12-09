import { useState, useRef } from 'react';
import warningOrange from '../assets/images/icons/warning-orange.svg';
import brainWhite from '../assets/images/icons/brain-white.svg';

const Important = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const items = [
    {
      id: 0,
      title: '1 з 3 українців',
      description: 'має ознаки психологічних труднощів'
    },
    {
      id: 1,
      title: '47% населення',
      description: 'відчувають високий рівень стресу'
    },
    {
      id: 2,
      title: '38% людей',
      description: 'мають проблеми зі сном'
    }
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        if (activeSlide < items.length - 1) {
          setActiveSlide(activeSlide + 1);
        }
      } else {
        if (activeSlide > 0) {
          setActiveSlide(activeSlide - 1);
        }
      }
    }
  };

  return (
    <section className="important bg-[#F8FAFF]">
      <div className="important__container flex flex-col items-center 
                      w-[1128px] max-xl:w-full px-5
                      pt-25 pb-30 mx-auto
                      max-md:pb-20 max-md:pt-15">
        <div className="important__label text-center w-fit">
          <img className="important__image w-4 h-4" src={warningOrange} alt="quote icon" />
          <span className="important__label--text">
            Важливо знати
          </span>
        </div>

        <div className="important__items grid grid-cols-3 max-md:grid-cols-1 mt-10 mb-25 max-md:mb-8"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}>
          {items.map((item, index) => (
            <div key={item.id} 
                 className={`important-item flex max-md:w-[calc(100vw-40px)] 
                             transition-opacity duration-300 ${index === activeSlide ? 'max-md:flex' : 'max-md:hidden'}`}>
              <div className="important-item__image-container">
                <img className="important-item__image w-12 h-12" src={brainWhite} alt="Brain icon" />
              </div>
              <h3 className="important-item__title">
                {item.title}
              </h3>
              <p className="important-item__description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden max-md:flex justify-center gap-2 mb-15">
          {items.map((item, index) => (
            <button key={item.id}
                    onClick={() => setActiveSlide(index)}
                    className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === index 
                        ? 'bg-[#F9709A]' 
                        : 'bg-[#FFE1D4]'
                    }`}
                    aria-label={`Перейти до слайду ${index + 1}`}/>
          ))}
        </div>
        
        <div className="important__colored-section flex flex-col gap-6 w-full
                        p-[60px_150px_72px_150px] max-md:p-10 max-md:pb-30">
          <h2 className="important__title text-[40px] fw-500 leading-[130%] text-center
                          max-md:text-[24px] max-md:text-left max-md:fw-600 ">
            Це — не слабкість. Це наслідки життя в<br /> умовах постійної напруги.
          </h2>
          <p className="important__description text-[18px] fw-400 leading-7 text-center
                        max-md:text-[14px] max-md:text-left max-md:leading-[125%] max-md:text-left">
            Healthy Mind допомагає бути уважним до себе. Щоб розуміти, що саме відчуваєте, як реагуєте та чого потребуєте. Це психологія, яка поруч: проста, людяна, доступна. Бо стійкість не про вміння терпіти, а вміння жити в рівновазі зі своїм внутрішнім світом.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Important;