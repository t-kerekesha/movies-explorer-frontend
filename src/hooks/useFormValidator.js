import { useCallback, useState } from "react";

//хук валидации формы
export function useFormValidator() {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleErrors = (event) => {
    const target = event.target;
    const name = target.name;
    setErrors({...errors, [name]: target.validationMessage });
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