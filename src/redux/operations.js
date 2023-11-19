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