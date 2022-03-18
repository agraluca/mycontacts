import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css``}
`;

export const ContactsListWrapper = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const ContactsListHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

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

export const ListContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const ListContainerHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
  `}
`;

export const OrderButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    background: transparent;
    border: none;
    color: ${theme.colors.blue.main};
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

export const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    margin-top: ${theme.spacings.xsmall};
    border-radius: ${theme.border.smallRadius};
    padding: ${theme.spacings.xsmall};
  `}
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const CardName = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const CardBadge = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.blue.main};
    background: ${theme.colors.blue.lighter};
    padding: ${theme.spacings.xxsmall};
    text-transform: uppercase;
    border-radius: ${theme.border.smallRadius};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const CardText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const CardAction = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const ActionButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
  `}
`;
