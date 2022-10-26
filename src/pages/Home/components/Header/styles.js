import styled, { css } from "styled-components";

const contactsListHeaderModifier = {
  hasError: () => css`
    justify-content: flex-end;
  `,
  noContacts: () => css`
    justify-content: center;
  `,
};

export const ContactsListHeader = styled.header`
  ${({ theme, hasError, noContacts }) => css`
    display: flex;
    justify-content: space-between;
    ${!!noContacts && contactsListHeaderModifier.noContacts()}
    ${!!hasError && contactsListHeaderModifier.hasError()}
    align-items: center;
    border-bottom: 0.1rem solid ${theme.colors.blue.lighter};
    padding: ${theme.spacings.xsmall};
    .contacts-list__link {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.normal};
      color: ${theme.colors.blue.main};
      border: 0.2rem solid ${theme.colors.blue.main};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      border-radius: ${theme.border.smallRadius};
      text-decoration: none;
      transition: all 0.2s ease-in;

      &:hover {
        background: ${theme.colors.blue.main};
        color: ${theme.colors.white};
      }
    }
  `}
`;

export const ContactsTotalNumber = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.black};
  `}
`;
