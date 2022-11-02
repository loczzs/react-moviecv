// import React from 'react'
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import movieAPI from "apis/movieAPI";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
import { showcinema } from "modules/Movie/slices/ThongTinPhimSlice";
const Logoz = ({ movieId }) => {
  const { ThongTinPhims,cinema,cart } = useSelector((state) => state.thongtinphim);
  console.log(cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThongTinPhim(movieId));
  }, []);
  const handleShowci = (cumrap) => {
    dispatch(showcinema(cumrap));
  };
  //  console.log(ThongTinPhims[0]?.cumRapChieu);
  return (
    <div className="row mb-1">
      {ThongTinPhims.map((thongtinphim) => {
        let border = "1px solid gray";

          if (thongtinphim.maHeThongRap === cart.maHeThongRap) {
          
            border = "1px solid red";
          } 
        return (
          <div key={thongtinphim.maHeThongRap} style={{ width: "70px" }}>
            <div key={thongtinphim.maHeThongRap}>
              <div
                className="rounded-3"
              style={{
                border: border,
                padding: "5px",
                cursor: "pointer",

                width: "50px",
                height: "50px",}}
                onClick={() => handleShowci(thongtinphim)}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={thongtinphim.logo}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Logoz;
