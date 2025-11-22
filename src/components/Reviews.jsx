const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__container flex flex-col items-center">
        <div className="reviews__label text-center w-fit">
          <img className="reviews__image w-4 h-4" src="./src/assets/images/icons/quote-gradient.svg" alt="quote icon" />
          <span className="reviews__label--text">
            Відгуки партнерів
          </span>
        </div>
        <div className="reviews__cards flex justify-between mt-[48px] w-full gap-8">
          <div className="reviews__item review flex flex-col items-left">
            <div className="review__image-container mb-8">
              <img className="review__image" src="./src/assets/images/icons/quote-purple.svg" alt="how it works icon" />
            </div>
            <p className="review__text">
              «Отримані результати стали цінним інструментом… Кожен учасник також відзначив, що отримав багато корисної, практичної інформації для себе особисто — про власний стан, способи відновлення та підтримку емоційної рівноваги.»
            </p>
            <span className="review__author mt-auto">
              БО «100% Життя» 
            </span>
          </div>
          <div className="reviews__item review flex flex-col items-left">
            <div className="review__image-container mb-8">
              <img className="review__image" src="./src/assets/images/icons/quote-purple.svg" alt="how it works icon" />
            </div>
            <p className="review__text">
              «Кожен учасник отримує власні результат з графіком змін показників, що дає змогу візуально побачити, де відбулося покращення або де потрібна подальша підтримка... Навіть якщо він не відчуває суттєвих змін емоційно, графік показує поступове покращення, що підтримує довіру до процесу терапії.»
            </p>
            <span className="review__author mt-auto">
              ГО «Серце Азовсталі» 
            </span>
          </div>
          <div className="reviews__item review flex flex-col items-left">
            <div className="review__image-container mb-8">
              <img className="review__image" src="./src/assets/images/icons/quote-purple.svg" alt="how it works icon" />
            </div>
            <p className="review__text">
              «Учасникам цікаво брати участь у “емоційних чек-інах”, для них це навіть трохи схоже на гру, у якій можна бачити власну динаміку і результати.»
            </p>
            <span className="review__author mt-auto">
              Фонд Олени Пінчук — Ярослава Кот-Миронова
            </span>
          </div>

        </div>
        
        <button className="button button--light-gradient-inclined 
                           w-[290px] max-md:w-full mt-[60px]">
          Я теж хочу зрозуміти свій стан
        </button>
      </div>
    </section>
  );
};

export default Reviews;