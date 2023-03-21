import { useCallback, useState } from "react";
import validator from "validator";
import { MESSAGE_INVALID_EMAIL } from "../utils/constants";

//хук валидации формы
export function useFormValidator() {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleErrors = (event) => {
    const target = event.target;
    const name = target.name;
    if (name === 'email') {
      if (!validator.isEmail(target.value)) {
        target.setCustomValidity(MESSAGE_INVALID_EMAIL);
      } else {
        target.setCustomValidity('');
      }
    }
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback((newErrors = {}, newIsValid = false) => {
    setErrors(newErrors);
    setIsValid(newIsValid);
  },
    [setErrors, setIsValid]
  );

  return { handleErrors, errors, isValid, resetForm };
}