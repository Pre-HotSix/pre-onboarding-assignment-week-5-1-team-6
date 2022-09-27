import * as S from './style';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Sick } from '../../utils/Types';

export default function SearchResult() {
  const result = useSelector((state: RootState) => {
    return state.result.value;
  });
  const searchInput = useSelector((state: RootState) => {
    return state.search.value;
  });

  return (
    <>
      <S.RecommendTitle>추천 검색어</S.RecommendTitle>
      {result.map((data: Sick) => (
        <S.Row key={data.sickCd}>
          <FaSearch size={12} />
          <S.RowText>
            {data.sickNm.split(searchInput)[0]}
            <span style={{ fontWeight: 700 }}>{searchInput}</span>
            {data.sickNm.split(searchInput)[1]}
          </S.RowText>
        </S.Row>
      ))}
    </>
  );
}
