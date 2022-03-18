import { createPortal } from "react-dom";

import loader from "assets/images/loader.svg";

import * as S from "./styles";

function Loader() {
  return createPortal(
    <S.Overlay>
      <S.LoaderWrapper>
        <S.Loader src={loader} alt="Loading" />
      </S.LoaderWrapper>
    </S.Overlay>,
    document.getElementById("loader-root")
  );
}

export default Loader;
