import styled, { css } from "styled-components";

const buttonSizeModifiers = {
  normal: () => css`
    width: auto;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

const buttonColorModifiers = {
  primary: (theme) => css`
    background: ${theme.colors.blue.main};
    &:hover {
      background: ${theme.colors.blue.light};
    }
    &:active {
      background: ${theme.colors.blue.dark};
    }
  `,
  danger: (theme) => css`
    background: ${theme.colors.red.main};
    &:hover {
      background: ${theme.colors.red.light};
    }
    &:active {
      background: ${theme.colors.red.dark};
    }
  `,
};

export const Button = styled.button`
  ${({ theme, size, colorType }) => css`
    ${!!size && buttonSizeModifiers[size]()};
    ${!!colorType && buttonColorModifiers[colorType](theme)};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.smallRadius};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
    padding: ${theme.spacings.xsmall};
    transition: background 0.2s ease-in;
  `}
`;
