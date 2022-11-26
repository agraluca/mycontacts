import Button from "components/Button";
import CreatePortalWrapper from "components/CreatePortalWrapper";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import * as S from "./styles";

Modal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.node,
  description: PropTypes.string,
  cancelButtonLabel: PropTypes.string,
  deleteButtonLabel: PropTypes.string,
  colorType: PropTypes.oneOf(["primary", "danger"]),
  handleCancel: PropTypes.func,
  handleConfirmDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};

function Modal({
  visible,
  title = "Tem certeza? ",
  description = "Essa ação não poderá ser desfeita!",
  cancelButtonLabel = "Cancelar",
  deleteButtonLabel = "Deletar",
  colorType = "primary",
  handleCancel,
  handleConfirmDelete,
  isLoading = false,
}) {
  const [shoudRender, setShouldRender] = useState(visible);

  useEffect(() => {
    let timeoutId;
    if (visible) {
      setShouldRender(true);
    } else {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [visible]);

  if (!shoudRender) {
    return null;
  }

  return (
    <CreatePortalWrapper selector="modal-root">
      <S.Overlay isLeaving={!visible}>
        <S.ModalWrapper isLeaving={!visible}>
          <S.ModalTitle colorType={colorType}>{title}</S.ModalTitle>
          <S.ModalDescription>{description}</S.ModalDescription>
          <S.ButtonContainer>
            <S.CancelButton onClick={handleCancel} disabled={isLoading}>
              {cancelButtonLabel}
            </S.CancelButton>
            <Button
              size="normal"
              colorType={colorType}
              onClick={handleConfirmDelete}
              isSubmiting={isLoading}
            >
              {deleteButtonLabel}
            </Button>
          </S.ButtonContainer>
        </S.ModalWrapper>
      </S.Overlay>
    </CreatePortalWrapper>
  );
}

export default Modal;
