import { IWord } from 'types/word';

export interface IList {
  list?: IWord[];
  handleClickResult: (e: {
    currentTarget: {
      dataset: IWord;
    };
  }) => void;
  keyword: string;
}
