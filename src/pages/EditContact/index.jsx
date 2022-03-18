import { useState } from "react";

import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";

import * as S from "./styles";

function EditContact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    telephone: "",
    social: "Instagram",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const name = "Luca Agra";
  return (
    <S.Wrapper>
      <PageHeader title={`Editar ${name}`} />
      <ContactsForm
        buttonLabel="Salvar alterações"
        formValue={formValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </S.Wrapper>
  );
}

export default EditContact;
