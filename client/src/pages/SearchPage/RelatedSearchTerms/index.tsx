import * as S from './style';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { NotSearched, SearchResult } from 'components';

export default function RelatedSearchTerms() {
  const result = useSelector((state: RootState) => state.result.value);

  return (
    <S.Container isResult={result.length > 0}>
      {result.length === 0 ? <NotSearched /> : <SearchResult />}
    </S.Container>
  );
}
