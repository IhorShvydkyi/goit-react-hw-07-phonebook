import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61fece6ca58a4e00173c99e3.mockapi.io/contacts",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
    }),
  }),
});
export const { useFetchContactsQuery } = contactApi;
