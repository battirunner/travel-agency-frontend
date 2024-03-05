import { apiSlice } from "./apiSlice";

const GroupTicket_URL = "api/groupticket";
const GroupTicket_Admin_URL = "api/admin/groupticket";

export const groupTicketApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroupTicket: builder.query({
      query: ({ page, country,  limit }) => ({
        url: `${GroupTicket_URL}`,
        params: {
          page: page,
          country: country,
        //   duration: duration,
        //   price: price,
          limit: limit,
        },
        method: 'GET',
      }),
      // refetchOnMountOrArgChange: true,
      // keepUnusedDataFor: 5,
      providesTags: ["GroupTicket"],
    }),
    getGroupTicketDetails: builder.query({
      query: (id) => ({
        url: `${GroupTicket_URL}/${id}`,
        method: "GET",
      }),
      // keepUnusedDataFor: 5,
    
      // refetchOnMountOrArgChange: true,
      providesTags: ["GroupTicketDetails"],
    //   keepUnusedDataFor: 5,
    }),
    createGroupTicket: builder.mutation({
      query: (data) => ({
        url: `${GroupTicket_Admin_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["GroupTicket"],
    }),
    updateGroupTicket: builder.mutation({
      query: (data) => ({
        url: `${GroupTicket_Admin_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["GroupTicket"],
    }),
    // uploadProductImage: builder.mutation({
    //   query: (data) => ({
    //     url: `/api/upload`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    deleteGroupTicket: builder.mutation({
      query: (id) => ({
        url: `${GroupTicket_Admin_URL}/${id}`,
        method: "DELETE",
      }),
      providesTags: ["GroupTicket"],
    }),
    // createReview: builder.mutation({
    //   query: (data) => ({
    //     url: `${PRODUCTS_URL}/${data.productId}/reviews`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // getTopProducts: builder.query({
    //   query: () => `${PRODUCTS_URL}/top`,
    //   keepUnusedDataFor: 5,
    // }),
  }),
});

export const {
  useGetGroupTicketQuery,
  useGetGroupTicketDetailsQuery,
  useCreateGroupTicketMutation,
  useUpdateGroupTicketMutation,
  //   useUploadProductImageMutation,
  useDeleteGroupTicketMutation,
  //   useCreateReviewMutation,
  //   useGetTopProductsQuery,
} = groupTicketApiSlice;
