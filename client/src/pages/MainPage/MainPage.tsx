import { useState } from 'react';
import SearchBar from 'components/Search';
import useFetch from 'hooks/useFetch';
import { Wrapper } from './style';
import { IWord } from 'types/word';

export default function MainPage() {
  const [selectedWord, setSelectedWord] = useState<IWord>({
    sickCd: '',
    sickNm: '',
  });

  useFetch();

  return (
    <Wrapper>
      <SearchBar placeholder="검색해주세요" setSelectedWord={setSelectedWord} />
    </Wrapper>
  );
}
