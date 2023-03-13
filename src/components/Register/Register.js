import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../FormField/FormField';
import FormSubmit from '../FormSubmit/FormSubmit';
import Logo from '../Logo/Logo';
import './Register.css';

function Register() {
  const [userData, setUserData] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
    password: '12345678111111'
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="register">
      <Logo />
      <form className="register__form"
        onSubmit={handleSubmit}
        name="register"
        noValidate>
        <h1 className="register__title">Добро пожаловать!</h1>
        <FormField
          label="Имя"
          name="name"
          type="text"
          value={userData?.name}
          handleChange={handleChange}
          minLength="2"
          maxLength="30" />
        <FormField
          label="E-mail"
          name="email"
          type="email"
          value={userData?.email}
          handleChange={handleChange} />
        <FormField
          label="Пароль"
          name="password"
          type="password"
          value={userData?.password}
          handleChange={handleChange} />
        <FormSubmit buttonText="Зарегистрироваться" />
      </form>
      <p className="register__signin">Уже зарегистрированы?
        <Link to="/signin"
          className="register__signin-link">
          Войти
        </Link>
      </p>
    </main>
  );
}

export default Register;