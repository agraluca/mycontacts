import styled, { css } from "styled-components";

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(246, 245, 252, 0.6);
    backdrop-filter: blur(0.3rem);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.layers.overlay};
  `}
`;

export const LoaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Loader = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;
