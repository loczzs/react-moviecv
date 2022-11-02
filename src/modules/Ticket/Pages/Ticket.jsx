import React, { useEffect } from "react";
import SeatDetail from "./SeatDetail";
import SeatList from "./SeatList";
import scss from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLayGhe } from "../slices/LayDanhSachGhe";

const Ticket = () => {
  const { ticketId } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { ThongTinPhim, isLoading, error } = useSelector(
    (state) => state.danhsachghe
  );
  const { danhSachGhe, thongTinPhim} = ThongTinPhim

  useEffect(() => {
    dispatch(getLayGhe(ticketId));
  }, []);

  return (
    <div className={scss.container}>
      <h1 className="text-center text-primary">ĐẶT VÉ XEM PHIM</h1>
      <div className={scss.row}>
        <SeatList DanhSachGhe={danhSachGhe}/>
        <SeatDetail ThongTinPhim={thongTinPhim} />
      </div>
    </div>
  );
};

export default Ticket;
