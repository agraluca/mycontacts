import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  ${({ theme, isLeaving }) => css`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.3rem);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.layers.overlay};
    animation: ${isLeaving ? fadeOut : fadeIn} 0.3s;
  `}
`;

export const ModalWrapper = styled.div`
  ${({ theme, isLeaving }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    background: ${theme.colors.white};
    border-radius: ${theme.border.smallRadius};
    padding: ${theme.spacings.small};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    width: 100%;
    max-width: 45rem;
    z-index: ${theme.layers.modal};
    animation: ${isLeaving ? scaleOut : scaleIn} 0.3s;
  `}
`;

const headingColorModifiers = {
  primary: (theme) => css`
    color: ${theme.colors.black};
  `,
  danger: (theme) => css`
    color: ${theme.colors.red.main};
  `,
};

export const ModalTitle = styled.h3`
  ${({ theme, colorType }) => css`
    ${!!colorType && headingColorModifiers[colorType](theme)}
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const ModalDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.normal};
  `}
`;

export const ButtonContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacings.xxsmall};
    width: 100%;
    margin-top: ${theme.spacings.large};
  `}
`;
export const CancelButton = styled.button`
  ${({ theme }) => css`
    border: 0.1rem solid transparent;
    border-radius: ${theme.border.smallRadius};
    color: ${theme.colors.gray};
    background: transparent;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: border 0.2s ease-in;
    &:hover {
      border: 0.1rem solid ${theme.colors.gray};
    }
    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
