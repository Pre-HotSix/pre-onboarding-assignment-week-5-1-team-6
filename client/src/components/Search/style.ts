import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 490px;
  height: 75px;
  position: relative;
  top: 0;
  z-index: 11;
  margin-top: 13px;
  margin-left: 1px;

  > div {
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    > button {
      width: 48px;
      min-width: 48px;
      height: 48px;
      border-radius: 50%;
      color: white;
      fill: white;

      background-color: ${theme.colors.MAIN_COLOR};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px 0 48px;
  border: none;
  background-color: white;
  outline: 0;

  ::placeholder {
    color: gray;
  }
`;
