import { useCallback, useEffect, useState } from "react";

import { createPortal } from "react-dom";

import ToastMessage from "./ToastMessage";

import { toastEventManager } from "utils/toast";

import * as S from "./styles";

export default function Toast() {
  const [toastInfo, setToastInfo] = useState([]);

  const handleAddToast = useCallback((event) => {
    const { type, message } = event;
    setToastInfo((prev) => [...prev, { id: Math.random(), type, message }]);
  }, []);

  useEffect(() => {
    toastEventManager.on("addtoast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addtoast", handleAddToast);
    };
  }, [handleAddToast]);

  return createPortal(
    <S.Wrapper>
      {toastInfo.map((toast) => (
        <ToastMessage
          key={toast.id}
          type={toast.type}
          message={toast.message}
        />
      ))}
    </S.Wrapper>,
    document.querySelector("#toast-root")
  );
}
