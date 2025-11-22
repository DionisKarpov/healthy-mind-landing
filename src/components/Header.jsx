const Header = () => {
  return (
    <header className="header max-xl:px-5">
      <div className="header__container flex flex-row align-center justify-between">
        <a href="/" className="header__logo">
          <div className="header__logo-icon">
            <img src="./src/assets/images/logo.svg" alt="Healthy mind logo" />
          </div>
        </a>

        <button className="button button--outlined-pink button--h-40">
          <span>Розроблено в Україні</span>
          <span>🇺🇦</span>
        </button>
      </div>
    </header>
  );
};

export default Header;