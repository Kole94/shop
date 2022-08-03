import { combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import productSlice from "../slices/productSlice";

const rootReducer = combineReducers({
  authSlice,
  productSlice,
});

export const store = configureStore({ reducer: rootReducer });

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
