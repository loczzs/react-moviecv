// import React from 'react'
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import movieAPI from "apis/movieAPI";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
import { showAdress } from "modules/Movie/slices/ThongTinPhimSlice";
const Logoz = ({ movieId }) => {
  const { ThongTinPhims, adresses,cart } = useSelector((state) => state.thongtinphim);
  console.log( adresses);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getThongTinPhim(movieId));
  // }, []);
  const handleShowci = (cumrap) => {
    dispatch(showAdress(cumrap));
  };
  //  console.log(ThongTinPhims[0]?.cumRapChieu);
  return (
    <div className="row mb-1">
      {ThongTinPhims?.map((thongtinphim) => {
        let border = "1px solid black";

          if (thongtinphim.maHeThongRap === cart.maHeThongRap) {
          
            border = "1px solid #eb2f96";
          } 
        return (
         
          <div  key={thongtinphim.maHeThongRap} style={{ width: "70px" }}>
            <div
               onClick={() => handleShowci(thongtinphim)}
              // key={cinema.maHeThongRap}
              className="rounded-3"
              style={{
                border: border,
                padding: "5px",
                cursor: "pointer",

                width: "50px",
                height: "50px",
                // backgroundColor: backgroundColors,
              }}
            >
              <img
                height={"100%"}
                key={thongtinphim.maHeThongRap}
                width={"100%"}
                src={thongtinphim.logo}
                alt=""
              />
            </div>
            <p style={{ fontSize: "0.75rem" }}>
              {thongtinphim.tenHeThongRap.slice(0, 6) + ".."}
            </p>
          </div>
          
        );
      })}
    </div>
  );
};

export default Logoz;
