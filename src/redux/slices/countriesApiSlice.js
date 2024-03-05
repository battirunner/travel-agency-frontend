import { apiSlice } from "./apiSlice";

const Countries_URL = "api/country";
const Countries_Admin_URL = "api/admin/country";

export const countriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountry: builder.query({
      query: () => ({
        url: Countries_URL,
      }),
      // refetchOnMountOrArgChange:true,
      // keepUnusedDataFor: 5,
      providesTags: ["Country"],
    }),

    getCountryById: builder.query({
      query: (CountryId) => ({
        url: `${Countries_URL}/${CountryId}`,
      }),
      // keepUnusedDataFor: 5,
      //   providesTags: ["Country"],
    }),

    createCountry: builder.mutation({
      query: (data) => ({
        url: `${Countries_Admin_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Country"],
    }),
    updateCountry: builder.mutation({
      query: (data) => ({
        url: `${Countries_Admin_URL}/${data.CountryId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Country"],
    }),

    deleteCountry: builder.mutation({
      query: (CountryId) => ({
        url: `${Countries_Admin_URL}/${CountryId}`,
        method: "DELETE",
      }),
      providesTags: ["Country"],
    }),
  }),
});

export const {
  useGetCountryQuery,
  useLazyGetCountryQuery,
  useGetCountryByIdQuery,
  useCreateCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
} = countriesApiSlice;
