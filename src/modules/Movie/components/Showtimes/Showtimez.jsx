import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import movieAPI from "apis/movieAPI";
import "../../../Home/components/Cinema/cinema.scss";
import scss from "../../../Home/components/MovieShowing/style.module.scss";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
const Showtimez = ({ movieId }) => {
  const dispatch = useDispatch();
  const { cinema, logoz, cart2 } = useSelector((state) => state.thongtinphim);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getThongTinPhim(movieId));
  }, []);
  // if(!cinema){
  //   return
  // }
  // const navigate = useNavigate();
  const handleTicket = (ThongTinPhims) => {
    // movieAPI.getThongTinPhim(movieId)
    navigate(`/ticket/${ThongTinPhims}`);
  };
  return (
    <div className=" container scrollcss bg-white">
      <div
        className="row rounded-3 me-0 ms-0 p-1 "
        style={{
          alignItems: "center",
          border: "1px solid black",
          width: "100%",
          backgroundColor: "#fafafa",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "74px" }}>
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
        <div className="col-10">
          <b className="fs-6"> {cart2.tenCumRap}</b>
          <p className="fs-6 m-0">{cart2.diaChi}</p>
        </div>
      </div>
      
      <div className="row">
      {cinema?.map((cine) => {
         return( <div key={cine?.maLichChieu} className="col-sm-4  mb-3">
            <button
              onClick={() => handleTicket(cine?.maLichChieu)}
              className="butsi"
            >
              <span style={{ color: "#38bdf8" }}>
                {cine?.ngayChieuGioChieu?.slice(0, 10)}
              </span>
              ~
              <span style={{ color: "#2092ce" }}>
                {cine?.ngayChieuGioChieu?.slice(11)}
              </span>
            </button>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Showtimez;
