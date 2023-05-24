import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://646c96227b42c06c3b2b93b8.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contact', id: 'LIST' }],
    }),
  }),
})

export const { useGetPostsQuery } = contactsApi;