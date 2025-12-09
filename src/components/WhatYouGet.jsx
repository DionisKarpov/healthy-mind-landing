import brainWhite from '../assets/images/icons/brain-white.svg';
import bulbWhite from '../assets/images/icons/bulb-white.svg';
import arrowGrowWhite from '../assets/images/icons/arrow-grow-white.svg';
import arrow from '../assets/images/icons/arrow.svg';
import { useRef } from 'react';
import CustomScrollbar from './СustomScrollbar.jsx';
import { openMainLink } from '../utils/navigation.js';

const WhatYouGet = () => {
  const scrollRef = useRef(null);

  return (
    <section className="what-you-get">
      <div className="what-you-get__container flex flex-col py-[80px] 
                      max-xl:w-full max-xl:px-4 max-md:pt-2 max-md:pb-15">
        <div className="flex flex-col items-center">
          <h2 className="what-you-get__title mt-8
                         text-[44px] leading-[56px] font-medium
                         max-md:text-[36px] max-md:leading-[125%]
                         max-md:font-semibold">
            Що ви отримаєте
          </h2>
        </div>
        <div className="w-full 
                        max-xl:-mx-[calc((100vw-100%)/2)]
                        max-xl:overflow-x-auto 
                        max-xl:pb-[52px]
                        max-xl:px-5 scroll-smooth" ref={scrollRef}>
          <div className="what-you-get__cards mt-[60px] w-full gap-6 flex md:justify-center">
            <div className="what-you-get__card card flex flex-col items-left w-[332px] min-w-[332px] max-md:w-[310px] max-md:min-w-[310px]">
              <div className="card__image-container card__image-container--first">
                <img className="card__image" src={brainWhite} alt="how it works icon" />
              </div>
              <h3 className="card__title card__title--first">Об'єктивну оцінку свого стану</h3>
              <p className="card__description">
                Замість гадати "чи зі мною все гаразд?".
              </p>
              {/* <div className="card__decoration card__decoration--first"></div> */}
            </div>
            <div className="what-you-get__card card flex flex-col items-left w-[332px] min-w-[332px] max-md:w-[310px] max-md:min-w-[310px]">
              <div className="card__image-container card__image-container--second">
                <img className="card__image" src={brainWhite} alt="how it works icon" />
              </div>
              <h3 className="card__title card__title--second">Зрозумілі пояснення</h3>
              <p className="card__description">
                Отримуєте пояснення без складних фраз, щоб легше зрозуміти свій стан і реакції.
              </p>
              {/* <div className="card__decoration card__decoration--second"></div> */}
            </div>
            <div className="what-you-get__card card flex flex-col items-left w-[332px] min-w-[332px] max-md:w-[310px] max-md:min-w-[310px]">
              <div className="card__image-container card__image-container--third">
                <img className="card__image" src={bulbWhite} alt="how it works icon" />
              </div>
              <h3 className="card__title card__title--third">Розуміння своїх ресурсів</h3>
              <p className="card__description">
                Бачите, що саме вам допомагає, і як продовжувати рух у правильному напрямку, самостійно чи з підтримкою фахівця.
              </p>
              {/* <div className="card__decoration card__decoration--third"></div> */}
            </div>
            <div className="what-you-get__card card flex flex-col items-left w-[332px] min-w-[332px] max-md:w-[310px] max-md:min-w-[310px] mr-5">
              <div className="card__image-container card__image-container--fourth">
                <img className="card__image" src={arrowGrowWhite} alt="how it works icon" />
              </div>
              <h3 className="card__title card__title--fourth">Можливість відстеження змін з часом</h3>
              <p className="card__description">
                Без обмежень відстежуєте зміни у своєму стані та бачите, як зростає ваша рівновага й стійкість у різних сферах життя.
              </p>
              {/* <div className="card__decoration card__decoration--fourth"></div> */}
            </div>
          </div>
        </div>
        <CustomScrollbar scrollRef={scrollRef} />

        <div className="what-you-get__description w-[700px] mt-[60px] max-md:w-full max-md:px-5">
          Чекап і загальну оцінку вашого стану ви отримуєте безкоштовно. Лише за <span className="font-semibold">99 гривень</span> ви відкриваєте повні результати, детальні пояснення та персональні поради для відновлення балансу.
        </div>
        
        <button className="button button--gradient-inclined 
                           w-[280px] mt-[24px] 
                           max-md:w-[290px]"
                onClick={() => openMainLink()}>
          Пройти чекап
          <img className="w-[16px] h-[16px]" src={arrow} alt="Arrow icon" />
        </button>
      </div>
    </section>
  );
};

export default WhatYouGet;