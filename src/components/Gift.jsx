const Gift = () => {
  return (
    <section className="gift">
      <div className="gift__container flex flex-col">
        <img className="gift__image w-[310px] h-[310px] mb-[-38px]" src="./src/assets/images/grand-dad.webp" />
        <div className="gift__boarded-section w-full">
          <div className="flex flex-col items-center">
            <div className="gift__label w-[320px]">
              <img className="gift__image w-4 h-4" src="./src/assets/images/icons/heart-red.svg" alt="quote icon" />
              <span className="gift__label--text text-center">
                Подаруй турботу
              </span>
            </div>
            <h2 className="gift__title text-center mt-10">Healthy Mind — турбота, якою<br /> можна поділитись.</h2>
            <p className="gift__description text-center mt-4">
              Подаруй чекап тому, хто зараз потребує підтримки.<br />
              Іноді цього достатньо, щоб зробити день легшим.
            </p>
            <button className="button button--gradient-red w-[334px] mt-12">
              <img className="w-[16px] h-[16px]" src="./src/assets/images/icons/heart-white.svg" alt="Arrow icon" />
              Подарувати чекап
              <img className="w-[16px] h-[16px]" src="./src/assets/images/icons/arrow.svg" alt="Arrow icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;