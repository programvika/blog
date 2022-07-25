import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postsSlice';
import categoryNameReducer from './slice/categoryNameSlice';
import categoryReducer from './slice/categorySlice' 


const rootReducer = combineReducers({
  posts: postsReducer,
  categoryName: categoryNameReducer,
  category: categoryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
