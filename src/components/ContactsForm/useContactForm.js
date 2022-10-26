import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import CategoriesService from "services/categoriesService";

import useForm from "hooks/useErrors";

import {
  isEmailValid,
  isPhoneValid,
  removePhoneMask,
} from "utils/validateFields";

import useSafeAsyncState from "hooks/useSafeAsyncState";

export default function useContactForm({ onSubmit, ref }) {
  const formValueInitialState = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      category: "",
    }),
    []
  );
  const [formValue, setFormValue] = useState(formValueInitialState);
  const { formError, setError, removeError } = useForm();
  const [categories, setCategories] = useSafeAsyncState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const getCategories = useCallback(async () => {
    try {
      setIsLoadingCategories(true);
      const categoriesList = await CategoriesService.listCategories();
      setCategories(categoriesList);
    } catch (e) {
      setError("category", "Ocorreu um erro no servidor");
    } finally {
      setIsLoadingCategories(false);
    }
  }, [setCategories, setError, setIsLoadingCategories]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmiting(true);
    isFormValid && (await onSubmit(formValue));
    setIsSubmiting(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (contact) => {
        setFormValue((prev) => ({
          ...prev,
          name: contact.name ?? "",
          email: contact.email ?? "",
          phone: contact.phone ?? "",
          category: contact.category.id ?? "",
        }));
      },
      resetFields: () => setFormValue(formValueInitialState),
    }),
    [formValueInitialState]
  );

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return {
    handleSubmit,
    formValue,
    handleChange,
    formError,
    isSubmiting,
    isLoadingCategories,
    categories,
    isFormValid,
  };
}
