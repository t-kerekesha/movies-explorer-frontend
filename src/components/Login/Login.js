import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../FormField/FormField';
import FormSubmit from '../FormSubmit/FormSubmit';
import Logo from '../Logo/Logo';
import './Login.css';

function Login() {
  const [userData, setUserData] = useState({
    email: 'pochta@yandex.ru',
    password: ''
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
    <main className="login">
      <Logo />
      <form className="login__form"
        onSubmit={handleSubmit}
        name="login"
        noValidate>
        <h1 className="login__title">Рады видеть!</h1>
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
        <FormSubmit buttonText="Войти" />
      </form>
      <p className="login__signup">Ещё не зарегистрированы?
        <Link to="/signup"
          className="login__signup-link">
          Регистрация
        </Link>
      </p>
    </main>
  );
}

export default Login;