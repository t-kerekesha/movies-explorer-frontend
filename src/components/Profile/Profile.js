import { useCallback, useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidator } from '../../hooks/useFormValidator';
import './Profile.css';

function Profile({ loggedIn, onUpdateUser, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({
    name: currentUser?.name,
    email: currentUser?.email
  });
  const { handleErrors, errors, isValid, resetForm } = useFormValidator();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
    handleErrors(event);
  }

  // function handleFocus(event) {
  //   event.target.parentNode.focus();
  //   event.target.focus();
  // }

  const hasChanges = useCallback(() => {
    if (userData.name !== currentUser.name ||
      userData.email !== currentUser.email) {
      return true;
    } else {
      return false;
    }
  }, [userData, currentUser]);

  useEffect(() => {
    if (isValid && hasChanges()) {
      document.forms.profile.querySelector('button[type=submit]').disabled = false;
    } else {
      document.forms.profile.querySelector('button[type=submit]').disabled = true;
    }
  }, [isValid, hasChanges]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser(userData);
    resetForm();
  }

  if (!loggedIn) {
    return <Navigate to="/" replace />
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
          <input className={`profile__input ${errors["name"] && "profile__input_invalid"}`}
            name="name"
            type="text"
            value={userData?.name}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required />
          <span className="profile__input-error name-input-error">
            {errors["name"]}
          </span>
        </label>
        <label className="profile__label">
          E&#8209;mail
          <input className={`profile__input ${errors["email"] && "profile__input_invalid"}`}
            name="email"
            type="email"
            value={userData?.email}
            onChange={handleChange}
            required />
          <span className="profile__input-error email-input-error">
            {errors["email"]}
          </span>
        </label>
        <button className="profile__button profile__button_type_submit"
          type="submit"
          disabled={!isValid}>
          Редактировать
        </button>
        <button className="profile__button profile__button_type_logout"
          type="button"
          onClick={onLogout}>
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;