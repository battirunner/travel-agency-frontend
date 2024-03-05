import { apiSlice } from "./apiSlice";

const USER_URL = "/api/user";
// const USER_URL = `${import.meta.env.VITE_BASE_URL}/user`;
const USER_Admin_URL = `${import.meta.env.VITE_BASE_URL}/user`;

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
      
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/registration`,
        method: "POST",
        body: data,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        method: "GET",
      }),
    }),

    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/reset-password?token=${data.token}&id=${data.userId}`,
        method: "POST",
        body: data,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/verify-email`,
        method: "POST",
        body: data,
      }),
    }),

    // forgotPassword: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/forgot-password`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),

    verifyToken: builder.query({
      query: ({ token, userId }) => ({
        url: `${USER_URL}/verify-token?token=${token}&id=${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useVerifyTokenQuery,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
  useGetUserQuery,
} = userApiSlice;
