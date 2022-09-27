import RelatedSearchTerms from '../RelatedSearchTerms';
import { FaSearch } from 'react-icons/fa';
import * as S from './style';
import { useEffect, useState } from 'react';
import { getData } from '../../apis';
import { Storage } from '../../utils/Storage';
import { CheckCache } from '../../utils/CheckCache';
import { ConvertToJson, ConvertToString } from '../../utils/Convert';
import { Sick } from '../../utils/Types';

let allData: any = [];
export default function SearchBar() {
  const [result, setResult] = useState<Sick[] | []>([]);
  const [searchText, setSearchText] = useState('');

  const filtering = (): Sick[] => {
    return allData.filter((sick: Sick) => sick.sickNm.includes(searchText));
  };

  const searching = (): void => {
    const cacheData = ConvertToJson(Storage.get(searchText));

    if (cacheData) {
      setResult(cacheData);
    } else {
      const filteredData = filtering();
      Storage.set(searchText, ConvertToString(filteredData));
      setResult(filteredData);
    }
  };

  useEffect(() => {
    const isCache = CheckCache('all_data');
    if (isCache) {
      allData = ConvertToJson(Storage.get('all_data'));
    } else {
      getData().then(({ data }) => {
        Storage.set('all_data', ConvertToString(data));
        allData = data;
      });
    }
  }, []);

  useEffect(() => {
    const check = setTimeout(() => {
      if (searchText.trim()) {
        searching();
      } else {
        setResult([]);
      }
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
      <RelatedSearchTerms result={result} searchText={searchText} />
    </S.Container>
  );
}
