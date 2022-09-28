import styled from 'styled-components';

export const ListWrap = styled.ul`
  position: relative;
  top: 10px;
  display: flex;
  flex-direction: column;
  width: 490px;
  height: 299px;
  border-radius: 20px;
  overflow-y: auto;
  box-shadow: 0 0 14px rgb(0 0 0 / 18%);
  background-color: white;

  li {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    min-height: 50px;
    border-bottom: 1px solid gray;
    :last-of-type {
      border-bottom: 0;
    }

    cursor: pointer;
    :hover {
      background-color: #cae9ff;
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);
    }

    dl {
      margin-left: 12px;
      dd {
        font-size: 0.75rem;
        color: black;
        max-width: 170px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  font-weight: ${(props: IProps) => (props.isMatched ? 'bold' : 'normal')};
  color: ${(props: IProps) => (props.isMatched ? 'black' : '')};
`;
