import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectNameFilter = (state) => state.filters.name;


export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (filterContacts, contacts) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
    )
);