import useHome from "./useHome";

import Input from "components/Input";
import Loader from "components/Loader";
import Modal from "components/Modal";

import Header from "./components/Header";
import ErrorStatus from "./components/ErrorStatus";
import EmptyList from "./components/EmptyList";
import SearchNotFound from "./components/SearchNotFound";
import ContactsList from "./components/ContactsList";

import * as S from "./styles";

function Home() {
  const {
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
  } = useHome();

  const hasContacts = !hasError && contacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearchEmpty =
    !hasError && hasContacts && filteredContacts.length === 0;

  return (
    <S.Wrapper>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <Input
          styleType="search"
          onChange={handleFilterContacts}
          value={searchTerm}
        />
      )}

      <S.ContactsListWrapper>
        <Header
          hasError={hasError}
          contactsLength={contacts.length}
          filteredContactsLength={filteredContacts.length}
        />

        {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

        {isListEmpty && <EmptyList />}

        {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

        {hasContacts && (
          <>
            <ContactsList
              filteredContacts={filteredContacts}
              onToggleOrderBy={handleToggleOrderBy}
              order={order}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

            <Modal
              visible={modal.isOpen}
              handleCancel={handleCloseModal}
              colorType="danger"
              title={`Tem certeza que deseja remover o contato ${modal.name}?`}
              handleConfirmDelete={handleConfirmDelete}
              isLoading={isDeletingLoading}
            />
          </>
        )}
      </S.ContactsListWrapper>
    </S.Wrapper>
  );
}

export default Home;
