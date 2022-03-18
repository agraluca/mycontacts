import styled, { css } from "styled-components";

export const SelectWrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.smallRadius};
    font-size: ${theme.font.sizes.medium};
    border: none;
    outline: 0;
    padding: 0 ${theme.spacings.xsmall};
    font-family: ${theme.font.family};

    &::placeholder {
      color: ${theme.colors.gray};
    }

    &:focus {
      outline: 0.2rem solid ${theme.colors.blue.main};
    }
  `}
`;
