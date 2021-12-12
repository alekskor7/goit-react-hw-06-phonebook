import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from './contacts-actions';

const initialState = [
   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

const contactAddDelReducer = createReducer(initialState, {
  [addContact.type]: (state, action) => [...state, action.payload],
  [deleteContact.type]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const contactFilterReducer = createReducer("", {
  [filterContact.type]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactAddDelReducer,
  filter: contactFilterReducer,
});
