
const UpperFooter = () => {

  return (
    <footer className="upper-footer flex justify-center">
      <div className="upper-footer__container flex flex-col items-center gap-4 
                      mt-[90px] mb-[60px] 
                      max-md:mt-[60px] max-md:mb-[66px]">
        <div className="upper-footer__title">8 хвилин чесності, і ти вже ближче до балансу.</div>
        <div className="upper-footer__title upper-footer__title--gradient">Турбота про себе — це нова форма стійкості.</div>
        <button className="button button--gradient-vertical 
                           w-[262px] max-md:w-full mt-[48px]">
          Пройти чекап зараз
          <img className="w-[16px] h-[16px]" src="./src/assets/images/icons/mini-arrow.svg" alt="Arrow icon" />
        </button>
      </div>
    </footer>
  );
};

export default UpperFooter;