import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = state => state.filter;