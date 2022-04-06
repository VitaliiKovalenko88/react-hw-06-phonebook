import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReduser from './filterSlice';

const contacts = combineReducers({
  items: contactsReducer,
  filter: filterReduser,
});

export const store = configureStore({
  reducer: {
    contacts,
  },
});
