import avatar from '../../images/avatar.png';
import './AboutMe.css';

function AboutMe({ children }) {
  return (
    <section className="about-me">
      {children}
      <h3 className="about-me__name">Виталий</h3>
      <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
      <p className="about-me__about">
        Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове,
        закончил факультет экономики СГУ. У&nbsp;меня
        есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку,
        а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
        С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
        После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
        фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
      </p>
      <a href="https://github.com/t-kerekesha"
        className="about-me__github" target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <img src={avatar} className="about-me__avatar" alt="Аватар" />
    </section>
  );
}

export default AboutMe;