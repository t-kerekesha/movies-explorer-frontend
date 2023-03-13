import './Techs.css';

function Techs({ children }) {
  return (
    <section className="techs">
      {children}
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии,
        которые применили в&nbsp;дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;