import styled from 'styled-components';

export const Container = styled.div<{ isResult: boolean }>`
  width: 60vw;
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: ${({ isResult }) => (isResult ? '50vh' : '8vh')};
  border-radius: 20px;
  border: 1px solid transparent;
  margin-top: 5px;
  padding: 15px 0;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 750px) {
    height: ${({ isResult }) => (isResult ? '65vh' : '8vh')};
  }
`;
