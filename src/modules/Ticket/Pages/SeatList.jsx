import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import scss from "./style.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import store from "store";
import { selectChair } from "../slices/GioHang";

const SeatList = ({ DanhSachGhe }) => {
  const { DanhSachGheDangDat } = useSelector((state) => state.giohang);

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
                style={{ marginBotton: 7.5, fontWeight: "bold" }}
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
      <h2>Màn hình</h2>
      <div>{renderSeats()}</div>
    </div>
  );
};

export default SeatList;
