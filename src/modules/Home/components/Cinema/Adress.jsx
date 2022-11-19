import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showcinema } from "modules/Home/slices/cinemaSlice";
import "./cinema.scss";
import { RightOutlined } from "@ant-design/icons";

const Adress = () => {
  const dispatch = useDispatch();
  const { cinemas, isLoading, error, cinema, cart, addresses, cart2, logoz } =
    useSelector((state) => state.cinema);

  if (!addresses) {
    return;
  }
  const handlleShowcinema = (address) => {
    dispatch(showcinema(address));
  };
  // console.log(address)
  return (
    <div className={addresses.length > 6 ? "scrollcss " : ""}>
      <h2 className="mb-3 anih1">Hệ Thống Rạp</h2>
      {addresses.map((address) => {
        let backgroundColors = "white";

        if (address.maCumRap === cart2.maCumRap) {
          {
            /* console.log(cart.maHeThongRap) */
          }
          backgroundColors = "pink";
        }
        return (
          <div
            className="row rounded-3 me-0 ms-0 p-1  "
            style={{
              alignItems: "center",
              border: "1px solid black",
              width: "100%",
              backgroundColor: backgroundColors,
              marginBottom: "10px",
              position:"relative",
              cursor:"pointer"
            }}
            onClick={() => handlleShowcinema(address)}
            key={address.maCumRap}
          >
            <div className="col-sm-3 pe-1">
              <div
                className="rounded-3"
                style={{
                  border: "1px solid gray",
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
            <div className="col-sm-7" style={{ padding: "3px" }}>
              <b style={{fontSize:"14px"}}> {address.tenCumRap}</b>
              {/* <p className="fs-6 m-0">{address.diaChi}</p> */}
            </div>
            <div className="col-sm-2  d-flex align-items-center" >
             <RightOutlined style={{color:"gray",}} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Adress;
