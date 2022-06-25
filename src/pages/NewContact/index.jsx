import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";
import ContactsService from "services/contactsService";
import { toast } from "utils/toast";

import * as S from "./styles";

function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const valueToSubmit = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category,
      };
      await ContactsService.createContact(valueToSubmit);
      toast.success("Contato cadastrado com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao cadastrar o contato!");
    }
  };
  return (
    <S.Wrapper>
      <PageHeader title="Novo contato" />
      <ContactsForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </S.Wrapper>
  );
}

export default NewContact;
