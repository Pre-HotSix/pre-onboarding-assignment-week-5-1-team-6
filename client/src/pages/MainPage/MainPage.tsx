import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { getSearchInfos } from '../../apis/getSearch';
import { debounce } from 'lodash';

const MainPage = () => {
  const [searchState, setSearchState] = useState<string[]>([]);
  const [currentSearch, setCurrentSearch] = useState<string>('');
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const delayedQuery = useCallback(
    debounce((q: any) => sendQuery(q), 500),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

  const sendQuery = useCallback(
    async (q: string) => {
      const savedQuery: any = localStorage.getItem(`${q}`);
      if (JSON.parse(savedQuery)) {
        setSearchState(JSON.parse(savedQuery));
        console.log('good');
      } else {
        console.log('bad');
        const data = await getSearchInfos(q);
        setSearchState(data);
      }
    },
    [currentSearch]
  );

  useEffect(() => {
    delayedQuery(currentSearch);
  }, [currentSearch]);

  const highlightIncludedText = (text: string) => {
    const title = text.toLowerCase();
    const searchValue = currentSearch.toLowerCase();
    if (searchValue !== '' && title.includes(searchValue)) {
      const matchText = text.split(new RegExp(`(${searchValue})`, 'gi'));
      return (
        <>
          {matchText.map((text, index) =>
            text.toLowerCase() === searchValue.toLowerCase() ? (
              <span key={index} style={{ fontWeight: 700 }}>
                {text}
              </span>
            ) : (
              text
            )
          )}
        </>
      );
    }

    return text;
  };

  return (
    <Container>
      <MainTitle>
        국내 모든 임상시험 검색하고 <br></br> 온라인으로 참여하기
      </MainTitle>
      <SearchForm searchFocus={searchFocus}>
        <FaSearch />
        <SearchInput
          name="input"
          ref={inputRef}
          onChange={handleSearch}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          placeholder="질환명을 입력해 주세요"
          type={'text'}
        ></SearchInput>
        <SearchButton>검색</SearchButton>
      </SearchForm>
      {searchFocus ? (
        <SearchInfoContainer>
          <RecommendSearchText>추천 검색어</RecommendSearchText>
          {searchState?.map((item: any) => {
            return (
              <SearchInfoItemWrapper key={item.sickCd}>
                <FaSearch></FaSearch>
                {highlightIncludedText(item.sickNm)}
              </SearchInfoItemWrapper>
            );
          })}
        </SearchInfoContainer>
      ) : (
        ''
      )}
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  margin: auto;
  width: 600px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_COLOR};
  padding: 16px;
`;

const MainTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 20px;
`;

const SearchForm = styled.form<{ searchFocus: boolean }>`
  border-radius: 30px;
  display: flex;
  outline: ${(props) => (props.searchFocus === true ? 'auto' : 'none')};
  outline-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  background-color: ${({ theme }) => theme.colors.WHITE};
  align-items: center;
  padding-left: 16px;
  margin-bottom: 8px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  width: 100%;
  padding: 20px 10px;
  border: none;
  outline: none;
  font-size: 18px;
`;

const SearchButton = styled.button`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.SUB_COLOR};
  color: ${({ theme }) => theme.colors.WHITE};
  white-space: pre;
  outline: none;
  border: none;
  cursor: pointer;
  height: 100%;
  font-size: 18px;
  border-radius: 0 30px 30px 0;
  font-weight: 500;
`;

const SearchInfoContainer = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 20px;
`;

const SearchInfoItemWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const RecommendSearchText = styled.div`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 13px;
  margin-bottom: 16px;
`;

const SearchInfoItem = styled.div`
  width: 100%;
  margin-left: 8px;
`;
