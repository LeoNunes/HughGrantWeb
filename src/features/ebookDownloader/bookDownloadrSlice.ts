import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PlainTextBook = string;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    endpoints: (builder) => {
        return {
            fetchPooh: builder.query<PlainTextBook, void>({
                query: () => {
                    return {
                        url: '/ebooks/pg67098.txt',
                        responseHandler: 'text'
                    }
                }
            })
        }
    }
});

export const { useFetchPoohQuery } = apiSlice;