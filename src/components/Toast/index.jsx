import { createPortal } from "react-dom";

import ToastMessage from "./ToastMessage";

import * as S from "./styles";
import { useCallback, useEffect, useState } from "react";

export default function Toast() {
  const [toastInfo, setToastInfo] = useState([]);

  const handleAddToast = useCallback((event) => {
    const { type, message } = event.detail;
    setToastInfo((prev) => [...prev, { id: Math.random(), type, message }]);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      document.addEventListener("addtoast", handleAddToast);
    }, 3000);

    return () => {
      document.removeEventListener("addtoast", handleAddToast);
      clearTimeout(handler);
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
