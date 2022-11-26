import styled, { css } from "styled-components";

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
  ${({ theme, order }) => css`
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

export const OrderIcon = styled.img`
  ${({ order }) => css`
    transform: ${order === "desc" ? "rotate(180deg)" : "rotate(0deg)"};
    transition: all 0.2s ease-in;
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
  ${() => css`
    background: transparent;
    border: none;
  `}
`;

export const Icon = styled.img`
  ${() => css`
    &:hover {
      opacity: 0.8;
    }
  `}
`;
