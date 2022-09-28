import styled from 'styled-components';

export const Row = styled.div<{ isFocus: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({ isFocus }) => (isFocus ? '#d2d4d6' : '')};
`;

export const RowText = styled.span`
  font-size: 14px;
  margin-left: 10px;
`;

export const RecommendTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.X_SMALL};
  color: ${({ theme }) => theme.colors.GRAY};
  margin-bottom: 5px;
  padding: 0 15px;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;
