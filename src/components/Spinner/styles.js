import styled, { css } from "styled-components";

export const Wrapper = styled.svg`
  ${({ theme }) => css`
    path {
      stroke: ${theme.colors.blue.main};
    }
  `}
`;
