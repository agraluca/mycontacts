import Spinner from "components/Spinner";
import PropTypes from "prop-types";
import * as S from "./styles";

Select.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

function Select({ children, error, isLoading, ...rest }) {
  return (
    <S.SelectWrapper>
      <S.Select error={error} {...rest}>
        {children}
      </S.Select>
      {error && <S.Error>{error}</S.Error>}
      {isLoading && <Spinner size={25} />}
    </S.SelectWrapper>
  );
}

export default Select;
