import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
  editContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    editId: null,
  },
  reducers: {
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    clearEditId: state => {
      state.editId = null;
    },
  },
  extraReducers: {
    //fetching all contacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    //adding contact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    //removing contact
    [removeContact.pending]: handlePending,
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [removeContact.rejected]: handleRejected,
    [editContact.pending]: handlePending,
    [editContact.rejected]: handleRejected,
    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      // console.log(state.items);
      // console.log(index);
      state.items[index] = action.payload;
      // console.log(state.items);
    },
  },
});
export const { setEditId, clearEditId } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
