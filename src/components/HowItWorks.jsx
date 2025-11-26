import dialogWhite from '../assets/images/icons/dialog-white.svg';
import analyticsWhite from '../assets/images/icons/analytics-white.svg';
import bulbWhite from '../assets/images/icons/bulb-white.svg';
import { useRef } from 'react';
import CustomScrollbar from './СustomScrollbar.jsx';

const HowItWorks = () => {
  const scrollRef = useRef(null);

  return (
    <section className="how-it-works">
      <div className="how-it-works__container flex flex-col w-[1200px] py-[80px]
                      max-lg:w-[calc(100vw-48px)] max-md:pb-[56px] max-md:pt-0">
        <div className="flex flex-col items-center">
          <div className="how-it-works__label text-center w-fit max-md:mt-[-18px] max-md:absolute z-10">
            <span className="how-it-works__label--text">
              Просто і зрозуміло
            </span>
          </div>
          <h2 className="how-it-works__title mt-8
                         text-[48px] leading-[56px] font-medium
                         max-lg:text-[36px] max-lg:leading-[44px]
                         max-sm:text-[34px] max-sm:leading-[125%]
                         max-md:mt-[50px] max-md:font-semibold">
            Як це працює?
          </h2>
        </div>
        <div className="w-full 
                        max-2xl:-mx-[calc((100vw-100%)/2)]
                        max-2xl:overflow-x-auto 
                        max-lg:pb-9 scroll-smooth"
                        ref={scrollRef}>
          <div className="how-it-works__steps flex justify-between 
                                          mt-[60px] w-full gap-[52px]
                                          max-2xl:gap-6 max-2xl:before:hidden
                                          max-md:mt-[44px]">
            <div className="how-it-works__step step flex flex-col items-left min-w-[270px]">
              <div className="step__image-container step__image-container--first w-[80px] h-[80px] max-md:w-[60px] max-md:h-[60px]">
                <img className="step__image w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px]" 
                     src={dialogWhite} alt="how it works icon" />
              </div>
              <h3 className="step__title step__title--first w-[240px] mt-6 
                             text-[22px] font-semibold leading-[125%] letter-spacing-[-0.66px]
                             max-md:mt-4">
                Відповідаєте на низку простих питань.
              </h3>
              <p className="step__description mt-4 max-md:mt-1">
                Ніхто не оцінює і не перевіряє. Це простір, де можна бути щирим із собою й побачити, що відбувається всередині, без страху почути “не те”.
              </p>
            </div>
            <div className="how-it-works__step step flex flex-col items-left min-w-[270px]">
              <div className="step__image-container step__image-container--second w-[80px] h-[80px] max-md:w-[60px] max-md:h-[60px]">
                <img className="step__image w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px]" 
                src={analyticsWhite} alt="how it works icon" />
              </div>
              <h3 className="step__title step__title--second w-[240px] mt-6 
                             text-[22px] font-semibold leading-[125%] letter-spacing-[-0.66px]
                             max-md:mt-4">
                Отримуєш картину стану
                </h3>
              <p className="step__description mt-4 max-md:mt-1">
                Система допоможе побачити цілісну картину твого стану: як ти почуваєшся, мислиш, дієш і взаємодієш. І пояснить усе людяно й просто.
              </p>
            </div>
            <div className="how-it-works__step step flex flex-col items-left min-w-[270px]">
              <div className="step__image-container step__image-container--third w-[80px] h-[80px] max-md:w-[60px] max-md:h-[60px]">
                <img className="step__image w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px]" 
                     src={bulbWhite} alt="how it works icon" />
              </div>
              <h3 className="step__title step__title--third  w-[240px] mt-6 
                             text-[22px] font-semibold leading-[125%] letter-spacing-[-0.66px]
                             max-md:mt-4">
                Дізнаєшся, як собі допомогти
              </h3>
              <p className="step__description mt-4 max-md:mt-1">
                Прості рекомендації, які допомагають покращити свій стан або зберегти те, що вже добре. Без зайвих зусиль — лише намір дбати про себе.
              </p>
            </div>
          </div> 
        </div>
        <CustomScrollbar scrollRef={scrollRef} />
      </div>
    </section>
  );
};

export default HowItWorks;