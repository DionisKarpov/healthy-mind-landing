const Trust = () => {
  const logos = [
    { id: 1, src: './src/assets/images/partners/forbes-logo.svg', alt: 'Forbes' },
    { id: 2, src: './src/assets/images/partners/ain-logo.svg', alt: 'Ain' },
    { id: 3, src: './src/assets/images/partners/bazilik-logo.svg', alt: 'Bazilik' },
    { id: 4, src: './src/assets/images/partners/partner-logo.svg', alt: 'Partner' },
    { id: 5, src: './src/assets/images/partners/speka-logo.svg', alt: 'Speka' },
    { id: 6, src: './src/assets/images/partners/vector-logo.svg', alt: 'Vector' },
  ];
  return (
    <section className="trust bg-[#FFF9F3]">
      <div className="trust__container flex flex-col items-center 
                      mt-20 mb-30 mx-auto
                      max-md:my-20 max-md:px-5">
        <div className="trust__label text-center w-fit">
          <img className="trust__image w-4 h-4" src="./src/assets/images/icons/heart-red.svg" alt="quote icon" />
          <span className="trust__label--text">
            Довіра
          </span>
        </div>
        <h2 className="trust__title text-center 
                       text-[44px] font-medium leading-[125%] 
                       max-md:text-[20px] max-md:font-semibold ">
          Ми поруч із тими, хто підтримує інших
        </h2>
        <p className="trust__description text-[18px] leading-[28px] mt-4 
                      max-md:text-[16px] max-md:leading-[24px] ">
          Підтримуємо і тих, хто звертається по допомогу, і тих, хто щодня її надає.<br />
          Разом із фондами допомагаємо відновлювати сили та баланс.
        </p>
        <p className="trust__description my-6 max-md:my-3">
          Нам довіряють:
        </p>
        <div className="trust__logo-slider h-[66px] max-md:h-8">
          <div className="logo-slider my-3 max-md:my-2">
            <div className="logo-slider__track gap-10 max-md:gap-5">
              {logos.map(logo => (
                <img className="h-[42px] max-md:h-[16px]" key={logo.id} src={logo.src} alt={logo.alt} />
              ))}
              {logos.map(logo => (
                <img className="h-[42px] max-md:h-[16px]" key={`${logo.id}-duplicate`} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
        <div className="trust__boarded-section text-center text-[16px] max-md:text-[14px] mt-12 max-md:mt-9">
          Турбота про себе створює простір для турботи про інших. Коли людина у балансі, вона має сили підтримувати, надихати й діяти з внутрішнього спокою, а не виснаження.
        </div>
      </div>
    </section>
  );
};

export default Trust;