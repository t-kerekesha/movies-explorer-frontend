import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">&copy; 2023</p>
      <div className="footer__partners">
        <p className="footer__partner">Яндекс.Практикум</p>
        <p className="footer__partner">Github</p>
      </div>
    </footer>
  );
}

export default Footer;