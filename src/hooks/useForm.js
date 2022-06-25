import { useState } from "react";

import {
  isEmailValid,
  isPhoneValid,
  removePhoneMask,
} from "utils/validateFields";
import useDebounce from "./useDebounce";

export default function useForm() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
  });

  const removeError = (name) => {
    setFormError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const setError = (name, message) => {
    return setFormError((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const handleErrorChange = (name, value) => {
    removeError(name);

    if (!value && Object.keys(formValue).includes(name)) {
      return setError(name, "Campo obrigatório");
    }

    if (name === "email" && !isEmailValid(value)) {
      return setError(name, "E-mail inválido");
    }

    if (name === "phone" && !isPhoneValid(removePhoneMask(value))) {
      return setError(name, "Telefone inválido");
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    handleErrorChange(name, value);
  };

  const isFormValid =
    Object.values(formValue).every((value) => !!value) &&
    Object.values(formError).filter((err) => !!err).length === 0;

  const debouncedErrorValue = useDebounce(formError, 500);

  return {
    formValue,
    formError: debouncedErrorValue,
    isFormValid,
    removeError,
    setError,
    handleChange,
  };
}
