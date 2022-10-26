import emptyBox from "assets/images/empty-box.svg";

import * as S from "./styles";

export default function EmptyList() {
  return (
    <S.EmptyWrapper>
      <img src={emptyBox} alt="Empty box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong> ”Novo contato” </strong> à cima para cadastrar o seu primeiro!
      </p>
    </S.EmptyWrapper>
  );
}
