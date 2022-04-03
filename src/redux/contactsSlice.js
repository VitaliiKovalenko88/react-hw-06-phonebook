import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
