import { createSelector } from "reselect";

export const getUser = store => store.user;

export const getCurrentUser = store => store.user.selectCurrentUser;


const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.selectCurrentUser
);
