import { apiSlice } from "./apiSlice";

const Tours_URL = "api/tours";
const Tours_Admin_URL = "api/admin/tours";

export const toursApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTours: builder.query({
      query: ({ page, tourType, duration, price, limit }) => ({
        url: `${Tours_URL}`,
        params: {
          page: page,
          tourType: tourType,
          duration: duration,
          price: price,
          limit: limit,
        },
        method: 'GET',
      }),
      // refetchOnMountOrArgChange: true,
      // keepUnusedDataFor: 5,
      providesTags: ["Tours"],
    }),
    getTourDetails: builder.query({
      query: (id) => ({
        url: `${Tours_URL}/${id}`,
        method: "GET",
      }),
      // keepUnusedDataFor: 5,
    
      // refetchOnMountOrArgChange: true,
      providesTags: ["TourDetails"],
      keepUnusedDataFor: 5,
    }),
    createTour: builder.mutation({
      query: (data) => ({
        url: `${Tours_Admin_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tours"],
    }),
    updateTour: builder.mutation({
      query: (data) => ({
        url: `${Tours_Admin_URL}/${data.tourId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tours"],
    }),
    // uploadProductImage: builder.mutation({
    //   query: (data) => ({
    //     url: `/api/upload`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    deleteTour: builder.mutation({
      query: (tourId) => ({
        url: `${Tours_Admin_URL}/${tourId}`,
        method: "DELETE",
      }),
      providesTags: ["Tours"],
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
  useGetToursQuery,
  useGetTourDetailsQuery,
  useCreateTourMutation,
  useUpdateTourMutation,
  //   useUploadProductImageMutation,
  useDeleteTourMutation,
  //   useCreateReviewMutation,
  //   useGetTopProductsQuery,
} = toursApiSlice;
