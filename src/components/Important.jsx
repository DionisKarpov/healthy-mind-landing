const Important = () => {

  return (
    <section className="important bg-[#F8FAFF]">
      <div className="important__container flex flex-col items-center">
        <div className="important__label text-center w-fit">
          <img className="important__image w-4 h-4" src="./src/assets/images/icons/warning-orange.svg" alt="quote icon" />
          <span className="important__label--text">
            Довіра
          </span>
        </div>
        <div className="important__items">
          <div className="important-item">
            <div className="important-item__image-container">
              <img className="important-item__image w-12 h-12" src="./src/assets/images/icons/brain-white.svg" alt="Brain icon" />
            </div>
            <h3 className="important-item__title">
              1 з 3 українців
            </h3>
            <p className="important-item__description">
              має ознаки певного психологічного розладу
            </p>
          </div>
          <div className="important-item">
            <div className="important-item__image-container">
              <img className="important-item__image w-12 h-12" src="./src/assets/images/icons/brain-white.svg" alt="Brain icon" />
            </div>
            <h3 className="important-item__title">
              47% населення
            </h3>
            <p className="important-item__description">
              відчувають високий рівень стресу
            </p>
          </div>
          <div className="important-item">
            <div className="important-item__image-container">
              <img className="important-item__image w-12 h-12" src="./src/assets/images/icons/brain-white.svg" alt="Brain icon" />
            </div>
            <h3 className="important-item__title">
              38% людей
            </h3>
            <p className="important-item__description">
              мають проблеми зі сном
            </p>
          </div>
        </div>
        <div className="important__colored-section flex flex-col gap-6 w-full">
          <h2 className="important__title">
            Це — не слабкість. Це наслідки життя в<br /> умовах постійної напруги.
          </h2>
          <p className="important__description">
            Healthy Mind допомагає бути уважним до себе.<br />
            Щоб розуміти, що саме відчуваєш, як реагуєш і чого потребуєш. Це психологія, яка поруч:<br /> 
            проста, людяна, доступна. Бо стійкість не про вміння терпіти, а вміння жити в рівновазі зі своїм<br /> 
            внутрішнім світом.
          </p>
        </div>
        <button className="button button--light-gradient-inclined 
                           w-[290px] max-md:w-full mt-[-28px]">
          Пройти чекап зараз
          <img className="w-[16px] h-[16px]" src="./src/assets/images/icons/arrow.svg" alt="Arrow icon" />
        </button>
      </div>
    </section>
  );
};

export default Important;