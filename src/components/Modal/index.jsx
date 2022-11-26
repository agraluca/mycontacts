import { useEffect, useState } from "react";

import Button from "components/Button";
import CreatePortalWrapper from "components/CreatePortalWrapper";

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
  const [shoudRender, setShouldRender] = useState(visible);

  const handleAnimationEnd = () => {
    if (!visible) setShouldRender(false);
  };

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }
  }, [visible]);

  if (!shoudRender) {
    return null;
  }

  return (
    <CreatePortalWrapper selector="modal-root">
      <S.Overlay isLeaving={!visible} onAnimationEnd={handleAnimationEnd}>
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
