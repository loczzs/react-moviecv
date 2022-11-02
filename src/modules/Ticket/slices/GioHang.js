import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  DanhSachGheDangDat: [],
};

export const selectChair = createAction("selectChair");

const selectChairs = (state, action) => {
  const danhSachGheCapNhat = [...state.DanhSachGheDangDat];
  const index = danhSachGheCapNhat.findIndex((item) => {
    return item.maGhe === action.payload.maGhe;
  });
  if (index !== -1) {
    danhSachGheCapNhat.splice(index, 1);
  } else {
    danhSachGheCapNhat.push(action.payload);
  }
  return { ...state, DanhSachGheDangDat: danhSachGheCapNhat };
};

export const handleBookTicket = createAsyncThunk(
  "chair/booked",
  async ({ data, access }, { rejectWithValue }) => {
    try {
      const res = await movieAPI.DatVe(data, access);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const GioHang = createSlice({
  name: "chair",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectChair, (state, action) => {
        return selectChairs(state, action);
      })
      .addCase(handleBookTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleBookTicket.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.DanhSachGheDangDat = [];
        state.isLoading = false;
      })
      .addCase(handleBookTicket.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      // .addCase(handleBooked, (state, action) => {
      //   return handleBookedTicket(state, action);
      // })
      .addDefaultCase((state, action) => {
        return state;
      });
  },
});

// export const { selectChair, handleBook } = GioHang.actions;

export default GioHang.reducer;
