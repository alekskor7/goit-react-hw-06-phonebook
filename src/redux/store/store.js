import { combineReducers } from "redux";
import contactReducer from "../contacts/contacts-reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;