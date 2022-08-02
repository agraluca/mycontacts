import { useCallback, useEffect, useRef, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import ContactsForm from "components/ContactsForm";
import PageHeader from "components/PageHeader";
import Loader from "components/Loader";

import ContactsService from "services/contactsService";

import { toast } from "utils/toast";

import * as S from "./styles";
import useSafeAsyncAction from "hooks/useSafeAsyncAction";

function EditContact() {
  const { id } = useParams();

  const [contactName, setContactName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const safeAsyncAction = useSafeAsyncAction();

  const contactFormRef = useRef(null);

  const getSingleContact = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactInfo = await ContactsService.getContactById(id);
      safeAsyncAction(() => {
        setContactName(contactInfo.name);
        contactFormRef.current.setFieldsValues(contactInfo);
        setIsLoading(false);
      });
    } catch (e) {
      safeAsyncAction(() => {
        navigate("/");
        toast.error("Contato não encontrado!", 4000);
      });
    }
  }, [id, navigate, safeAsyncAction]);

  const handleSubmit = async (formData) => {
    try {
      const valueToSubmit = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category,
      };
      const updatedContactData = await ContactsService.editContact(
        id,
        valueToSubmit
      );
      setContactName(updatedContactData.name);
      toast.success("Contato editado com sucesso!");
    } catch (e) {
      toast.error("Ocorreu um erro ao editar o contato!", 4000);
    }
  };

  useEffect(() => {
    getSingleContact();
  }, [getSingleContact]);

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
