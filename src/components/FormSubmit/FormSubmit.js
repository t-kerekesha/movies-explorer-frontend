import './FormSubmit.css';

function FormSubmit({ buttonText, disabled }) {
  return (
    <button className="form-submit"
      type="submit"
      disabled={disabled}>
      {buttonText}
    </button>
  );
}

export default FormSubmit;