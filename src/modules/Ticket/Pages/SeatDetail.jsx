import React from "react";
import scss from "./style.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "store";
import { handleBookTicket } from "../slices/GioHang";
import { message } from "antd";
import { getLayGhe } from "../slices/LayDanhSachGhe";

const SeatDetail = ({ ThongTinPhim }) => {
  const { DanhSachGheDangDat } = useSelector((state) => state.giohang);
  const { ticketId} = useParams()
  const user = JSON.parse(localStorage.getItem("user"));

  const base = {
    maLichChieu: ticketId,
    danhSachVe: DanhSachGheDangDat,
  }

  const handleClear = async (base, access) => {
    const data = await store.dispatch(
      handleBookTicket({
        data: base,
        access: access,
      })
    );
    if (data.meta.requestStatus === "fulfilled") {
      message.success(data.payload);
      store.dispatch(getLayGhe(ticketId));
    }}

  return (
    <div className={scss.col2}>
      <h2>Danh sách ghế đã chọn</h2>
      <br />
      <br />
      <div className={scss.tab}>
        <h5>Cụm Rạp:</h5>
        <h5 className={scss.colora}>{ThongTinPhim?.tenCumRap}</h5>
      </div>
      <hr />
      <div className={scss.tab}>
        <h5>Địa chỉ:</h5>
        <h5 className={scss.colora}>{ThongTinPhim?.diaChi}</h5>
      </div>
      <hr />
      <div className={scss.tab}>
        <h5>Rạp:</h5>
        <h5 className={scss.colora}>{ThongTinPhim?.tenRap}</h5>
      </div>
      <hr />
      <div className={scss.tab}>
        <h5>Ngày giờ chiếu:</h5>
        <h5 className={scss.colora}>
          {ThongTinPhim?.ngayChieu} {ThongTinPhim?.gioChieu}
        </h5>
      </div>
      <hr />
      <div className={scss.tab}>
        <h5>Tên Phim:</h5>
        <h5 className={scss.colora}>{ThongTinPhim?.tenPhim}</h5>
      </div>
      <hr />
      <div className={scss.tab}>
        <h5>Số ghế :</h5>
        {DanhSachGheDangDat.map((gheDD, index) => {
          return (
            <span key={index} className={{ fontsize: 25 }}>
              {gheDD.tenGhe}
            </span>
          );
        })}
      </div>
      <hr />
      <div className={scss.tab}>
        <h5>Giá tiền : </h5>
        <span>
          {DanhSachGheDangDat.reduce((tongtien, ghe) => {
            return (tongtien += ghe.giaVe);
          }, 0).toLocaleString()}
        </span>
      </div>
      <br />
      <button
        className={scss.buttons}
        onClick={() => handleClear(base, user.accessToken)}
      >
        ĐẶT VÉ
      </button>
    </div>
  );
};

export default SeatDetail;
