import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li><a href="https://github.com/t-kerekesha/how-to-learn"
          className="portfolio__link-item" target="_blank" rel="noopener noreferrer">
          <p className="portfolio__link-text">Статичный сайт</p>
          <p className="portfolio__link-arrow">&#8599;</p>
        </a></li>
        <li><a href="https://github.com/t-kerekesha/russian-travel"
          className="portfolio__link-item" target="_blank" rel="noopener noreferrer">
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <p className="portfolio__link-arrow">&#8599;</p>
        </a></li>
        <li><a href="https://github.com/t-kerekesha/react-mesto-api-full"
          className="portfolio__link-item portfolio__link-item_last" target="_blank" rel="noopener noreferrer">
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <p className="portfolio__link-arrow">&#8599;</p>
        </a></li>
      </ul>
    </section>
  );
}

export default Portfolio;