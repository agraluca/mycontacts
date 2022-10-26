import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import * as S from "./styles";

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  contactsLength: PropTypes.number.isRequired,
  filteredContactsLength: PropTypes.number.isRequired,
};

export default function Header({
  hasError,
  contactsLength,
  filteredContactsLength,
}) {
  return (
    <S.ContactsListHeader hasError={hasError} noContacts={contactsLength === 0}>
      {!hasError && contactsLength > 0 && (
        <S.ContactsTotalNumber>
          {filteredContactsLength}{" "}
          {filteredContactsLength === 1 ? " contato" : " contatos"}
        </S.ContactsTotalNumber>
      )}
      <Link to="/new" className="contacts-list__link">
        Novo contato
      </Link>
    </S.ContactsListHeader>
  );
}
