const Main = () => {
  return (
    <section className="main bg-[#FDF3EE]">
      <div className="main__container flex justify-between
                      pt-[140px] pb-[30px]
                      max-xl:px-6
                      max-md:flex-col-reverse max-md:items-center max-md:pt-[60px]
                      max-sm:text-center max-sm:pt-[40px] max-sm:pb-[62px]">
        <div className="flex flex-col overflow-visible w-auto max-sm:w-full max-lg:w-[380px]">
          <div className="flex flex-col
                          w-[587px]
                          max-lg:w-[380px]
                          max-md:w-full">
            <h1 className="main__title main__title--black mb-1 mt-6
                          text-[64px] leading-[80px] 
                          max-lg:text-[48px] max-lg:leading-[48px]
                          max-md:text-center
                          max-sm:text-[24px] max-sm:leading-[30px]">
              8 хвилин чесності з собою.
              </h1>
            <h1 className="main__title main__title--gradient mb-[24px] 
                          text-[64px] leading-[80px] 
                          max-lg:text-[48px] max-lg:leading-[48px]
                          max-md:text-center
                          max-sm:text-[24px] max-sm:leading-[30px]">
              Пауза яку ти заслужив.
            </h1>
            <p className="text-[18px] leading-[150%] mb-[42px] text-[var(--dark-blue)] max-sm:hidden">
              Healthy Mind — чекап психологічного стану, створений, щоб допомогти зрозуміти, що відбувається всередині. Без моралізаторства. Без шаблонів. Чесно й по-людськи, з науковою основою.
            </p>
            <button className="button button--gradient-vertical w-[244px] max-md:w-full">
              Пройти чекап
              <img className="w-[16px] h-[16px]" src="/healthy-mind-landing/images/icons/mini-arrow.svg" alt="Arrow icon" />
            </button>
          </div>
          <div className="flex gap-4 mt-[32px] max-md:flex-col">
            <div className="main__info max-md:w-full">
              <img className="w-[20px] h-[20px]" src="/healthy-mind-landing/images/icons/analytics-dark-purple.svg" alt="analytics icon" />
              50+ показників
            </div>
            <div className="main__info max-md:w-full">
              <img className="w-[20px] h-[20px]" src="/healthy-mind-landing/images/icons/shield-green.svg" alt="analytics icon" />
              Безпечно та конфіденційно
            </div>
            <div className="main__info max-md:w-full">
              <img className="w-[20px] h-[20px]" src="/healthy-mind-landing/images/icons/clock-purple.svg" alt="analytics icon" />
              8 хвилин
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[50%]
                        min-w-[420px] min-h-[420px] w-[420px] h-[420px]
                        max-lg:min-w-[360px] max-lg:min-h-[360px] max-lg:w-[320px] max-lg:h-[320px]
                        max-md:min-w-[240px] max-md:min-h-[240px] max-md:w-[200px] max-md:h-[200px]
                        max-sm:min-w-[140px] max-sm:min-h-[140px] max-sm:w-[140px] max-sm:h-[140px]">
          <img className="h-full w-full" src="/healthy-mind-landing/images/main-image.webp" alt="Main illustration" />
        </div>
      </div>
    </section>
  );
};

export default Main;