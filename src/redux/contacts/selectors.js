import { createSelector } from "@reduxjs/toolkit";
import { selectFilteredName } from "../filters/selectors";
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilteredName],
  (contacts, filters) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filters.toLowerCase()) ||
        contact.number.includes(filters.trim())
    );
  }
);