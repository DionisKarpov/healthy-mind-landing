import heartRed from '../assets/images/icons/heart-red.svg';
import fondMasha from '../assets/images/partners/fund-masha.png';
import azovHeart from '../assets/images/partners/azovstal-heart.png';
import olenaPinchukFund from '../assets/images/partners/olena-pinchuk-fund.png';
import doladu from '../assets/images/partners/doladu.png';
import oneHundredLife from '../assets/images/partners/100-life.jpg';

const Trust = () => {
  const logos = [
    { id: 1, src: fondMasha, alt: 'Фонд Маша', width: 105, height: 72 },
    { id: 2, src: azovHeart, alt: 'Серце Азовсталі', width: 78, height: 90  },
    { id: 3, src: olenaPinchukFund, alt: 'Фонд Олени Пінчук', width: 76, height: 97  },
    { id: 4, src: doladu, alt: 'Partner', width: 201, height: 90  },
    { id: 5, src: oneHundredLife, alt: '100% Life', width: 145, height: 54  },
  ];
  return (
    <section className="trust bg-[#FFF9F3]">
      <div className="trust__container flex flex-col items-center 
                      mt-20 mb-30 mx-auto
                      max-md:my-15 max-md:px-5">
        <div className="trust__label text-center w-fit">
          <img className="trust__image w-4 h-4" src={heartRed} alt="quote icon" />
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
          Підтримуємо і тих, хто звертається про допомогу, і тих, хто щодня її надає.<br />
          Разом із фондами допомагаємо відновлювати сили та баланс.
        </p>
        <p className="trust__description my-6 max-md:my-3">
          Нам довіряють:
        </p>
        <div className="trust__logo-slider h-[120px] max-md:h-14">
          <div className="logo-slider mt-6 mb-8 max-md:my-4">
            <div className="logo-slider__track gap-12 max-md:gap-5">
              {logos.map(logo => (
                <img style={{ height: logo.height, width: logo.width }}
                     className="max-md:!h-12 max-md:!w-auto" 
                     key={logo.id} src={logo.src} alt={logo.alt} />
              ))}
              {logos.map(logo => (
                <img style={{ height: logo.height, width: logo.width }}
                     className="max-md:!h-12 max-md:!w-auto" 
                     key={logo.id} src={logo.src} alt={logo.alt} />
              ))}
              {logos.map(logo => (
                <img style={{ height: logo.height, width: logo.width }}
                     className="max-md:!h-12 max-md:!w-auto" 
                     key={logo.id} src={logo.src} alt={logo.alt} />
              ))}
              {logos.map(logo => (
                <img style={{ height: logo.height, width: logo.width }}
                     className="max-md:!h-12 max-md:!w-auto" 
                     key={logo.id} src={logo.src} alt={logo.alt} />
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