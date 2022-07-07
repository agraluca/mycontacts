import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";
import { useRef } from "react";
import ContactsService from "services/contactsService";
import { toast } from "utils/toast";

import * as S from "./styles";

function NewContact() {
  const contactFormRef = useRef(null);

  const handleSubmit = async (formData) => {
    try {
      const valueToSubmit = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category,
      };
      await ContactsService.createContact(valueToSubmit);
      contactFormRef.current.resetFields();
      toast.success("Contato cadastrado com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao cadastrar o contato!", 4000);
    }
  };
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
