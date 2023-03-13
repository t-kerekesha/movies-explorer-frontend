import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isMenuOpen, onCloseMenu }) {
  const className = ({ isActive }) => `navigation__link
                  ${isActive && "navigation__link_active"}`;
  return (
    <nav className={`navigation ${isMenuOpen && "navigation_visible"}`}>
      <ul className="navigation__list">
        <li className="navigation__item link">
          <NavLink to="/"
            onClick={onCloseMenu}
            className={className}>
            Главная
          </NavLink>
        </li>
        <li className="navigation__item link">
          <NavLink to="/movies"
            onClick={onCloseMenu}
            className={className}>
            Фильмы
          </NavLink></li>
        <li className="navigation__item link">
          <NavLink to="/saved-movies"
            onClick={onCloseMenu}
            className={className}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__item link">
          <NavLink to="/profile"
            onClick={onCloseMenu}
            className="navigation__profile">
            Аккаунт
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;