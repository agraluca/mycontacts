import PropTypes from "prop-types";

import magnifierQuestion from "assets/images/magnifier-question.svg";

import * as S from "./styles";

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default function SearchNotFound({ searchTerm }) {
  return (
    <S.ContactsNotFound>
      <img src={magnifierQuestion} alt="Magnifier Question" />
      <p>
        Nenhum contato encontrado para <strong>”{searchTerm}”</strong>
      </p>
    </S.ContactsNotFound>
  );
}
