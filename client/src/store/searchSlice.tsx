import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: string;
};

const initialState: InitialState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default searchSlice;
export const { updateSearchText } = searchSlice.actions;
