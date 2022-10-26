import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css``}
`;

export const ContactsListWrapper = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;
