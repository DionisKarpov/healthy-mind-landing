const Trust = () => {
  const logos = [
    { id: 1, src: './src/assets/images/partners/forbes-logo.svg', alt: 'Forbes' },
    { id: 2, src: './src/assets/images/partners/ain-logo.svg', alt: 'ain' },
    { id: 3, src: './src/assets/images/partners/forbes-logo.svg', alt: 'Forbes' },
    { id: 4, src: './src/assets/images/partners/ain-logo.svg', alt: 'ain' },
    { id: 5, src: './src/assets/images/partners/forbes-logo.svg', alt: 'Forbes' },
    { id: 6, src: './src/assets/images/partners/ain-logo.svg', alt: 'ain' },
  ];
  return (
    <section className="trust bg-[#FFF9F3]">
      <div className="trust__container flex flex-col items-center">
        <div className="trust__label text-center w-fit">
          <img className="trust__image w-4 h-4" src="./src/assets/images/icons/heart-red.svg" alt="quote icon" />
          <span className="trust__label--text">
            Довіра
          </span>
        </div>
        <h2 className="trust__title text-center">
          Ми поруч із тими, хто підтримує інших
        </h2>
        <p className="trust__description mt-4">
          Підтримуємо і тих, хто звертається по допомогу, і тих, хто щодня її надає.<br />
          Разом із фондами допомагаємо відновлювати сили та баланс.
        </p>
        <p className="trust__description mt-6 mb-6">
          Нам довіряють:
        </p>
        <div className="trust__logo-slider">
          <div className="logo-slider">
            <div className="logo-slider__track">
              {logos.map(logo => (
                <img key={logo.id} src={logo.src} alt={logo.alt} />
              ))}
              {logos.map(logo => (
                <img key={`${logo.id}-duplicate`} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
        <div className="trust__boarded-section text-center mt-12">
          Турбота про себе створює простір для турботи про інших. Коли людина у балансі, вона має сили підтримувати, надихати й діяти з внутрішнього спокою, а не виснаження.
        </div>
      </div>
    </section>
  );
};

export default Trust;