import { createPortal } from "react-dom";
import Button from "components/Button";

import PropTypes from "prop-types";

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
  if (!visible) {
    return null;
  }

  return createPortal(
    <S.Overlay>
      <S.ModalWrapper>
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
    </S.Overlay>,
    document.getElementById("modal-root")
  );
}

export default Modal;
