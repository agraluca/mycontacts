import { useCallback, useEffect, useState } from "react";

import { createPortal } from "react-dom";

import ToastMessage from "./ToastMessage";

import { toastEventManager } from "utils/toast";

import * as S from "./styles";

export default function Toast() {
  const [toastInfo, setToastInfo] = useState([]);

  const handleAddToast = useCallback((event) => {
    const { type, message, duration } = event;
    setToastInfo((prev) => [
      ...prev,
      { id: Math.random(), type, message, duration },
    ]);
  }, []);

  useEffect(() => {
    toastEventManager.on("addtoast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addtoast", handleAddToast);
    };
  }, [handleAddToast]);

  const handleRemoveToast = useCallback((id) => {
    setToastInfo((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return createPortal(
    <S.Wrapper>
      {toastInfo.map((toast) => (
        <ToastMessage
          key={toast.id}
          type={toast.type}
          message={toast.message}
          duration={toast.duration}
          handleRemoveToast={() => handleRemoveToast(toast.id)}
        />
      ))}
    </S.Wrapper>,
    document.querySelector("#toast-root")
  );
}
