import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const axiosBaseQuery = () => {};

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => "/contacts",
    }),
  }),
});

// const contactReducer = contactsApi.reducer;
export const { useContactsQuery } = contactsApi;
// export default contactReducer;
