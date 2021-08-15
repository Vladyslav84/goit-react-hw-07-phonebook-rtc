import * as api from '../api/api'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const fetcContacts = createAsyncThunk(
//   'contacts/fetcContacts',
//   async () => {
//     try {
//       const contactsFromDB = await api.fetcContacts();
//       return contactsFromDB;
//     } catch (error) {
//       return (error);
//     }
//   },
// );

// export const postContacts = createAsyncThunk(
//   'contacts/postContacts',
//   async (newContact) => {
//     try {
//       const contactsFromDB = await api.postContacts(newContact);
//       return contactsFromDB;
//     } catch (error) {
//       return (error);
//     }
//   },
// );

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (id) => {
//     try {
//      await api.deleteContacts(id);
//       return id;
//     } catch (error) {
//       return (error);
//     }
//   },
// );

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://61190e619bcfb400171689cf.mockapi.io/api'
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     fetcContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contact'],
//     }),

// })
// export const { usefetchContactsQuery } = contactsApi;

const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61190e619bcfb400171689cf.mockapi.io/api',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContatc: builder.mutation({
        query: newContent => (
        {
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContent.name,
          number:newContent.number
        },
      }),
       invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});
export default contactsApi;

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContatcMutation,
} = contactsApi;