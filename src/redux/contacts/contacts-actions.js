import { createAction } from "@reduxjs/toolkit";

const filterContact = createAction("contacts/changeFilter");

const contactsActions = { filterContact };

export default contactsActions;
