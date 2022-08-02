import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import Input from "components/Input";
import Select from "components/Select";
import Button from "components/Button";

import CategoriesService from "services/categoriesService";

import PropTypes from "prop-types";

import useForm from "hooks/useErrors";

import {
  isEmailValid,
  isPhoneValid,
  removePhoneMask,
  formatPhone,
} from "utils/validateFields";

import * as S from "./styles";
import useSafeAsyncState from "hooks/useSafeAsyncState";

const ContactsForm = forwardRef(
  ({ buttonLabel = "Cadastrar", onSubmit }, ref) => {
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
    const [isLoadingCategories, setIsLoadingCategories] =
      useSafeAsyncState(true);
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
            category: contact.category_id ?? "",
          }));
        },
        resetFields: () => setFormValue(formValueInitialState),
      }),
      [formValueInitialState]
    );

    useEffect(() => {
      getCategories();
    }, [getCategories]);

    return (
      <S.Form onSubmit={handleSubmit} noValidate>
        <Input
          styleType="normal"
          placeholder="Nome*"
          name="name"
          value={formValue.name}
          onChange={handleChange}
          error={formError.name}
          disabled={isSubmiting}
        />

        <Input
          styleType="normal"
          placeholder="E-mail*"
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          error={formError.email}
          disabled={isSubmiting}
        />
        <Input
          styleType="normal"
          placeholder="Telefone*"
          type="tel"
          maxLength={15}
          name="phone"
          value={formatPhone(formValue.phone)}
          onChange={handleChange}
          error={formError.phone}
          disabled={isSubmiting}
        />
        <Select
          disabled={isLoadingCategories || isSubmiting}
          name="category"
          value={formValue.category}
          onChange={handleChange}
          error={formError.category}
          isLoading={isLoadingCategories}
        >
          <option value="">Sem categorias</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        <Button
          disabled={!isFormValid}
          size="fullWidth"
          colorType="primary"
          type="submit"
          isSubmiting={isSubmiting}
        >
          {buttonLabel}
        </Button>
      </S.Form>
    );
  }
);

ContactsForm.propTypes = {
  buttonLabel: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;
