import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  ThongTinPhims: [],
  isLoading: false,
  error: "",
  adresses: [],
  cart: "",
  cart2: "",
  cinema: [],
  logoz: "",
  bg:"",
};

export const getThongTinPhim = createAsyncThunk(
  "ticket/info/getThongTinPhim",
  async (movieId, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getThongTinPhim(movieId);
      return data.heThongRapChieu;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ThongTinPhimSlice = createSlice({
  name: "ticket/info",
  initialState,
  reducers: {
    showAdress: (state, { payload }) => {
      // console.log(payload);
      state.adresses = payload.cumRapChieu;
      state.cart = payload;
      state.logoz = payload.logo;
      state.cart2 = payload.cumRapChieu[0];
      state.cinema = payload.cumRapChieu[0].lichChieuPhim;
    },
    showcinema: (state, { payload }) => {
      state.cart2 = payload;
      state.cinema = payload.lichChieuPhim;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getThongTinPhim.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getThongTinPhim.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.ThongTinPhims = payload;
      state.isLoading = false;
      state.adresses = payload[0]?.cumRapChieu;
      state.cart = payload[0];
      state.cart2 = payload[0]?.cumRapChieu[0];
      state.cinema = payload[0]?.cumRapChieu[0].lichChieuPhim;
      // state.bg = payload.hinhAnh


      state.logoz = payload[0].logo;
    });
    builder.addCase(getThongTinPhim.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export const { showAdress, showcinema } = ThongTinPhimSlice.actions;
export default ThongTinPhimSlice.reducer;
