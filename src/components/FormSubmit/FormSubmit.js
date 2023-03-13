import './FormSubmit.css';

function FormSubmit({ buttonText }) {
  return (
    <button className="form-submit"
      type="submit">
      {buttonText}
    </button>
  );
}

export default FormSubmit;