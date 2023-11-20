import { createSlice } from "@reduxjs/toolkit";

import {
  fetchFavoriteCars,
  addFavoriteCar,
  deleteFavoriteCar,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const favoriteCarsSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: {
    [fetchFavoriteCars.pending]: handlePending,
    [fetchFavoriteCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.favoriteDrinks;
    },
    [fetchFavoriteCars.rejected]: handleRejected,
    [addFavoriteCar.pending]: handlePending,
    [addFavoriteCar.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addFavoriteCar.rejected]: handleRejected,
    [deleteFavoriteCar.pending]: handlePending,
    [deleteFavoriteCar.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    [deleteFavoriteCar.rejected]: handleRejected,
  },
});

export const favoriteCarsReducer = favoriteCarsSlice.reducer;
