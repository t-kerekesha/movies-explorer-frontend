import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import { useForm } from '../../hooks/useForm';
import { useFormValidator } from '../../hooks/useFormValidator';
import FormField from '../FormField/FormField';
import FormSubmit from '../FormSubmit/FormSubmit';
import Logo from '../Logo/Logo';
import './Register.css';

function Register({ loggedIn, onRegister }) {
  // const { values, changeValues } = useForm();
  const [userData, setUserData] = useState({
    name: '',
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
    onRegister(userData);
    resetForm();
  }

  if (loggedIn) {
    return <Navigate to="/movies" replace />
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
          maxLength="30"
          errors={errors} />
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
          buttonText="Зарегистрироваться"
          disabled={!isValid} />
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