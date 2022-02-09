import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import { contactApi } from "./contacts/contact-slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],

  devTools: process.env.NODE_ENV === "development",
});
