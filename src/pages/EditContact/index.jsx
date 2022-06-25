import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";

import ContactsService from "services/contactsService";

import * as S from "./styles";

function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getSingleContact = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactInfo = await ContactsService.listContactById(id);
      setContact(contactInfo);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getSingleContact();
  }, [getSingleContact]);

  const name = contact?.name;
  return (
    <S.Wrapper>
      <PageHeader title={`Editar ${name}`} />
      <ContactsForm buttonLabel="Salvar alterações" />
    </S.Wrapper>
  );
}

export default EditContact;
