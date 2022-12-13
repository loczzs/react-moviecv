import React from "react";
import "../../../Home/components/Cinema/cinema.scss";
import { useSelector, useDispatch } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { showcinema } from "modules/Movie/slices/ThongTinPhimSlice";
import useWindowSize from "hooks/useWindowsize";
import { Drawer } from "antd";
import { useState } from "react";
import Showtimez from "./Showtimez";
const Address = () => {
  const { ThongTinPhims, adresses, cart2, logoz } = useSelector(
    (state) => state.thongtinphim
  );
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const handlleShowcinema = (address) => {
    
    dispatch(showcinema(address));
    width < 769 ? setOpen(true) : setOpen(false)
  };
  const { width } = useWindowSize();

  const add = width > 991 ? 6 : 4;

  return (
    <div className={adresses.length > add ? "scrollcss " : ""}>
     {width < 769 ?  <Drawer title="Basic Drawer" placement="right"  onClose={onClose} open={open}>
        <Showtimez/>
      </Drawer>:""}
      <h2 className="mb-3 anih1">Hệ Thống Rạp</h2>
      {adresses.map((address) => {
        let backgroundColors = "1px solid black";

        if (address.maCumRap === cart2.maCumRap) {
          {
            /* console.log(cart.maHeThongRap) */
          }
          backgroundColors = "1px solid #eb2f96";
        }
        return (
          <div
            className=" addresscard rounded-3    "
            style={{
              border: width < 769 ? "1px solid black" : backgroundColors,
            }}
            onClick={() => handlleShowcinema(address)}
            key={address.maCumRap}
          >
            <div>
              <div
                className="rounded-3"
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  cursor: "pointer",

                  width: "50px",
                  height: "50px",
                  // backgroundColor: backgroundColors,
                }}
              >
                <img
                  height={"100%"}
                  // key={cinema.maHeThongRap}
                  width={"100%"}
                  src={logoz}
                  alt=""
                />
              </div>
            </div>
            <div className="pe-1 ps-1" >
              <b style={{ fontSize: "13px",wordBreak:"break-word" }}> {address.tenCumRap}</b>
              {/* <p className="fs-6 m-0">{address.diaChi}</p> */}
            </div>
            <div className=" d-flex align-items-center ">
              <RightOutlined style={{ color: "black",marginTop:"3px" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Address;
