import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile() {
  const currentUser = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({
    name: currentUser?.name,
    email: currentUser?.email
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  // function handleFocus(event) {
  //   event.target.parentNode.focus();
  //   event.target.focus();
  // }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="profile">
      <h1 className="profile__title">
        {`Привет, ${currentUser?.name}!`}
      </h1>
      <form className="profile__form"
        onSubmit={handleSubmit}
        name="profile"
        noValidate>
        <label className="profile__label">
          Имя
          <input className="profile__input"
            name="name"
            type="text"
            value={userData?.name}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required />
        </label>
        <label className="profile__label">
          E&#8209;mail
          <input className="profile__input"
            name="email"
            type="email"
            value={userData?.email}
            onChange={handleChange}
            required />
        </label>
        <button className="profile__button profile__button_type_submit"
          type="submit">
          Редактировать
        </button>
        <button className="profile__button profile__button_type_logout"
          type="button">
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;