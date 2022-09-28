import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  padding-top: 20vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  height: 45px;
  width: 60vw;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
  border: 1px solid transparent;
  border: 25px;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const SearchInput = styled.input`
  border: none;
  -webkit-appearance: none;
  overflow: auto;
  height: 45px;
  width: 50vw;
  z-index: -1;
  margin-left: 10px;

  :focus {
    outline: none;
    text-align: left;
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.BUTTON_COLOR};
  height: 45px;
  width: 10vw;
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  z-index: -1;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 0 10px;
  cursor: pointer;
`;
