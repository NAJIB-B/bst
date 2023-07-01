// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.authToken;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// Define a service using a base URL and expected endpoints
export const bstApi = createApi({
  reducerPath: "bstApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAccountTestR: builder.query({
      query: () => `Account/TestR`,
    }),
    getMailingList: builder.query({
      query: () => `MailingList`,
    }),
    getUsers: builder.query({
      query: () => `Users`,
    }),
    getUser: builder.query({
      query: (id) => `Users/${id}`,
    }),

    //POST

    // RegisterUser: builder.mutation({
    //   query: (body) => ({
    //     url: `Account/Register`,
    //     method: "POST",
    //     body,
    //   }),
    // }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `Account/Login`,
        method: "POST",
        body,
      }),
    }),
    verifyLogin: builder.mutation({
      query: (body) => ({
        url: `Account/verifylogin`,
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: `Account/resetpassword`,
        method: "POST",
        body,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (body) => ({
        url: `Account/forgetpassword`,
        method: "POST",
        body,
      }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: `Account/changepassword`,
        method: "POST",
        body,
      }),
    }),
    addToMailingList: builder.mutation({
      query: (body) => ({
        url: `MailingList`,
        method: "POST",
        body,
      }),
    }),
    postUsers: builder.mutation({
      query: (body) => ({
        url: `Users`,
        method: "POST",
        body,
      }),
    }),

    //PUT

    putUsers: builder.mutation({
      query: (body, id) => ({
        url: `Users/${id}`,
        method: "PUT",
        body,
      }),
    }),

    // DELETE

    putUsers: builder.mutation({
      query: (body, id) => ({
        url: `Users/${id}`,
        method: "DELETE",
        body,
      }),
    }),

    addToMailingList: builder.mutation({
      query: (body, email) => ({
        url: `MailingList/${email}`,
        method: "DELETE",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAccountTestRQuery,
  useGetMailingListQuery,
  useGetUserQuery,
  useGetUsersQuery,
  useAddToMailingListMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useLoginUserMutation,
  usePostUsersMutation,
  usePutUsersMutation,
  useRegisterUserMutation,
  useResetPasswordMutation,
  useVerifyLoginMutation,
} = bstApi;
