import { apiSlice } from "./apiSlice";

const CONTACT_FORM_URL = "/api/contact-form-info";

export const contactFormApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitContactInfo: builder.mutation({
      query: (data) => ({
        url: `${CONTACT_FORM_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSubmitContactInfoMutation,
} = contactFormApiSlice;
