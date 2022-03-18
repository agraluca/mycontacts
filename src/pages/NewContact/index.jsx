import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";
import { useState } from "react";

import * as S from "./styles";

function NewContact() {
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

  return (
    <S.Wrapper>
      <PageHeader title="Novo contato" />
      <ContactsForm
        buttonLabel="Cadastrar"
        formValue={formValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </S.Wrapper>
  );
}

export default NewContact;
