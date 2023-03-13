import './AboutProject.css';

function AboutProject({ children }) {
  return (
    <section className="about-project" id="about-project">
      {children}
      <h3 className="about-project__column-title">
        Дипломный проект включал 5 этапов
      </h3>
      <p className="about-project__text">
        Составление плана, работу над бэкендом, вёрстку,
        добавление функциональности и&nbsp;финальные доработки.
      </p>
      <h3 className="about-project__column-title">
        На&nbsp;выполнение диплома ушло 5 недель
      </h3>
      <p className="about-project__text">
        У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн,
        которые нужно было соблюдать, чтобы успешно защититься.
      </p>
      <div className="about-project__duration">
        <div className="about-project__duration-backend">1 неделя</div>
        <p className="about-project__duration-stage">Back-end</p>
        <div className="about-project__duration-frontend">4 недели</div>
        <p className="about-project__duration-stage">Front-end</p>
      </div>

    </section>
  )
}

export default AboutProject;