import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  ThongTinPhim: [],
  isLoading: false,
  error: "",
};

// const 

export const getLayGhe = createAsyncThunk(
  "ticket/info/getLayGhe",
  async (ticketId, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getLayGhe(ticketId);
      return data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const LayDanhSachGhe = createSlice({
  name: "ticket/info", 
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLayGhe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLayGhe.fulfilled, (state, { payload }) => {
      state.ThongTinPhim = payload
      state.isLoading = false;
    });
    builder.addCase(getLayGhe.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export default LayDanhSachGhe.reducer;