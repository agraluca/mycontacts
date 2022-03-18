import PropTypes from "prop-types";
import * as S from "./styles";

Button.propTypes = {
  children: PropTypes.node,
  colorType: PropTypes.string,
  size: PropTypes.string,
};

function Button({ colorType = "primary", size = "normal", children, ...rest }) {
  return (
    <S.Button colorType={colorType} size={size} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
