import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
  credentials: "include",
  // credentials: "same-origin",
  mode: "cors",
  // headers: { "Content-Type": "application/json" },
});

export const apiSlice = createApi({
  // reducerPath:"travelApi",
  // reducerPath: 'apiOne',
  baseQuery,
  tagTypes: ["Country", "User", "Tours", "TourDetails", "GroupTicket" ],
  endpoints: (builder) => ({}),
});
