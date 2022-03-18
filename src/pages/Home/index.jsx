import { useState } from "react";

import Input from "components/Input";
import Modal from "components/Modal";

import arrow from "assets/images/arrow.svg";
import edit from "assets/images/edit.svg";
import trash from "assets/images/trash.svg";

import { Link, useNavigate } from "react-router-dom";

import * as S from "./styles";
import Loader from "components/Loader";

function Home() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleEdit = (id = 1) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    setModal(true);
    console.log(`deleted item with id: ${id}`);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <S.Wrapper>
      {loading && <Loader />}
      {modal && <Modal handleCancel={handleCancel} colorType="danger" />}
      <Input styleType="search" />
      <S.ContactsListWrapper>
        <S.ContactsListHeader>
          <S.ContactsTotalNumber>3 Contatos</S.ContactsTotalNumber>
          <Link to="/new" className="contacts-list__link">
            Novo contato
          </Link>
        </S.ContactsListHeader>
        <S.ListContainer>
          <S.ListContainerHeader>
            <S.OrderButton type="button">
              Nome <S.Icon src={arrow} alt="Arrow" />
            </S.OrderButton>
          </S.ListContainerHeader>
          <S.CardContainer>
            <S.CardContent>
              <S.CardInfo>
                <S.CardName>Fulano</S.CardName>
                <S.CardBadge>Instagram</S.CardBadge>
              </S.CardInfo>
              <S.CardText>fulano@email.com</S.CardText>
              <S.CardText>fulano@email.com</S.CardText>
            </S.CardContent>
            <S.CardAction>
              <S.ActionButton onClick={() => handleEdit()}>
                <S.Icon src={edit} alt="Edit" />
              </S.ActionButton>
              <S.ActionButton onClick={handleDelete}>
                <S.Icon src={trash} alt="Delete" />
              </S.ActionButton>
            </S.CardAction>
          </S.CardContainer>
        </S.ListContainer>
      </S.ContactsListWrapper>
    </S.Wrapper>
  );
}

export default Home;
