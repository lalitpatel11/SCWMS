import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer/rootReducers';

export const store = configureStore({
  reducer: rootReducer,
});
