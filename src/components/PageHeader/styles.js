import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;
export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    .page-header__link {
      color: ${theme.colors.blue.main};
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    transform: rotate(-90deg);
  `}
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.bold};
  `}
`;
