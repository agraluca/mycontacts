import { useCallback, useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import ContactsService from "services/contactsService";

import { toast } from "utils/toast";

export default function useHome() {
  const [modal, setModal] = useState({ isOpen: false, id: null, name: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletingLoading, setIsDeletingLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleFilterContacts = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      return Object.keys(contact).some((key) => {
        if (["name", "email", "phone", "category"]?.includes(key)) {
          if (key === "category")
            return contact[key]?.name
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase());
          return contact[key]?.toLowerCase().includes(searchTerm.toLowerCase());
        }
      });
    });
  }, [contacts, searchTerm]);

  const handleToggleOrderBy = () => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = ({ id, name }) => {
    setModal({ isOpen: true, id, name });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false, id: null, name: "" });
  };

  const handleConfirmDelete = async () => {
    try {
      setIsDeletingLoading(true);
      await ContactsService.deleteContact(modal.id);
      toast.success("Contato deletado com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao deletar o contato!", 4000);
    } finally {
      getContacts();
      setIsDeletingLoading(false);
      handleCloseModal();
    }
  };

  const getContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(order);
      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [order]);

  const handleTryAgain = () => {
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return {
    isLoading,
    modal,
    handleCloseModal,
    handleConfirmDelete,
    isDeletingLoading,
    contacts,
    handleFilterContacts,
    searchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    order,
    handleToggleOrderBy,
    handleEdit,
    handleDelete,
  };
}
