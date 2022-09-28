import { ChangeEvent, Dispatch } from 'react';
import { IWord } from 'types/word';

export interface IInput {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  setSelectedWord: Dispatch<React.SetStateAction<IWord>>;
}
