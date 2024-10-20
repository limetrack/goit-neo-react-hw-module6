import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from '../data/contacts';

const loadContactsFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : initialContacts;
};

const initialState = {
  items: loadContactsFromLocalStorage(),
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: {
            id: nanoid(),
            ...payload,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;
