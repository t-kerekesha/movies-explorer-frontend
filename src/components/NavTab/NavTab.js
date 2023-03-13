import './NavTab.css';

function NavTab() {
  function scrollToElement() {
    const element = document.querySelector('#about-project');
    element.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <button className="nav-tab"
      type="button"
      onClick={scrollToElement}>
      Узнать больше
    </button>
  );
}

export default NavTab;