import { configureStore } from "@reduxjs/toolkit";
import authSlice from "modules/Authentication/slices/authSlice";
import cinemaSlice from "modules/Home/slices/cinemaSlice";
import movieadSlice from "modules/Home/slices/movieadSlice";
import useradSlice from "modules/Home/slices/useradSlice";
import LayDanhSachGhe from "modules/Ticket/slices/LayDanhSachGhe";
import GioHang from "modules/Ticket/slices/GioHang";
import ThongTinPhimSlice from "modules/Movie/slices/ThongTinPhimSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    cinema: cinemaSlice,
    movie: movieadSlice,
    user: useradSlice,
    danhsachghe : LayDanhSachGhe,
    giohang : GioHang,
    thongtinphim : ThongTinPhimSlice,
  },
});

export default store;
