import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.TITLE};;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 36px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 360px;
  height: 50px;
  display: flex;
  margin: 10px 10px;
  border: 1px solid white;
  border-radius: 30px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 80%;
  border: 1px solid white;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};;
  padding: 10px 10px;
`;

export const SearchButton = styled.button`
  width: 20%;
  background-color: white;
  border: 0;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 0;
  letter-spacing: 0;
  word-spacing: 0;
`;

export const ListBox = styled.div`
  width: 100%;
  max-width: 360px;
  height: 360px;
  overflow-y: scroll;
  padding: 10px 10px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
`;

export const RecommendP = styled.p`
  color: gray;
  padding: 10px 0;
`;

export const RecommendLi = styled.li`
  padding: 10px 0;
`;