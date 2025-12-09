import miniArrow from '../assets/images/icons/mini-arrow.svg';
import { openMainLink } from '../utils/navigation';

const UpperFooter = () => {

  return (
    <footer className="upper-footer flex justify-center max-lg:px-6">
      <div className="upper-footer__container flex flex-col items-center gap-4
                      mt-[90px] mb-[60px] 
                      max-md:mt-[60px] max-md:mb-[66px] max-md:gap-2">
        <div className="upper-footer__title text-[56px] leading-[70px]
                        max-md:text-[24px] max-md:leading-[30px]">8 хвилин чесності, і ви вже ближче до балансу</div>
        <div className="upper-footer__title upper-footer__title--gradient
                        upper-footer__title text-[56px] leading-[70px]
                        max-md:text-[24px] max-md:leading-[30px]">Турбота про себе — це нова форма стійкості</div>
        <button className="button button--gradient-vertical 
                           w-[262px] max-md:w-full mt-[48px]"
                           onClick={() => openMainLink()}>
          Пройти чекап зараз
          <img className="w-[16px] h-[16px]" src={miniArrow} alt="Arrow icon" />
        </button>
      </div>
    </footer>
  );
};

export default UpperFooter;