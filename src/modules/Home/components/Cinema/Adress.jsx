import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showcinema } from "modules/Home/slices/cinemaSlice";
import "./cinema.scss";
import { RightOutlined } from "@ant-design/icons";
import useWindowSize from "hooks/useWindowsize";
import { Button, Drawer } from 'antd';
import { useState } from "react";
import Showci from "./Showci";
const Adress = () => {
  const dispatch = useDispatch();
  const { cinemas, isLoading, error, cinema, cart, addresses, cart2, logoz } =
    useSelector((state) => state.cinema);
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const {width} = useWindowSize()
  
  if (!addresses) {
    return;
  }
  const add = width > 991 ? 6 : 4 
  const handlleShowcinema =  (address) => {
    dispatch(showcinema(address));
   width < 769 ? setOpen(true) : setOpen(false)
  };
  // console.log(address)
  return (
    <div className={addresses.length >add ? "scrollcss " : ""}>
    {width < 769 ?  <Drawer title="Basic Drawer" placement="right"  onClose={onClose} open={open}>
       <Showci/>
      </Drawer>:""}
      <h2 className="mb-3 anih1">Hệ Thống Rạp</h2>
      
      {addresses.map((address) => {
        let backgroundColors = "1px solid black";
        let colors = "black"
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
            <div >
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
            <div className="pe-1 ps-1"  >
              <b style={{fontSize:"13px",wordBreak:"break-word"}}> {address.tenCumRap}</b>
              {/* <p className="fs-6 m-0">{address.diaChi}</p> */}
            </div>
            <div className=" d-flex  align-items-center " >
             <RightOutlined style={{color:"black",marginTop:"3x" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Adress;
