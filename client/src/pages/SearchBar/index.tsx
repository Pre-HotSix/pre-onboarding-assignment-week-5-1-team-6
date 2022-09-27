import RelatedSearchTerms from '../RelatedSearchTerms';
import { FaSearch } from 'react-icons/fa';
import * as S from './style';
import { useEffect } from 'react';
import { getData } from '../../apis';
import { Storage } from '../../utils/Storage';

export default function SearchBar() {

  return (
    <S.Container>
      <S.SearchContainer>
        <FaSearch />
        <S.SearchInput type={'search'} />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchContainer>
      <RelatedSearchTerms />
    </S.Container>
  );
}
