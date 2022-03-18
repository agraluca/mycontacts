import Input from "components/Input";
import Select from "components/Select";
import Button from "components/Button";

import PropTypes from "prop-types";

import * as S from "./styles";

ContactsForm.propTypes = {
  buttonLabel: PropTypes.string,
  formValue: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

function ContactsForm({
  buttonLabel = "Cadastrar",
  formValue,
  handleChange,
  handleSubmit,
}) {
  return (
    <S.Form onSubmit={handleSubmit}>
      <Input
        styleType="normal"
        placeholder="Nome"
        name="name"
        value={formValue.name}
        onChange={handleChange}
      />
      <Input
        styleType="normal"
        placeholder="E-mail"
        type="email"
        name="email"
        value={formValue.email}
        onChange={handleChange}
      />
      <Input
        styleType="normal"
        placeholder="Telefone"
        type="tel"
        name="telephone"
        value={formValue.telephone}
        onChange={handleChange}
      />
      <Select name="social" value={formValue.social} onChange={handleChange}>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Whatsapp">Whatsapp</option>
      </Select>
      <Button size="fullWidth" colorType="primary" type="submit">
        {buttonLabel}
      </Button>
    </S.Form>
  );
}

export default ContactsForm;
