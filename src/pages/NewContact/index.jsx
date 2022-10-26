import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";

import useNewContact from "./useNewContact";

import * as S from "./styles";

function NewContact() {
  const { contactFormRef, handleSubmit } = useNewContact();
  return (
    <S.Wrapper>
      <PageHeader title="Novo contato" />
      <ContactsForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </S.Wrapper>
  );
}

export default NewContact;
