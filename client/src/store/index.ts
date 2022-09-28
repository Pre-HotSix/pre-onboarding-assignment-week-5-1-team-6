import { configureStore } from '@reduxjs/toolkit';
import resultSlice from './resultSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: { search: searchSlice.reducer, result: resultSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
