import styled, { css } from "styled-components";

export const WrapperContainer = styled.header`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LogoImage = styled.img`
  ${() => css`
    width: 20rem;
  `}
`;
