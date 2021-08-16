import contactsApi from './operations'
import store from './store'
import { createSelector } from "@reduxjs/toolkit";


// export const getContacts = state => state.contactsSlice.entities;
export const getFilter = state => state.filterSlice;
//  const { data: allContacts } = useFetchContactsQuery();
export const getContacts = state => state.contactsApi.queries["getContacts(undefined)"].data;

export const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// console.log(getFilter())

