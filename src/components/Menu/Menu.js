import './Menu.css';

function Menu({ isMenuOpen, openMenu, children }) {
  function close(event) {
    if (event.target.classList.contains('menu_visible') ||
      event.target.classList.contains('menu__button-close')) {
      openMenu();
    }
  }

  return (
    <div className={`menu ${isMenuOpen && "menu_visible"}`}
      onMouseDown={close}>
      <div className={`menu__container ${isMenuOpen && "menu__container_visible"}`}>
        <button className="menu__button-close"
          type="button"
          onMouseDown={close}
          aria-label="Закрыть меню" />
        {children}
      </div>
    </div>
  );
}

export default Menu;