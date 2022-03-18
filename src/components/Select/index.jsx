import PropTypes from "prop-types";
import * as S from "./styles";

Select.propTypes = {
  children: PropTypes.node,
};

function Select({ children, ...rest }) {
  return (
    <S.SelectWrapper>
      <S.Select {...rest}>{children}</S.Select>
    </S.SelectWrapper>
  );
}

export default Select;
