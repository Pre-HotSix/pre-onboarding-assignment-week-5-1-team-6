import RelatedSearchTerms from '../RelatedSearchTerms';
import { FaSearch } from 'react-icons/fa';
import * as S from './style';
import { useEffect, useState } from 'react';
import { getData } from '../../apis';
import { Storage } from '../../utils/Storage';
import { ConvertToJson, ConvertToString } from '../../utils/Convert';
import { useDispatch } from 'react-redux';
import { change } from '../../store/searchSlice';
import { update } from '../../store/resultSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const searching = async (filterText: string) => {
    dispatch(change(filterText));
    const cacheData = ConvertToJson(Storage.get(filterText));

    if (cacheData) {
      dispatch(update(cacheData));
    } else {
      const { data } = await getData(filterText);
      Storage.set(filterText, ConvertToString(data));
      dispatch(update(data));
    }
  };

  const initDispatch = () => {
    dispatch(change(''));
    dispatch(update([]));
  };

  useEffect(() => {
    const check = setTimeout(() => {
      const filterText = searchText.trim();
      filterText ? searching(filterText) : initDispatch();
    }, 500);

    return () => {
      clearTimeout(check);
    };
  }, [searchText]);

  return (
    <S.Container>
      <S.SearchContainer>
        <FaSearch />
        <S.SearchInput
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchContainer>
      <RelatedSearchTerms />
    </S.Container>
  );
}
