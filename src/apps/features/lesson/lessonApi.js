import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.enhanceEndpoints({ addTagTypes: ["tutorial"] }).injectEndpoints({

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
            providesTags: ["tutorial","lesson"],
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
        deleteLesson: builder.mutation({
            query: (id) => ({
                url: `/lesson/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["lesson"],
        }),
    }),
});

export const {
  useCreateLessonMutation,useDeleteLessonMutation,useGetLessonQuery,useGetsingleLessonQuery,useUpdateLessonyMutation
} = authApi;
