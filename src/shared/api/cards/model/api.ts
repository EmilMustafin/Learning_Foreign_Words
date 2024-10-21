import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from './types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (build) => ({
    getCards: build.query<ICard[], void>({
      query: () => ({
        url: '/cards',
      }),
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
