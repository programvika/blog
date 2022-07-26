import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: ['Все', 'Домашние животные', 'Готовка', 'Семья', 'Карьера', 'Отдых', 'Здоровье', 'Другое']
};

const categoryNameSlice = createSlice({
  name: 'categoryName',
  initialState,
  reducers: {
  },
});

export default categoryNameSlice.reducer;
