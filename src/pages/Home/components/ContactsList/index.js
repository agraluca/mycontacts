import PropTypes from "prop-types";

import arrow from "assets/images/arrow.svg";
import edit from "assets/images/edit.svg";
import trash from "assets/images/trash.svg";

import * as S from "./styles";

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function ContactsList({
  filteredContacts,
  onToggleOrderBy,
  order,
  onEdit,
  onDelete,
}) {
  return (
    <S.ListContainer>
      {filteredContacts.length > 0 && (
        <S.ListContainerHeader>
          <S.OrderButton type="button" onClick={onToggleOrderBy}>
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
                {contact.category.name && (
                  <S.CardBadge>{contact.category.name}</S.CardBadge>
                )}
              </S.CardInfo>
              <S.CardText>{contact.email}</S.CardText>
              <S.CardText>{contact.phone}</S.CardText>
            </S.CardContent>
            <S.CardAction>
              <S.ActionButton onClick={() => onEdit(contact.id)}>
                <S.Icon src={edit} alt="Edit" />
              </S.ActionButton>
              <S.ActionButton onClick={() => onDelete(contact)}>
                <S.Icon src={trash} alt="Delete" />
              </S.ActionButton>
            </S.CardAction>
          </S.CardContainer>
        );
      })}
    </S.ListContainer>
  );
}
