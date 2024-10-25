import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { VITE_API_BASE_URL } from '@/constants/AppConfig'

const baseQuery = fetchBaseQuery({ baseUrl: VITE_API_BASE_URL })
console.log('baseQuery: ', baseQuery)

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: builder => ({})
})
