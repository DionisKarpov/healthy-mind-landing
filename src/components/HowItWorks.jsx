const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__container flex flex-col">
        <div className="flex flex-col items-center">
          <div className="how-it-works__label text-center w-fit">
            <span className="how-it-works__label--text">
              Просто і зрозуміло
            </span>
          </div>
          <h2 className="how-it-works__title mt-8
                         text-[48px] leading-[56px]
                         max-lg:text-[36px] max-lg:leading-[44px]
                         max-sm:text-[24px] max-sm:leading-[30px]">
            Як це працює?
          </h2>
        </div>
        <div className="how-it-works__steps flex justify-between mt-[60px] w-full">
          <div className="how-it-works__step step flex flex-col items-left">
            <div className="step__image-container step__image-container--first">
              <img className="step__image" src="./src/assets/images/icons/dialog-white.svg" alt="how it works icon" />
            </div>
            <h3 className="step__title step__title--first">Відповідаєте на низку простих питань.</h3>
            <p className="step__description">
              Ніхто не оцінює і не перевіряє. Це простір, де можна бути щирим із собою й побачити, що відбувається всередині, без страху почути “не те”.
            </p>
          </div>
          <div className="how-it-works__step step flex flex-col items-left">
            <div className="step__image-container step__image-container--second">
              <img className="step__image" src="./src/assets/images/icons/analytics-white.svg" alt="how it works icon" />
            </div>
            <h3 className="step__title step__title--second">Отримуєш картину стану</h3>
            <p className="step__description">
              Система допоможе побачити цілісну картину твого стану: як ти почуваєшся, мислиш, дієш і взаємодієш. І пояснить усе людяно й просто.
            </p>
          </div>
          <div className="how-it-works__step step flex flex-col items-left">
            <div className="step__image-container step__image-container--third">
              <img className="step__image" src="./src/assets/images/icons/bulb-white.svg" alt="how it works icon" />
            </div>
            <h3 className="step__title step__title--third">Дізнаєшся, як собі допомогти</h3>
            <p className="step__description">
              Прості рекомендації, які допомагають покращити свій стан або зберегти те, що вже добре. Без зайвих зусиль — лише намір дбати про себе.
            </p>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default HowItWorks;