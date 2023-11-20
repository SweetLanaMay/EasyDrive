import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6556353c84b36e3a431f5885.mockapi.io/"

export const fetchCars = createAsyncThunk(
    "cars/fetch",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/adverts');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const fetchFavoriteCars = createAsyncThunk(
    'cars/fetchFavorite',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/adverts/favorites');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );

  export const addFavoriteCar = createAsyncThunk(
    'cars/addFavoriteCar',
    async (carId, thunkAPI) => {
      try {
        const response = await axios.post(`/adverts/favorites/add/${carId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );
  
  export const deleteFavoriteCar = createAsyncThunk(
    'cars/deleteFavoriteCar',
    async (carId, thunkAPI) => {
      try {
        const response = await axios.delete(`/adverts/favorites/remove/${carId}`);
        return carId;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );