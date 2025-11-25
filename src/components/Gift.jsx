const Gift = () => {
  return (
    <section className="gift">
      <div className="gift__container flex flex-col w-[1000px] py-[120px] items-center
                      max-lg:w-[calc(100vw-48px)] max-md:py-15">
        <img className="gift__image w-[310px] h-[310px] mb-[-38px]
                        max-md:mb-6 max-md:w-[240px] max-md:h-[240px]"
              src="/healthy-mind-landing/images/grand-dad.webp" />
        <div className="gift__boarded-section w-full border-2 border-solid p-[80px]
                        max-md:border-0 max-md:p-0">
          <div className="flex flex-col items-center">
            <div className="gift__label w-[320px] p-4
                            max-md:py-2 max-md:px-8 max-md:w-fit">
              <img className="gift__image w-4 h-4" src="/healthy-mind-landing/images/icons/heart-red.svg" alt="quote icon" />
              <span className="gift__label--text text-center">
                Подаруй турботу
              </span>
            </div>
            <h2 className="gift__title text-center mt-10 text-[var(--black)] text-[36px] font-semibold leading-[125%] 
                           max-md:mt-8 max-md:text-[20px]">Healthy Mind — турбота, якою<br /> можна поділитись.</h2>
            <p className="gift__description text-center text-[var(--dark-blue)] 
                          text-[18px] letter-spacing-[-0.36px] leading-[150%] mt-4 
                          max-md:text-[16px] max-md:leading-[125%] max-md:mt-[14px]">
              Подаруй чекап тому, хто зараз потребує підтримки.<br />
              Іноді цього достатньо, щоб зробити день легшим.
            </p>
            <button className="button button--gradient-red w-[334px] mt-12 max-md:w-full max-md:mt-10">
              <img className="w-[16px] h-[16px]" src="/healthy-mind-landing/images/icons/heart-white.svg" alt="Arrow icon" />
              Подарувати чекап
              <img className="w-[16px] h-[16px]" src="/healthy-mind-landing/images/icons/arrow.svg" alt="Arrow icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;