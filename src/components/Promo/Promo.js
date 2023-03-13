import './Promo.css';

function Promo({ children }) {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.
      </p>
      <div className="promo__image" />
      {children}
    </section>
  );
}

export default Promo;