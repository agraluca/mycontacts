import { createPortal } from "react-dom";
import Button from "components/Button";

import PropTypes from "prop-types";

import * as S from "./styles";

Modal.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
  cancelButtonLabel: PropTypes.string,
};

function Modal({
  title = "Tem certeza? ",
  description = "Essa ação não poderá ser desfeita!",
  cancelButtonLabel = "Cancelar",
  deleteButtonLabel = "Deletar",
  colorType = "primary",
  handleCancel,
}) {
  return createPortal(
    <S.Overlay>
      <S.ModalWrapper>
        <S.ModalTitle colorType={colorType}>{title}</S.ModalTitle>
        <S.ModalDescription>{description}</S.ModalDescription>
        <S.ButtonContainer>
          <S.CancelButton onClick={handleCancel}>
            {cancelButtonLabel}
          </S.CancelButton>
          <Button size="normal" colorType={colorType}>
            {deleteButtonLabel}
          </Button>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </S.Overlay>,
    document.getElementById("modal-root")
  );
}

export default Modal;
