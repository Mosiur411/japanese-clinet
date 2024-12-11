import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.enhanceEndpoints({ addTagTypes: [] }).injectEndpoints({

    endpoints: (builder) => ({
        LoginUser: builder.mutation({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["register"],
        }),
        RegisterUser: builder.mutation({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data,
            }),
        }),





    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation
} = authApi;
