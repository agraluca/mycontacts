import PropTypes from "prop-types";

import check from "assets/images/check-circle.svg";
import x from "assets/images/x-circle.svg";

import * as S from "./styles";
import { useEffect } from "react";

ToastMessage.propTypes = {
  type: PropTypes.oneOf(["default", "success", "error"]),
  message: PropTypes.string,
  duration: PropTypes.number,
  handleRemoveMessage: PropTypes.func,
};

export default function ToastMessage({
  type = "success",
  message = "default",
  duration,
  handleRemoveToast,
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

  const handleKeyPress = (event) => {
    if (["Enter", "Space"].includes(event.code)) {
      handleRemoveToast();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(handleRemoveToast, duration ?? 3000);
    return () => clearTimeout(timeoutId);
  }, [duration, handleRemoveToast]);

  return (
    <S.Toast
      tabIndex={0}
      role="button"
      type={type}
      onClick={handleRemoveToast}
      onKeyPress={handleKeyPress}
    >
      {type !== "default" && (
        <S.Icon src={icon[type]?.src} alt={icon[type]?.alt} />
      )}
      {message}
    </S.Toast>
  );
}
