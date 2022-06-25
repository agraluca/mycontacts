import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    top: 3rem;
    right: 3rem;
    z-index: ${theme.layers.modal};
  `}
`;
