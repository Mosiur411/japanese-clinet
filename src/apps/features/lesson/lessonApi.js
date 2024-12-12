import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.enhanceEndpoints({ addTagTypes: [] }).injectEndpoints({

    endpoints: (builder) => ({
        createLesson: builder.mutation({
            query: (data) => ({
                url: "/lesson/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["lesson"],
        }),
        getLesson: builder.query({
            query: (pathname) => ({
                url: `/lesson?${pathname}`,
                method: "GET",
            }),
            providesTags: ["lesson"],
            keepUnusedDataFor: 600,
        }),
        getsingleLesson: builder.query({
            query: (id) => ({
                url: `/lesson/sinlge/${id}`,
                method: "GET",
            }),
            providesTags: ["lesson"],
            keepUnusedDataFor: 600,
        }),
        updateLessony: builder.mutation({
            query: (data) => ({
                url: "/lesson/update",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["lesson"],
        }),
        deleteLessony: builder.mutation({
            query: (data) => ({
                url: "/lesson/login",
                method: "DELETE",
                body: data,
            }),
            invalidatesTags: ["lesson"],
        }),
    }),
});

export const {
  useCreateLessonMutation,useDeleteLessonyMutation,useGetLessonQuery,useGetsingleLessonQuery,useUpdateLessonyMutation
} = authApi;
