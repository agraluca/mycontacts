import { createPortal } from "react-dom";

import loader from "assets/images/loader.svg";

import PropTypes from "prop-types";

import * as S from "./styles";

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

function Loader({ isLoading }) {
  if (!isLoading) return null;

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
