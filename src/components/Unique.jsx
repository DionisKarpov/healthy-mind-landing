const Unique
 = () => {
  return (
    <section className="unique">
      <div className="unique__container flex flex-col">
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
        <div className="unique__steps flex justify-between mt-[48px] w-full">
          <div className="unique__step unique-step unique-step--first flex flex-col items-left">
            <div className="flex mt-auto gap-6">
              <div className="unique-step__image-container">
                <img className="unique-step__image" src="./src/assets/images/icons/achive-white.svg" alt="how it works icon" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="unique-step__title">Науково точно</h3>
                <p className="unique-step__description">
                  Використовуємо всесвітньо визнані методики, адаптовані для українців.
                </p>
              </div>
            </div>
            <div className="unique-step__decor"></div>
          </div>
          <div className="unique__step unique-step unique-step--second flex flex-col items-left">
            <div className="flex mt-auto gap-6">
              <div className="unique-step__image-container">
                <img className="unique-step__image" src="./src/assets/images/icons/layers-white.svg" alt="how it works icon" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="unique-step__title">Система оцінює найпоширеніші психологічні стани:</h3>
                <p className="unique-step__description">
                  тривогу, депресію, стрес, наслідки травми та інші (за міжнародними стандартами DSM-5 і МКХ-11)
                </p>
              </div>
            </div>
            <div className="unique-step__decor"></div>
          </div>
          <div className="unique__step unique-step unique-step--third flex flex-col items-left">
            <div className="flex mt-auto gap-6">
              <div className="unique-step__image-container">
                <img className="unique-step__image" src="./src/assets/images/icons/lock-white.svg" alt="how it works icon" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="unique-step__title">Конфіденційно</h3>
                <p className="unique-step__description">
                  Результати бачите лише ви.
                </p>
              </div>
            </div>
            <div className="unique-step__decor"></div>
          </div>
          <div className="unique__step unique-step unique-step--fourth flex flex-col items-left">
            <div className="flex mt-auto gap-6">
              <div className="unique-step__image-container">
                <img className="unique-step__image" src="./src/assets/images/icons/flash-white.svg" alt="how it works icon" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="unique-step__title">Швидко</h3>
                <p className="unique-step__description">
                  8 хвилин замість 3-4 години класично зі спеціалістом.
                </p>
              </div>
            </div>
            <div className="unique-step__decor"></div>
          </div>
          <div className="unique__step unique-step unique-step--fifth flex flex-col items-left">
            <div className="flex mt-auto gap-6">
              <div className="unique-step__image-container">
                <img className="unique-step__image" src="./src/assets/images/icons/user-white.svg" alt="how it works icon" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="unique-step__title">Особисто</h3>
                <p className="unique-step__description">
                  Рекомендації створені саме під ваш стан — без шаблонів.
                </p>
              </div>
            </div>
            <div className="unique-step__decor"></div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Unique
;