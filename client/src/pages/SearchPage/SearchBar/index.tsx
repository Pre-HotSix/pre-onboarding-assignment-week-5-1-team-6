import RelatedSearchTerms from '../RelatedSearchTerms';
import { FaSearch } from 'react-icons/fa';
import * as S from './style';
import { useCallback } from 'react';
import { getData } from 'apis';
import { Storage } from 'utils/Storage';
import { useDispatch } from 'react-redux';
import { updateSearchText } from 'store/searchSlice';
import { updateResult } from 'store/resultSlice';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function SearchBar() {
  const dispatch = useDispatch();

  const initDispatch = () => {
    dispatch(updateSearchText(''));
    dispatch(updateResult([]));
  };

  const debounce = (
    callback: (e: ChangeEvent) => void,
    delay: number | undefined
  ) => {
    let timeout: NodeJS.Timeout | undefined;

    return (args: ChangeEvent) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback(args), delay);
    };
  };

  const searching = async (e: ChangeEvent) => {
    const filterText = e.target.value.trim();
    if (!filterText) initDispatch();
    else {
      dispatch(updateSearchText(filterText));
      const cacheData = Storage.get(filterText);
      if (cacheData) {
        dispatch(updateResult(cacheData));
      } else {
        const { data } = await getData(filterText);
        Storage.set(filterText, data);
        dispatch(updateResult(data));
      }
    }
  };

  const searchTerms = useCallback(
    debounce((e: ChangeEvent) => searching(e), 500),
    []
  );

  return (
    <S.Container>
      <S.SearchContainer>
        <FaSearch />
        <S.SearchInput type="text" onChange={searchTerms} autoFocus />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchContainer>
      <RelatedSearchTerms />
    </S.Container>
  );
}
