import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";
import { convertData2 } from "../utils/helper";

// const axiosBaseQuery = () => {};
// randomuser api
// const url = "http://localhost:5000";
const url = "https://randomuser.me/api";

export const contactsApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => `?${queryString.stringify(params)}`,
      transformResponse: (response) => {
        if (response.results) {
          return convertData2(response.results);
        }
      },
    }),
  }),
});

// const contactReducer = contactsApi.reducer;
export const { useGetUsersQuery } = contactsApi;
// export default contactReducer;
