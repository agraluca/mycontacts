import Spinner from "components/Spinner";

import PropTypes from "prop-types";

import * as S from "./styles";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  colorType: PropTypes.string,
  size: PropTypes.string,
  isSubmiting: PropTypes.bool,
  disabled: PropTypes.bool,
};

function Button({
  colorType = "primary",
  size = "normal",
  children,
  isSubmiting = false,
  disabled = false,
  ...rest
}) {
  return (
    <S.Button
      colorType={colorType}
      size={size}
      disabled={disabled || isSubmiting}
      {...rest}
    >
      {isSubmiting ? <Spinner size={18} /> : children}
    </S.Button>
  );
}

export default Button;
