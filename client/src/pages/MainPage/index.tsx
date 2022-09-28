import * as S from './style';
import { getSickApi } from '../../apis/sickApi';
import { useCallback, useState } from 'react';
import { FaSearch } from "react-icons/fa";

type listsOfDiseaseGuard = { sickCd: string, sickNm: string }[];

function MainPage() {
  const [ sickData, setSickData ] = useState<listsOfDiseaseGuard>([]);
  const [ words, setWords ] = useState<string>('');

  const debounce = (callback: (e: React.ChangeEvent<HTMLInputElement>) => void, delay: number | undefined) => {
    let timeout: NodeJS.Timeout | undefined;

    return (args: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback(args), delay);
    };
  };

  const searchWords = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimWords = (e.target.value).trim();
    const data = await getSickApi(trimWords);
    setSickData(data);
    setWords(trimWords);
  };

  const moveToSearchTerms = (e: React.KeyboardEvent<HTMLElement>, index: number, length: number) => {
    const target = e.target as HTMLElement;
    if (e.key === 'ArrowDown') {
      if (index !== length - 1) (target.nextSibling as HTMLElement).focus();
      else (target.parentNode?.firstChild as HTMLElement).focus();
    } else if (e.key === 'ArrowUp') {
      if (index !== 0) (target.previousSibling as HTMLElement).focus();
      else (target.parentNode?.lastChild as HTMLElement).focus();
    }
  };

  const diseaseLists = sickData.map((list, index) => {
    const name = (list.sickNm).replace(words, `<b>${words}<b>`);
    const splitName = name.split('<b>');
    const boldName = splitName.map((item) => {
      if (item === words) return (<b key={index}>{words}</b>);
      else return item;
    });

    return (
      <S.RecommendLi key={index} tabIndex={0} onKeyDown={(e) => moveToSearchTerms(e, index, sickData.length)}>
        <FaSearch style={{ color: "gray", marginRight: "10px" }} />
        {boldName}
      </S.RecommendLi>
    );
  });

  const noSearchTerms = diseaseLists.length === 0 ? <S.RecommendLi>검색어 없음</S.RecommendLi>: null;
  const bridge = useCallback(debounce((e: React.ChangeEvent<HTMLInputElement>) => searchWords(e), 1000), []);


  return (
    <S.MainContainer>
      <S.Title>국내 모든 임상시험 검색하고<br/>온라인으로 참여하기</S.Title>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <S.SearchInput type="text" onChange={bridge} autoFocus />
        <S.SearchButton type="submit"><FaSearch style={{ width: "70%", height: "70%" }}/></S.SearchButton>
      </S.Form>
      <S.ListBox>
        <S.RecommendP>추천 검색어</S.RecommendP>
        <ul>
          {noSearchTerms}
          {diseaseLists}
        </ul>
      </S.ListBox>
    </S.MainContainer>
  );
};

export default MainPage;
