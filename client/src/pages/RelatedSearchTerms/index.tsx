import * as S from './style';
import { FaSearch } from 'react-icons/fa';
import { Sick } from '../../utils/Types';

interface Props {
  result: Sick[];
  searchText: string;
}

export default function RelatedSearchTerms({ result, searchText }: Props) {
  return (
    <S.Container>
      {result.length === 0 && <div>검색어없음</div>}
      {result.map((data: Sick) => (
        <S.Row key={data.sickCd}>
          <FaSearch size={12} />
          <S.RowText>
            {data.sickNm.split(searchText)[0]}
            <span style={{ fontWeight: 700 }}>{searchText}</span>
            {data.sickNm.split(searchText)[1]}
          </S.RowText>
        </S.Row>
      ))}
    </S.Container>
  );
}
