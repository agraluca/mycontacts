import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";
import Loader from "components/Loader";

import useEditContact from "./useEditContact";

import * as S from "./styles";

function EditContact() {
  const { isLoading, contactName, contactFormRef, handleSubmit } =
    useEditContact();

  return (
    <S.Wrapper>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? "Carregando..." : `Editar ${contactName}`}
      />
      <ContactsForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </S.Wrapper>
  );
}

export default EditContact;
