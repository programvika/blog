import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postsSlice';
import categoryNameReducer from './slice/categoryNameSlice';
import categoryReducer from './slice/categorySlice';
import searchReducer from './slice/searchSlice';
import paginateReducer from './slice/paginateSlice'


const rootReducer = combineReducers({
  posts: postsReducer,
  categoryName: categoryNameReducer,
  category: categoryReducer,
  search: searchReducer,
  paginate: paginateReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
