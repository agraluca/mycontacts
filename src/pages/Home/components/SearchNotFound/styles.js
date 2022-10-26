import styled, { css } from "styled-components";

export const ContactsNotFound = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    align-items: flex-start;
    gap: ${theme.grid.gutter};

    p {
      color: ${theme.colors.gray};
      text-align: center;
      font-size: ${theme.font.sizes.large};
      word-break: break-word;
    }
  `}
`;
