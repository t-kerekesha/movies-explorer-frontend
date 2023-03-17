import './FormField.css';

function FormField({ label, name, type, value, handleChange, minLength, maxLength, errors }) {
  return (
    <label className="form-field">
      {label}
      <input className={`form-field__input ${errors[name] && "form-field__input_invalid"}`}
        id={`${name}-input`}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        required />
      <span className={`form-field__input-error ${name}-input-error`}>
        {errors[name]}
      </span>
    </label>
  );
}

export default FormField;