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
