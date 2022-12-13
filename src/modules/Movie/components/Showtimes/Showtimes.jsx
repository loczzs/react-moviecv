import React from "react";
import { useEffect } from "react";
import Address from "./Address";
import Logoz from "./Logoz";
import Showtimez from "./Showtimez";
import style from "./style.module.scss";
import "../../../Home/components/Cinema/cinema.scss";
import useWindowSize from "hooks/useWindowsize";
import { useDispatch } from "react-redux";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
const Showtimes = ({ movieId }) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  useEffect(() => {
    dispatch(getThongTinPhim(movieId));
  }, []);

  return (
    <div id="b" className="container con">
      <h1
        style={{ color: "#d82d8b", fontFamily: "unset" }}
        className="text-center mb-3"
      >
        Lịch chiếu phim
      </h1>
    
        <div
          className="containcard bg-white rounded-3"
        >
          <div style={{ height: "100%" }} className="pdcss">
            <Logoz movieId={movieId} />
          </div>
          <div
            className="cardz rounded-3 p-3 "
           
          >
            <div
              
              className=" cardz1 pe-3   col-sm-4"
            >
              <Address movieId={movieId} />
            </div>
            <div style={{ height: "100%" }} className="cardz2  col-sm-8 ">
              <Showtimez movieId={movieId} />
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Showtimes;
