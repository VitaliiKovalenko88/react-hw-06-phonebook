import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contactsSlice';
import { filterSlice } from './filterSlice';

const contacts = combineReducers({
  items: contactsReducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
