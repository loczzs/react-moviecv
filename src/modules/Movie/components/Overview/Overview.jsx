import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import "../../../Home/components/Cinema/cinema.scss";
import useWindowSize from "hooks/useWindowsize";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
import { useDispatch } from "react-redux";
import scss from "./style.module.scss";
const Overview = ({ movieId }) => {
  const { width } = useWindowSize();
  const {
    data: movie,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));
  console.log(movie);

  const navigate = useNavigate();
  const handleTicket = (ThongTinPhims) => {
    // movieAPI.getThongTinPhim(movieId)
    navigate(`/ticket/${ThongTinPhims}`);
  };
  if (!movie) {
    return null;
  }
  let paddingTop = width < 770 ? "20px" : "50px";
  let widths = width < 770 ? "100%" : "";
  let display = width < 770 ? "none" : "block";
  return (
    <div
      style={{
        height: "450px",
        background: `url(${movie.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "10% 20%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          background: " rgba(0, 0, 0, 0.3)",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          // background: " rgba(0, 0, 0, 0.3)",
          top: "15% ",
          left: "15%",
          width: "100%",
          height: "100%",
          // padding: "50px",
          zIndex: "1000",
        }}
        className="container "
      >
        <div className="row">
          <div className="col-sm-5" style={{ width: widths }}>
            <img
              style={{ borderRadius: "10px" }}
              width={"100%"}
              height={"300px"}
              src={movie.hinhAnh}
              alt=""
            />
          </div>
          <div className="col-sm-7" style={{ width: widths }}>
            <div
              className={width < 770 ? "mb-3 text-white" : "mb-5 text-white"}
              // style={{ paddingTop:  }}
            >
              <div className="col-sm-3">
                <button className={`${scss.aniHot} rounded-1`}>
                  <p>HOT</p>
                </button>
              </div>
              <h1 className="mb-1 text-white">
                <b>{movie.tenPhim}</b>
              </h1>
              <div className="col-sm-7">
                <span style={{ wordWrap: "break-word", fontWeight: "600" }}>
                  Nội dung :{" "}
                  <span > {movie.moTa}</span>
                </span>
              </div>
              <p className="text-white mt-3">
                Ngày chiếu : {movie.ngayKhoiChieu.slice(0, 10)}
              </p>
            </div>
            <div>
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
// background:`url(${movie.hinhAnh})`,backgroundRepeat:"no-repeat",backgroundSize:" cover"
