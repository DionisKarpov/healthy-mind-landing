const Header = () => {
  return (
    <header className="header max-xl:px-5 max-md:px-4">
      <div className="header__container flex flex-row items-center justify-between">
        <a href="/" className="header__logo h-6 max-md:h-[17px]">
          <img src="/healthy-mind-landing/images/logo.svg" className="h-full" alt="Healthy mind logo" />
        </a>

        <button className="header__label">
          <span>Розроблено в Україні</span>
          <span>🇺🇦</span>
        </button>
      </div>
    </header>
  );
};

export default Header;