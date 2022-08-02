import loader from "assets/images/loader.svg";
import CreatePortalWrapper from "components/CreatePortalWrapper";

import PropTypes from "prop-types";

import * as S from "./styles";

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <CreatePortalWrapper selector="loader-root">
      <S.Overlay>
        <S.LoaderWrapper>
          <S.Loader src={loader} alt="Loading" />
        </S.LoaderWrapper>
      </S.Overlay>
    </CreatePortalWrapper>
  );
}

export default Loader;
