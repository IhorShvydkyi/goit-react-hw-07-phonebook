import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add");

const deleteContact = createAction("contacts/delete");

const filterContact = createAction("contacts/changeFilter");

const contactsActions = { addContact, deleteContact, filterContact };

export default contactsActions;
