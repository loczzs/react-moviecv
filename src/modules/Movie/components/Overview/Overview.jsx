import React, { useEffect, useState } from "react";
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
  const [openTrailer, setTrailer] = useState(true);
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
    <div>
      <div style={{ background: "#27282c" }} className="container  ">
        <div className="row">
          <div
            className="col-sm-5 p-3  pe-0"
            style={{ width: widths, background: "#27282c" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div>
                <h1 className={scss.name}>{movie.tenPhim}</h1>
              </div>

              <div>
                <span
                  style={{
                    wordWrap: "break-word",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  <span> {movie.moTa}</span>
                </span>
              </div>
              <div>
                <p className="text-white mt-3">
                  Ngày chiếu : {movie.ngayKhoiChieu.slice(0, 10)}
                </p>
              </div>
              <div className="row mb-3 ">
                <div className="col-sm-3">
                  <a href="#b">
                    <button className={scss.but1}>Mua vé</button>
                  </a>
                </div>
                <div className="col-sm-3">
                  <button className={scss.but2} onClick={()=>{
                    setTrailer(!openTrailer)
                  }}>Trailer</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-7 ps-0 pe-0 " style={{ width: widths }}>
            {openTrailer ? (
              <img
                //  style={{ borderRadius: "10px" }}
                width={"100%"}
                height={"500px"}
                src={movie.hinhAnh}
                alt=""
              />
            ) : (
              <div
                style={{
                  height: "500px",
                  paddingRight: "5px",
                  position: "relative",
                }}
              >
                <button
                  className={scss.butX}
                  onClick={() => {
                    setTrailer(!openTrailer);
                  }}
                >
                  X
                </button>
                <iframe
                  style={{ position: "relative" }}
                  allow="autoplay"
                  src={`${movie.trailer}?&autoplay=1`}
                  width={"100%"}
                  height={"100%"}
                  frameborder="0"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
// background:`url(${movie.hinhAnh})`,backgroundRepeat:"no-repeat",backgroundSize:" cover"


 