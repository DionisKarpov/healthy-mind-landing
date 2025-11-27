import { useState, useRef } from 'react';
import achiveWhite from '../assets/images/icons/achive-white.svg';
import layersWhite from '../assets/images/icons/layers-white.svg';
import lockWhite from '../assets/images/icons/lock-white.svg';
import flashWhite from '../assets/images/icons/flash-white.svg';
import userWhite from '../assets/images/icons/user-white.svg';

const Unique = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsContainerRef = useRef(null);
  const stepRefs = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const stepsData = [
    {
      id: 0,
      label: 'Головна перевага',
      icon: achiveWhite,
      title: 'Науково точно',
      description: 'Використовуємо всесвітньо визнані методики, адаптовані для українців.',
      className: 'unique-step--first'
    },
    {
      id: 1,
      icon: layersWhite,
      title: 'Система оцінює найпоширеніші психологічні стани:',
      description: 'тривогу, депресію, стрес, наслідки травми та інші (за міжнародними стандартами DSM-5 і МКХ-11)',
      className: 'unique-step--second'
    },
    {
      id: 2,
      icon: lockWhite,
      title: 'Конфіденційно',
      description: 'Результати бачите лише ви.',
      className: 'unique-step--third'
    },
    {
      id: 3,
      icon: flashWhite,
      title: 'Швидко',
      description: '8 хвилин замість 3-4 години класично зі спеціалістом.',
      className: 'unique-step--fourth'
    },
    {
      id: 4,
      icon: userWhite,
      title: 'Особисто',
      description: 'Рекомендації створені саме під ваш стан — без шаблонів.',
      className: 'unique-step--fifth'
    }
  ];

  // Touch handlers для свайпу на мобільному
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        if (activeStep < stepsData.length - 1) {
          setActiveStep(activeStep + 1);
        }
      } else {
        if (activeStep > 0) {
          setActiveStep(activeStep - 1);
        }
      }
    }
  };

  // Відслідковування скролу для десктопу
  const handleScroll = () => {
    if (!stepsContainerRef.current) return;
    
    const container = stepsContainerRef.current;
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      // Перевірка: якщо доскролили до кінця - активуємо останній елемент
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        if (activeStep !== stepsData.length - 1) {
          setActiveStep(stepsData.length - 1);
        }
        return;
      }
      
      // Перевірка: якщо на початку - активуємо перший елемент
      if (scrollLeft <= 10) {
        if (activeStep !== 0) {
          setActiveStep(0);
        }
        return;
      }
      
      // Для всіх інших випадків знаходимо найближчий елемент до центру
      const containerCenter = scrollLeft + clientWidth / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      stepRefs.current.forEach((stepEl, index) => {
        if (stepEl) {
          const elementCenter = stepEl.offsetLeft + stepEl.offsetWidth / 2;
          const distance = Math.abs(containerCenter - elementCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });
      
      if (closestIndex !== activeStep) {
        setActiveStep(closestIndex);
      }
    }
  };

  const scrollToStep = (index) => {
    setActiveStep(index);
    
    if (stepsContainerRef.current) {
      const container = stepsContainerRef.current;
      const isMobile = window.innerWidth < 768;
      
      if (!isMobile) {
        const DESKTOP_ITEM_WIDTH = 520;
        const DESKTOP_GAP = 32;
        const scrollPosition = index * (DESKTOP_ITEM_WIDTH + DESKTOP_GAP);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="unique">
      <div className="unique__container flex flex-col w-[1200px] mt-[120px] mb-[80px] 
                      max-lg:w-full max-lg:px-6 max-md:mt-[28px] max-md:mb-[32px] mx-auto">
        <div className="flex flex-col items-center">
          <div className="unique__label text-center w-fit">
            <span className="unique__label--text">
              Наша унікальність
            </span>
          </div>
          <h2 className="unique__title mt-6
                         text-[44px] leading-[125%] mb-4
                         max-lg:text-[24px] 
                         max-md:mb-[10px] max-md:text-[18px] 
                         max-md:letter-spacing-unset">
            Чому Healthy Mind унікальна
          </h2>
          <div className="unique__description w-[580px] text-center text-[18px] leading-[150%]  
                            max-md:text-[14px] max-md:w-full">
            Ми поєднали розуміння життя українців, наукову точність й простоту, щоб рекомендації природно ставали частиною щоденності та покращували самопочуття
          </div>
        </div>

        <div 
          ref={stepsContainerRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="unique__steps flex gap-8 mt-[48px] overflow-x-auto scroll-smooth
                     max-md:-mx-6 max-md:px-6 max-md:overflow-hidden"
        >
          {stepsData.map((step, index) => (
            <div 
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`unique__step unique-step ${step.className} 
                          flex flex-col items-left 
                          h-[300px] w-[520px] min-w-[520px] px-10 py-6
                          max-md:h-[214px] max-md:w-[calc(100vw-48px)] max-md:min-w-[calc(100vw-48px)]
                          max-md:px-8 mx-auto
                          transition-opacity duration-300
                          ${index === activeStep ? '' : 'max-md:hidden'}`}
            >
              {step.label && (
                <div className="unique-step__label flex items-center w-fit gap-2">
                  <img className="w-[16px] h-[16px]" src={step.icon} alt="icon" />
                  {step.label}
                </div>
              )}
              <div className="flex mt-auto gap-6 max-md:gap-4">
                <div className="unique-step__image-container mt-[12px] max-md:mt-0">
                  <img className="unique-step__image" src={step.icon} alt="icon" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="unique-step__title text-[22px] max-md:text-[16px]">{step.title}</h3>
                  <p className="unique-step__description text-[16px] leading-[26px] 
                                max-md:text-[14px] max-md:leading-[20px]">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className={`unique-step__decor ${step.id === 1 ? 'mt-6' : 'mt-8'} max-md:mt-1`}></div>
            </div>
          ))}
        </div>

        {/* Індикатори */}
        <div className="flex justify-center gap-2 mt-8 max-md:gap-1 max-md:mt-6">
          {stepsData.map((step, index) => (
            <button 
              key={step.id} 
              onClick={() => scrollToStep(index)}
              className={`w-6 h-6 max-md:w-4 max-md:h-4 rounded-full transition-all border-2 ${
                activeStep === index 
                  ? 'bg-[#8753FF] border-[#8753FF]' 
                  : 'bg-transparent border-[#EEDAFF]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unique;