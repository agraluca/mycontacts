import useSafeAsyncAction from "hooks/useSafeAsyncAction";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactsService from "services/contactsService";
import { toast } from "utils/toast";

export default function useEditContact() {
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

  const handleSubmit = async (contact) => {
    try {
      const updatedContactData = await ContactsService.editContact(id, contact);
      setContactName(updatedContactData.name);
      toast.success("Contato editado com sucesso!");
    } catch (e) {
      toast.error("Ocorreu um erro ao editar o contato!", 4000);
    }
  };

  useEffect(() => {
    getSingleContact();
  }, [getSingleContact]);

  return { isLoading, contactName, contactFormRef, handleSubmit };
}
