import { useRef } from "react";

import ContactsService from "services/contactsService";

import { toast } from "utils/toast";

export default function useNewContact() {
  const contactFormRef = useRef(null);

  const handleSubmit = async (contact) => {
    try {
      await ContactsService.createContact(contact);
      contactFormRef.current.resetFields();
      toast.success("Contato cadastrado com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao cadastrar o contato!", 4000);
    }
  };

  return {
    contactFormRef,
    handleSubmit,
  };
}
