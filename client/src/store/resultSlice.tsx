import { createSlice } from '@reduxjs/toolkit';
import { Sick } from '../utils/Types';

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
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default resultSlice;
export const { update } = resultSlice.actions;
