import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useFormValidator } from '../../hooks/useFormValidator';
import FormField from '../FormField/FormField';
import FormSubmit from '../FormSubmit/FormSubmit';
import Logo from '../Logo/Logo';
import './Login.css';

function Login({ loggedIn, onLogin }) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
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

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(userData);
    resetForm();
  }

  if (loggedIn) {
    return <Navigate to="/movies" replace />
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
          handleChange={handleChange}
          errors={errors} />
        <FormField
          label="Пароль"
          name="password"
          type="password"
          value={userData?.password}
          handleChange={handleChange}
          errors={errors} />
        <FormSubmit
          buttonText="Войти"
          disabled={!isValid} />
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