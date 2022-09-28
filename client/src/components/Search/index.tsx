import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { IWord } from 'types/word';
import { Container, Input } from './style';
// import { SearchIcon } from 'assets/svgs';
// import { SearchIcon } from '../../assets/svgs';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { GlobalContext } from 'App';
import SearcList from './List';
import { IInput } from './type';

export default function SearchBar(props: IInput) {
  const { keywords } = useContext(GlobalContext);

  const [, setQuery] = useState('');
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState<IWord[]>(keywords);

  const menuRef = useRef(null);

  const handleClickResult = (e: { currentTarget: { dataset: IWord } }) => {
    console.log(e.currentTarget);

    props.setSelectedWord({
      sickCd: e.currentTarget.dataset.sickCd,
      sickNm: e.currentTarget.dataset.sickNm,
    });
    setIsSelectedSearchOpen(false);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setKeyword(e.target.value);
  };

  const getDebouncd = () => {
    const debounce = setTimeout(() => {
      const filteredList = keywords.filter((result: { sickNm: string }) =>
        result.sickNm.includes(keyword)
      );
      setList(filteredList.splice(0, 30));

      return setQuery(keyword);
    }, 500);

    return () => clearTimeout(debounce);
  };

  useEffect(() => {
    getDebouncd();
  }, [keyword]);

  const [isSelectedSearchOpen, setIsSelectedSearchOpen] = useState(false);

  const onClickOpenList = () => {
    setIsSelectedSearchOpen(true);
  };

  useOnClickOutside(menuRef, onClickOpenList);

  return (
    <Container>
      <div>
        {/* <SearchIcon /> */}
        <Input
          type="search"
          placeholder={props.placeholder}
          onChange={handleChange}
          onClick={onClickOpenList}
        />
        <button onClick={() => handleChange}>{/* {SearchIcon} */}검색</button>
      </div>

      {isSelectedSearchOpen && (
        <SearcList
          list={list}
          handleClickResult={handleClickResult}
          keyword={keyword}
        />
      )}
    </Container>
  );
}
