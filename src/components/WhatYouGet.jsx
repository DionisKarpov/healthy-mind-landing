const WhatYouGet = () => {
  return (
    <section className="what-you-get">
      <div className="what-you-get__container flex flex-col w-[1280px] max-xl:w-[calc(100vw-48px)] max-xl:px-4">
        <div className="flex flex-col items-center">
          <h2 className="what-you-get__title mt-8
                         text-[48px] leading-[56px]
                         max-lg:text-[36px] max-lg:leading-[44px]
                         max-sm:text-[24px] max-sm:leading-[30px]">
            Що ти отримаєш
          </h2>
        </div>
        <div className="what-you-get__cards mt-[60px] w-full gap-6
                        grid grid-cols-4 
                        max-xl:grid-cols-2 max-xl:w-fit
                        max-sm:grid-cols-1">
          <div className="what-you-get__card card flex flex-col items-left">
            <div className="card__image-container card__image-container--first">
              <img className="card__image" src="./src/assets/images/icons/brain-white.svg" alt="how it works icon" />
            </div>
            <h3 className="card__title card__title--first">Чітку картину свого стану</h3>
            <p className="card__description">
              Замість гадати "чи зі мною все гаразд?"
            </p>
            <div className="card__decoration card__decoration--first"></div>
          </div>
          <div className="what-you-get__card card flex flex-col items-left">
            <div className="card__image-container card__image-container--second">
              <img className="card__image" src="./src/assets/images/icons/brain-white.svg" alt="how it works icon" />
            </div>
            <h3 className="card__title card__title--second">Зрозумілі пояснення</h3>
            <p className="card__description">
              Отримуєш пояснення без складних фраз, щоб легше зрозуміти свій стан і реакції.
            </p>
            <div className="card__decoration card__decoration--second"></div>
          </div>
          <div className="what-you-get__card card flex flex-col items-left">
            <div className="card__image-container card__image-container--third">
              <img className="card__image" src="./src/assets/images/icons/bulb-white.svg" alt="how it works icon" />
            </div>
            <h3 className="card__title card__title--third">Розуміння своїх ресурсів</h3>
            <p className="card__description">
              Отримуєш пояснення без складних фраз, щоб легше зрозуміти свій стан і реакції.
            </p>
            <div className="card__decoration card__decoration--third"></div>
          </div>
          <div className="what-you-get__card card flex flex-col items-left">
            <div className="card__image-container card__image-container--fourth">
              <img className="card__image" src="./src/assets/images/icons/arrow-grow-white.svg" alt="how it works icon" />
            </div>
            <h3 className="card__title card__title--fourth">Можливість відстеження змін з часом</h3>
            <p className="card__description">
              Отримуєш пояснення без складних фраз, щоб легше зрозуміти свій стан і реакції.
            </p>
            <div className="card__decoration card__decoration--fourth"></div>
          </div>
        </div>

        <div className="what-you-get__description w-[520px] mt-[60px]">
          Healthy Mind аналізує понад 50 показників, щоб дати тобі не просто цифри — а відчуття стійкості
        </div>
        
        <button className="button button--gradient-inclined 
                           w-[280px] max-md:w-full mt-[24px]">
          Пройти чекап
          <img className="w-[16px] h-[16px]" src="./src/assets/images/icons/arrow.svg" alt="Arrow icon" />
        </button>
      </div>
    </section>
  );
};

export default WhatYouGet;