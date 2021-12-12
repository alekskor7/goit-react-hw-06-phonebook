import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/add");
export const filterContact = createAction("contact/filter");
export const deleteContact = createAction("contact/delete");