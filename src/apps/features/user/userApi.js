import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.enhanceEndpoints({ addTagTypes: [] }).injectEndpoints({

    endpoints: (builder) => ({
        /* admin handel */
        getUser: builder.query({
            query: (pathname) => ({
                url: `/user?${pathname}`,
                method: "GET",
            }),
            providesTags: ["user"],
            keepUnusedDataFor: 600,
        }),
        getsingleUser: builder.query({
            query: (id) => ({
                url: `/user/single/${id}`,
                method: "GET",
            }),
            providesTags: ["user"],
            keepUnusedDataFor: 600,
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: "/user/admin/profile-update",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/user/delete/${id}`,
                method: "DELETE",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
        /* user and admin handel */
        updateProfileUser: builder.mutation({
            query: (data) => ({
                url: "/user/profile-update",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
        getProfileUser: builder.query({
            query: () => ({
                url: `/user/profile`,
                method: "GET",
            }),
            providesTags: ["user"],
            keepUnusedDataFor: 600,
        }),
    }),
});

export const {
   useGetProfileUserQuery,useDeleteUserMutation,useGetUserQuery,useUpdateUserMutation,useUpdateProfileUserMutation
} = authApi;
