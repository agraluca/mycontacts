import { useCallback, useEffect, useMemo, useState } from "react";

import Input from "components/Input";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Button from "components/Button";

import arrow from "assets/images/arrow.svg";
import edit from "assets/images/edit.svg";
import trash from "assets/images/trash.svg";
import sad from "assets/images/sad.svg";
import emptyBox from "assets/images/empty-box.svg";
import magnifierQuestion from "assets/images/magnifier-question.svg";

import { Link, useNavigate } from "react-router-dom";

import ContactsService from "services/contactsService";

import * as S from "./styles";
import { toast } from "utils/toast";

function Home() {
  const [modal, setModal] = useState({ isOpen: false, id: null, name: "" });
  const [isLoading, setIsLoading] = useState(true);
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
        if (["name", "email", "phone", "category_name"]?.includes(key)) {
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

  const handleConfirmDelete = async () => {
    try {
      await ContactsService.deleteContact(modal.id);
      toast.success("Contato deletado com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao deletar o contato!", 4000);
    } finally {
      getContacts();
      setModal({ isOpen: false, id: null, name: "" });
    }
  };

  const handleCancel = () => {
    setModal({ isOpen: false, id: null, name: "" });
  };

  const getContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(order);
      setHasError(false);
      setContacts(contactsList);
    } catch (e) {
      console.error(e);
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

  return (
    <S.Wrapper>
      <Loader isLoading={isLoading} />
      {modal.isOpen && (
        <Modal
          handleCancel={handleCancel}
          colorType="danger"
          title={`Tem certeza que deseja remover o contato ${modal.name}?`}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
      {contacts.length > 0 && (
        <Input
          styleType="search"
          onChange={handleFilterContacts}
          value={searchTerm}
        />
      )}
      <S.ContactsListWrapper>
        <S.ContactsListHeader
          hasError={hasError}
          noContacts={contacts.length === 0}
        >
          {!hasError && contacts.length > 0 && (
            <S.ContactsTotalNumber>
              {filteredContacts.length}{" "}
              {filteredContacts.length === 1 ? " contato" : " contatos"}
            </S.ContactsTotalNumber>
          )}
          <Link to="/new" className="contacts-list__link">
            Novo contato
          </Link>
        </S.ContactsListHeader>

        {hasError && (
          <S.ErrorContainer>
            <S.Icon src={sad} alt="sad icon" />
            <S.ErrorInfoContainer>
              <S.ErrorTitle>
                Ocorreu um erro ao obter os seus contatos!
              </S.ErrorTitle>
              <Button
                colorType="primary"
                size="normal"
                onClick={handleTryAgain}
              >
                Tentar novamente
              </Button>
            </S.ErrorInfoContainer>
          </S.ErrorContainer>
        )}

        {!hasError && (
          <>
            {contacts.length === 0 && !isLoading && (
              <S.EmptyWrapper>
                <img src={emptyBox} alt="Empty box" />
                <p>
                  Você ainda não tem nenhum contato cadastrado! Clique no botão
                  <strong> ”Novo contato” </strong> à cima para cadastrar o seu
                  primeiro!
                </p>
              </S.EmptyWrapper>
            )}
            {contacts.length > 0 && filteredContacts.length === 0 && (
              <S.ContactsNotFound>
                <img src={magnifierQuestion} alt="Magnifier Question" />
                <p>
                  Nenhum contato encontrado para <strong>”{searchTerm}”</strong>
                </p>
              </S.ContactsNotFound>
            )}
            <S.ListContainer>
              {filteredContacts.length > 0 && (
                <S.ListContainerHeader>
                  <S.OrderButton type="button" onClick={handleToggleOrderBy}>
                    Nome <S.OrderIcon order={order} src={arrow} alt="Arrow" />
                  </S.OrderButton>
                </S.ListContainerHeader>
              )}
              {filteredContacts.map((contact) => {
                return (
                  <S.CardContainer key={contact.id}>
                    <S.CardContent>
                      <S.CardInfo>
                        <S.CardName>{contact.name}</S.CardName>
                        {contact.category_name && (
                          <S.CardBadge>{contact.category_name}</S.CardBadge>
                        )}
                      </S.CardInfo>
                      <S.CardText>{contact.email}</S.CardText>
                      <S.CardText>{contact.phone}</S.CardText>
                    </S.CardContent>
                    <S.CardAction>
                      <S.ActionButton onClick={() => handleEdit(contact.id)}>
                        <S.Icon src={edit} alt="Edit" />
                      </S.ActionButton>
                      <S.ActionButton onClick={() => handleDelete(contact)}>
                        <S.Icon src={trash} alt="Delete" />
                      </S.ActionButton>
                    </S.CardAction>
                  </S.CardContainer>
                );
              })}
            </S.ListContainer>
          </>
        )}
      </S.ContactsListWrapper>
    </S.Wrapper>
  );
}

export default Home;
