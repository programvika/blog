import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: '1',
  countriesPerPage: 2,
  pageNumbers: []
};

const paginateSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPageNumbers(state, action) {
      state.pageNumbers = action.payload;
    }
  },
});

export const { setCurrentPage, setPageNumbers } = paginateSlice.actions;

export default paginateSlice.reducer;
