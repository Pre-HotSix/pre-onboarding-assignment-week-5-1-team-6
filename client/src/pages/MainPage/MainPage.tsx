import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { getSearchInfos } from '../../apis/getSearch';
import { debounce } from 'lodash';

const MainPage = () => {
  const [searchState, setSearchState] = useState<any>([]);
  const [currentSearch, setCurrentSearch] = useState<string>('');
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<any>(null);
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
      setCurrentIndex(null);
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
    setSearchState(searchState);
  }, [currentIndex]);

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

  const handleKeyPress = (e: any) => {
    console.log(e);
    console.log(currentIndex);
    if (e.key === 'ArrowDown') {
      if (currentIndex === null) {
        setCurrentIndex(0);
      } else if (currentIndex === 6) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      console.log(searchState);
    } else if (e.key === 'ArrowUp') {
      if (currentIndex === null) {
        setCurrentIndex(0);
      } else if (currentIndex === 0) {
        setCurrentIndex(6);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else if (e.key === 'Enter') {
      setCurrentSearch(searchState[currentIndex].sickNm);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Container>
      <MainTitle>
        국내 모든 임상시험 검색하고 <br></br> 온라인으로 참여하기
      </MainTitle>
      <SearchForm onSubmit={handleSubmit} searchFocus={searchFocus}>
        <FaSearch />
        <SearchInput
          name="input"
          onKeyDown={handleKeyPress}
          ref={inputRef}
          onChange={handleSearch}
          value={currentSearch}
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
          {searchState.length > 0 ? (
            searchState?.map((item: any, index: number) => {
              return (
                <SearchInfoItemWrapper
                  currentIndexBool={currentIndex === index}
                  key={index}
                >
                  <FaSearch></FaSearch>
                  {highlightIncludedText(item.sickNm)}
                </SearchInfoItemWrapper>
              );
            })
          ) : (
            <div>검색어 없음</div>
          )}
        </SearchInfoContainer>
      ) : (
        ''
      )}
    </Container>
  );
};

export default MainPage;

interface SearchInfoItemWrapper {
  currentIndexBool: boolean;
  key: number;
}

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

const SearchInfoItemWrapper = styled.div<SearchInfoItemWrapper>`
  background-color: ${(props) =>
    props.currentIndexBool ? props.theme.colors.LIGHT_GRAY : ''};
  display: flex;
  padding: 8px 4px;
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
