import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;
