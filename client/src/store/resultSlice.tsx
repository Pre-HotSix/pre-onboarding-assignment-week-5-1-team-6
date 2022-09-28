import { createSlice } from '@reduxjs/toolkit';
import { Sick } from 'utils/Types';

type InitialState = {
  value: Sick[]
};

const initialState: InitialState = {
  value: [],
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    updateResult: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default resultSlice;
export const { updateResult } = resultSlice.actions;
