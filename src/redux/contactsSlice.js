import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'items',
  initialState: JSON.parse(window.localStorage.getItem('contacts')),
  reducers: {
    addContacts: (state, action) => {
      state.push(action.payload);
    },
    deleteContacts: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
