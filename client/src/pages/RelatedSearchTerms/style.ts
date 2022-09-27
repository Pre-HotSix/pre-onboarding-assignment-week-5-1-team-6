import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: 50vh;
  border-radius: 20px;
  border: 1px solid transparent;
  margin-top: 5px;
  padding: 15px;
  overflow-y: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const RowText = styled.span`
  font-size: 14px;
  margin-left: 10px;
`;