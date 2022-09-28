import { ListWrap, Word } from './style';
import { IList } from './type';
// import { SearchIcon } from 'assets/svgs';
// import { SearchIcon } from '../../assets/svgs';

export default function List({ list, handleClickResult, keyword }: IList) {
  // const { keywords } = useContext(GlobalContext);

  return (
    <ListWrap>
      {list?.map((item: { sickCd: string; sickNm: string }) => (
        <li key={item.sickCd} onClick={() => handleClickResult}>
          <dl>
            <dd>
              {item.sickNm
                .replaceAll(keyword, `@#$%${keyword}@#$%`)
                .split('@#$%')
                .map((el, index) => (
                  <Word key={index} isMatched={el === keyword}>
                    {el}
                  </Word>
                ))}
            </dd>
          </dl>
        </li>
      ))}
    </ListWrap>
  );
}
