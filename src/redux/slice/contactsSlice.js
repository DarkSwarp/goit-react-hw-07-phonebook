import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialStateContacts = {
  items: [],
};

// const initialStateContacts = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        return {
          items: [...state.items, action.payload],
        };
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    // addContact(state, action) {
    //   return [...state, action.payload];
    // },
    deleteContact(state, action) {
      return {
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.items;
