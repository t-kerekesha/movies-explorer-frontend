import { useState } from "react";

//хук управления формой
export function useForm() {
  const [values, setValues] = useState({});

  const changeValues = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value});
  };

  return {values, changeValues, setValues};
}