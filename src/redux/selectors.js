import contactsApi from './operations'
import store from './store'
import { createSelector } from "@reduxjs/toolkit";


// export const getContacts = state => state.contactsSlice.entities;
export const getFilter = state => state?.filterSlice;
export const getContacts = state => state?.contactsApi.queries["fetchContacts(undefined)"]?.data;

export const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    console.log(allContacts)
    const normalizedFilter = filter?.toLowerCase();

    return allContacts?.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

console.log(getfilteredContacts());
