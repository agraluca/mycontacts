import PropTypes from "prop-types";
import theme from "styles/theme";

import * as S from "./styles";

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  styleType: PropTypes.string,
  error: PropTypes.string,
};

function Input({
  type = "text",
  placeholder = "Pesquisar contato...",
  styleType = "normal",
  error,
  ...rest
}) {
  const borderStyle =
    styleType === "search" ? theme.border.radius : theme.border.smallRadius;
  return (
    <S.InputWrapper>
      <S.Input
        error={error}
        styleType={borderStyle}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.InputWrapper>
  );
}

export default Input;
