import PropTypes from "prop-types";

import Button from "components/Button";

import sad from "assets/images/sad.svg";

import * as S from "./styles";

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};

export default function ErrorStatus({ onTryAgain }) {
  return (
    <S.ErrorContainer>
      <S.Icon src={sad} alt="sad icon" />
      <S.ErrorInfoContainer>
        <S.ErrorTitle>Ocorreu um erro ao obter os seus contatos!</S.ErrorTitle>
        <Button colorType="primary" size="normal" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </S.ErrorInfoContainer>
    </S.ErrorContainer>
  );
}
