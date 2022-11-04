import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import scss from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import store from "store";
import { selectChair } from "../slices/GioHang";

const SeatList = ({ DanhSachGhe }) => {
  const { DanhSachGheDangDat } = useSelector((state) => state.giohang);
  const { bg } = useSelector((state) => state.thongtinphim);
  const renderSeats = () => {
    return DanhSachGhe?.map((ghe, index) => {
      const ClassGheVip = ghe.loaiGhe === "Vip" ? `${scss.gheVip}` : "";
      const ClassGheDaDat = ghe.daDat === true ? `${scss.gheDaDat}` : "";
      let ClassGheDD = "";
      const indexGheDD = DanhSachGheDangDat.findIndex((item) => {
        return item.maGhe === ghe.maGhe;
      });
      if (indexGheDD !== -1) {
        ClassGheDD = `${scss.gheDangDat}`;
      }

      return (
        <Fragment>
          <button
            onClick={() => {
              store.dispatch(selectChair(ghe));
            }}
            className={`${scss.ghe} ${ClassGheVip} ${ClassGheDaDat} ${ClassGheDD}`}
            key={index}
            disabled={ghe.daDat}
          >
            {ghe.DaDat ? (
              <CloseOutlined
                style={{ marginBottom: 7.5, fontWeight: "bold" }}
              />
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className={scss.col1}>
      {/* <h2>Màn hình</h2> */}
      <div className="col-8 p-3">
        <div className={scss.screen}></div>
        <div>{renderSeats()}</div>
      </div>
      <div className="col-4 d-flex justify-content-center flex-column" >
        <div  className="mb-3 d-flex">
          <div className={`${scss.ghe} ${scss.gheDangDat} col-sm-6 `}></div>
            <div className="col-sm-6 p-1">
              <h3 className="text-white text-start">Ghế Đang Đặt</h3>
            </div>
        </div>
        <div  className="mb-3 d-flex">
          <div className={`${scss.ghe} ${scss.gheDaDat} col-sm-6 `}></div>
            <div className="col-sm-6 p-1">
              <h3 className="text-white text-start">Ghế Đã Đặt</h3>
            </div>
        </div>
        <div  className="mb-3 d-flex">
          <div className={`${scss.ghe} ${scss.gheVip} col-sm-6 `}></div>
            <div className="col-sm-6 p-1">
              <h3 className="text-white text-start">Ghế Vip</h3>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SeatList;
