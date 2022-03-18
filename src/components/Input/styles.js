import styled, { css } from "styled-components";

export const InputWrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

const errorModifer = (theme) => css`
  color: ${theme.colors.red.main};
  border: 0.2rem solid ${theme.colors.red.main};
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  ${({ theme, styleType, error }) => css`
    width: 100%;
    height: 5rem;
    background: ${theme.colors.white};
    border-radius: ${styleType};
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

    ${!!error && errorModifer(theme)}
  `}
`;

export const Error = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red.main};
  `}
`;
