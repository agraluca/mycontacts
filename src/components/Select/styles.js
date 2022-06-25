import styled, { css } from "styled-components";

const errorModifer = (theme) => css`
  color: ${theme.colors.red.main};
  border: 0.2rem solid ${theme.colors.red.main};
  &:focus {
    outline: none;
  }
`;

export const SelectWrapper = styled.section`
  ${() => css`
    width: 100%;
    position: relative;

    svg {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;

export const Select = styled.select`
  ${({ theme, error }) => css`
    width: 100%;
    height: 5rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.smallRadius};
    font-size: ${theme.font.sizes.medium};
    border: none;
    outline: 0;
    padding: 0 ${theme.spacings.xsmall};
    font-family: ${theme.font.family};
    appearance: none;

    &::placeholder {
      color: ${theme.colors.gray};
    }

    &:focus {
      outline: 0.2rem solid ${theme.colors.blue.main};
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${!!error && errorModifer(theme)}
  `}
`;

export const Error = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red.main};
  `}
`;
