import { forwardRef } from "react";

import Input from "components/Input";
import Select from "components/Select";
import Button from "components/Button";

import PropTypes from "prop-types";

import { formatPhone } from "utils/validateFields";

import useContactForm from "./useContactForm";

import * as S from "./styles";

const ContactsForm = forwardRef(
  ({ buttonLabel = "Cadastrar", onSubmit }, ref) => {
    const {
      handleSubmit,
      formValue,
      handleChange,
      formError,
      isSubmiting,
      isLoadingCategories,
      categories,
      isFormValid,
    } = useContactForm({ onSubmit, ref });

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
