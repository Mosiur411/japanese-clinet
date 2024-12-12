import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.enhanceEndpoints({ addTagTypes: [] }).injectEndpoints({

    endpoints: (builder) => ({
        createVocabulary: builder.mutation({
            query: (data) => ({
                url: "/vocabulary/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["vocabulary"],
        }),
        getVocabular: builder.query({
            query: (pathname) => ({
                url: `/vocabulary?${pathname}`,
                method: "GET",
            }),
            providesTags: ["vocabulary"],
            keepUnusedDataFor: 600,
        }),
        updateVocabulary: builder.mutation({
            query: (data) => ({
                url: "/vocabulary/update",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["vocabulary"],
        }),
        deleteVocabulary: builder.mutation({
            query: (id) => ({
                url: `/vocabulary/delete/${id}`,
                method: "DELETE",
                body: data,
            }),
            invalidatesTags: ["vocabulary"],
        }),
        /* user get  */
        getsingleVocabular: builder.query({
            query: (id) => ({
                url: `/vocabulary/user/${id}`,
                method: "GET",
            }),
            providesTags: ["vocabulary"],
            keepUnusedDataFor: 600,
        }),
    }),
});

export const {
    useCreateVocabularyMutation,useDeleteVocabularyMutation,useGetsingleVocabularQuery,useGetVocabularQuery,useUpdateVocabularyMutation
} = authApi;
