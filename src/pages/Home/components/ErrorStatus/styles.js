import styled, { css } from "styled-components";

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};
  `}
`;

export const ErrorInfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;
export const ErrorTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.red.main};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const Icon = styled.img`
  ${() => css`
    &:hover {
      opacity: 0.8;
    }
  `}
`;
