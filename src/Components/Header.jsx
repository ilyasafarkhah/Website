import menuIcon from "./Pictures/pic2.svg";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        Safarkhah
      </a>

      <button className="header__menu-btn">
        <img src={menuIcon} alt="" />
      </button>
    </header>
  );
}

export default Header;