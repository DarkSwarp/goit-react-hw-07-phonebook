//============Before===========

// import { combineReducers } from 'redux';

// const initialStateContacts = [];
// const initialStateFilter = '';

// const contactsReducer = (state = initialStateContacts, action) => {
//   switch (action.type) {
//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload.id);
//     case 'contacts/addContact':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialStateFilter, action) => {
//   switch (action.type) {
//     case 'filter/filterContacts':
//       return action.payload.text;
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

