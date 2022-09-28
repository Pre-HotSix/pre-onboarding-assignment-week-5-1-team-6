import * as S from './style';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Sick } from 'utils/Types';
import { useCallback, useEffect, useState } from 'react';

export default function SearchResult() {
  const result = useSelector((state: RootState) => state.result.value);
  const searchInput = useSelector((state: RootState) => state.search.value);
  const [count, setCount] = useState(-2);

  const keyboardListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        count < result.length - 1 && setCount((prev) => prev + 1);
      }
      if (e.key === 'ArrowUp') {
        count > 0 && setCount((prev) => prev - 1);
      }
    },
    [count, result]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyboardListener);
    return () => {
      window.removeEventListener('keydown', keyboardListener);
    };
  }, [keyboardListener]);

  useEffect(() => {
    setCount(-2);
  }, [searchInput]);

  return (
    <>
      <S.RecommendTitle>추천 검색어</S.RecommendTitle>
      {result.map((data: Sick, index: number) => (
        <S.Row key={data.sickCd} isFocus={index === count}>
          <FaSearch size={12} />
          <S.RowText>
            {data.sickNm.split(searchInput)[0]}
            <S.BoldText>{searchInput}</S.BoldText>
            {data.sickNm.split(searchInput)[1]}
          </S.RowText>
        </S.Row>
      ))}
    </>
  );
}
