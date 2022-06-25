import { createPortal } from "react-dom";

import PropTypes from "prop-types";

import check from "assets/images/check-circle.svg";
import x from "assets/images/x-circle.svg";

import * as S from "./styles";

ToastMessage.propTypes = {
  type: PropTypes.oneOf(["default", "success", "error"]),
  message: PropTypes.string,
};

export default function ToastMessage({
  type = "success",
  message = "default",
}) {
  const icon = {
    error: {
      src: x,
      alt: "Error",
    },
    success: {
      src: check,
      alt: "Success",
    },
  };

  return (
    <S.Toast type={type}>
      {type !== "default" && (
        <S.Icon src={icon[type]?.src} alt={icon[type]?.alt} />
      )}
      {message}
    </S.Toast>
  );
}
