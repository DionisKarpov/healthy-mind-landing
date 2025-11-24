import { useState, useRef } from 'react';

const Unique = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsContainerRef = useRef(null);
  const stepRefs = useRef([]);

  const stepsData = [
    {
      id: 0,
      label: 'Головна перевага',
      icon: './src/assets/images/icons/achive-white.svg',
      title: 'Науково точно',
      description: 'Використовуємо всесвітньо визнані методики, адаптовані для українців.',
      className: 'unique-step--first'
    },
    {
      id: 1,
      icon: './src/assets/images/icons/layers-white.svg',
      title: 'Система оцінює найпоширеніші психологічні стани:',
      description: 'тривогу, депресію, стрес, наслідки травми та інші (за міжнародними стандартами DSM-5 і МКХ-11)',
      className: 'unique-step--second'
    },
    {
      id: 2,
      icon: './src/assets/images/icons/lock-white.svg',
      title: 'Конфіденційно',
      description: 'Результати бачите лише ви.',
      className: 'unique-step--third'
    },
    {
      id: 3,
      icon: './src/assets/images/icons/flash-white.svg',
      title: 'Швидко',
      description: '8 хвилин замість 3-4 години класично зі спеціалістом.',
      className: 'unique-step--fourth'
    },
    {
      id: 4,
      icon: './src/assets/images/icons/user-white.svg',
      title: 'Особисто',
      description: 'Рекомендації створені саме під ваш стан — без шаблонів.',
      className: 'unique-step--fifth'
    }
  ];

  const scrollToStep = (index) => {
    setActiveStep(index);
    
    if (stepRefs.current[index] && stepsContainerRef.current) {
      const container = stepsContainerRef.current;
      const scrollPosition = index * 400;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="unique">
      <div className="unique__container flex flex-col w-[1200px] max-lg:w-full max-lg:px-6">
        <div className="flex flex-col items-center">
          <div className="unique__label text-center w-fit">
            <span className="unique__label--text">
              Наша унікальність
            </span>
          </div>
          <h2 className="unique__title mt-6
                         text-[48px] leading-[56px]
                         max-lg:text-[36px] max-lg:leading-[44px]
                         max-sm:text-[24px] max-sm:leading-[30px]">
            Чому Healthy Mind унікальна
          </h2>
          <div className="unique__description w-[580px] text-center mt-4">
            Ми поєднали розуміння життя українців, наукову точність й простоту, щоб рекомендації природно ставали частиною щоденності та покращували самопочуття
          </div>
        </div>

        <div ref={stepsContainerRef}
            className="unique__steps flex gap-8 mt-[48px] overflow-x-auto scroll-smooth">
          {stepsData.map((step, index) => (
            <div key={step.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`unique__step unique-step ${step.className} flex flex-col items-left min-w-full`}
                  style={{ scrollSnapAlign: 'start' }}>
              {step.label && (
                <div className="unique-step__label flex items-center w-fit gap-2">
                  <img className="w-[16px] h-[16px]" src={step.icon} alt="icon" />
                  {step.label}
                </div>
              )}
              <div className="flex mt-auto gap-6">
                <div className="unique-step__image-container">
                  <img className="unique-step__image" src={step.icon} alt="icon" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="unique-step__title">{step.title}</h3>
                  <p className="unique-step__description">{step.description}</p>
                </div>
              </div>
              <div className="unique-step__decor"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {stepsData.map((step, index) => (
            <button key={step.id} onClick={() => scrollToStep(index)}
                    className={`w-6 h-6 rounded-full transition-all border-2 ${
                      activeStep === index 
                        ? 'bg-[#8753FF] border-[#8753FF]' 
                        : 'bg-[transparent] border-[#EEDAFF]'
                    }`}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unique;