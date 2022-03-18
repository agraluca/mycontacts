import arrow from "assets/images/arrow.svg";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import * as S from "./styles";

PageHeader.propTypes = {
  title: PropTypes.string,
};

function PageHeader({ title = "Novo contato" }) {
  return (
    <S.Wrapper>
      <S.LinkWrapper>
        <S.Icon src={arrow} alt="Go back" />
        <Link to=".." className="page-header__link">
          Voltar
        </Link>
      </S.LinkWrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}

export default PageHeader;
