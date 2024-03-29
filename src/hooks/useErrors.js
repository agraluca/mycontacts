import { useCallback, useState } from "react";

import useDebounce from "./useDebounce";

export default function useForm() {
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
  });

  const removeError = useCallback((name) => {
    setFormError((prev) => ({
      ...prev,
      [name]: "",
    }));
  }, []);

  const setError = useCallback((name, message) => {
    return setFormError((prev) => ({
      ...prev,
      [name]: message,
    }));
  }, []);

  const debouncedErrorValue = useDebounce(formError, 500);

  return {
    formError: debouncedErrorValue,
    removeError,
    setError,
  };
}
