import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';

import './Header.css'

function Header({ isLoggedIn, isPromoPage }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }

  return (
    <header className={`header ${isPromoPage && "header_promo"}`}>
      <Logo className="header__logo" />
      {isLoggedIn ?
        <>
          <Navigation />
          <button className="header__button-burger"
            type="button"
            onClick={openMenu}
            aria-label="Открыть меню" />
          <Menu
            isMenuOpen={isMenuOpen}
            openMenu={openMenu}>
            <Navigation
              isMenuOpen={isMenuOpen}
              onCloseMenu={openMenu} />
          </Menu>
        </>
        :
        <nav className="header__auth">
          <Link to="/signup"
            className="header__register link">
            Регистрация
          </Link>
          <Link to="/signin"
            className="header__login link">
            Войти
          </Link>
        </nav>
      }
    </header>
  );
}

export default Header;