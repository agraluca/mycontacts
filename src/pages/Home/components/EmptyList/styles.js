import styled, { css } from "styled-components";

export const EmptyWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.grid.gutter};
    p {
      color: ${theme.colors.gray};
      text-align: center;
      font-size: ${theme.font.sizes.medium};
    }
    strong {
      color: ${theme.colors.blue.main};
    }
  `}
`;
