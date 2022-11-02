import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  ThongTinPhims: [],
  isLoading: false,
  error: "",
  cinema:[],
  cart:""
  
  

};

export const getThongTinPhim = createAsyncThunk(
  "ticket/info/getThongTinPhim",
  async (movieId, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getThongTinPhim(movieId);
      return data.heThongRapChieu
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const ThongTinPhimSlice = createSlice({
  name: "ticket/info",
  initialState,
  reducers: {
    showcinema:(state,{payload})=>{
      state.cinema = payload.cumRapChieu
      state.cart = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getThongTinPhim.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getThongTinPhim.fulfilled, (state, { payload }) => {
      state.ThongTinPhims = payload
      state.isLoading = false;
      state.cinema = payload[0]?.cumRapChieu
      state.cart = payload[0]
    });
    builder.addCase(getThongTinPhim.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export const { showcinema } = ThongTinPhimSlice.actions
export default ThongTinPhimSlice.reducer;
