import './FormField.css';

function FormField({ label, name, type, value, handleChange, minLength,
maxLength }) {
  return (
    <label className="form-field">
      {label}
      <input className="form-field__input"
        id={`${name}-input`}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        required />
      <span className={`form-field__input-error ${name}-input-error`}>
        Что-то пошло не так...
      </span>
    </label>
  );
}

export default FormField;