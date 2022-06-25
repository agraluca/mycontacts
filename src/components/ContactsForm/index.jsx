import { useCallback, useEffect, useState } from "react";

import Input from "components/Input";
import Select from "components/Select";
import Button from "components/Button";

import CategoriesService from "services/categoriesService";

import PropTypes from "prop-types";

import useForm from "hooks/useForm";

import { formatPhone } from "utils/validateFields";

import * as S from "./styles";
import Spinner from "components/Spinner";

ContactsForm.propTypes = {
  buttonLabel: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

function ContactsForm({ buttonLabel = "Cadastrar", onSubmit }) {
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { formValue, formError, handleChange, isFormValid, setError } =
    useForm();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmiting(true);
    isFormValid && (await onSubmit(formValue));

    setIsSubmiting(false);
  };

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

export default ContactsForm;
