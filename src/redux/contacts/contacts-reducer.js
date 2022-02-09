import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const filter = createReducer("", {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
