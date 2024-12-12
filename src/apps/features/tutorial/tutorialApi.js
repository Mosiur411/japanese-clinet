import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.enhanceEndpoints({ addTagTypes: ['lesson'] }).injectEndpoints({

    endpoints: (builder) => ({
        createTutorial: builder.mutation({
            query: (data) => ({
                url: "/tutorial/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["tutorial"],
        }),
        getTutorial: builder.query({
            query: (pathname) => ({
                url: `/tutorial?${pathname}`,
                method: "GET",
            }),
            providesTags: ["tutorial","lesson"],
            keepUnusedDataFor: 600,
        }),
        getsingleTutorial: builder.query({
            query: (id) => ({
                url: `/tutorial/single/${id}`,
                method: "GET",
            }),
            providesTags: ["tutorial"],
            keepUnusedDataFor: 600,
        }),
        updateTutorialy: builder.mutation({
            query: (data) => ({
                url: "/tutorial/update",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["tutorial"],
        }),
        deleteTutorial: builder.mutation({
            query: (id) => ({
                url: `/tutorial/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["tutorial"],
        }),
    }),
});

export const {
    useCreateTutorialMutation, useGetsingleTutorialQuery, useGetTutorialQuery, useDeleteTutorialMutation, useUpdateTutorialyMutation
} = authApi;
