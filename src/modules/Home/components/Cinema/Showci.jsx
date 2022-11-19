import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import scss from "../MovieShowing/style.module.scss";
import {RightOutlined } from "antd"
import moment from "moment/moment";
const Showci = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cinemas, isLoading, error, cinema, cart2, addresses, logoz } =
    useSelector((state) => state.cinema);
  // console.log(cart2);
  if (!cinema) {
    return;
  }
  const Showmovie = cinema.filter((movie) => {
    return movie.dangChieu === true;
  });
  const handleBookticket = (maLichChieu) => {
    navigate(`/ticket/${maLichChieu}`);
  };
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  // console.log(Showmovie)
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
      {Showmovie.map((movie) => {
        return (
          <div
            style={{ height: "150px" }}
            className="mb-5  text-center row bg-white overflow-hidden"
            key={movie.maPhim}
          >
            <div
            onClick={() => goToMovie(movie.maPhim)}
              style={{ height: "100%", cursor: "pointer" }}
              className={`${scss.scale} col-sm-3 overflow-hidden `}
            >
              <img width={"100%"} height={"100%"} src={movie.hinhAnh} alt="" />
            </div>
            <div style={{ height: "100%" }} className="col-sm-9  scrollcss">
              <div className>
                <div className="row" style={{ textAlign: "left" }}>
                  <div className="col-sm-3">
                    <button className={`${scss.aniHot} rounded-1`}>
                      <p>HOT</p>
                    </button>
                  </div>
                  <h4 className="mb-3 pe-auto  "  onClick={() => goToMovie(movie.maPhim)}><a>{movie.tenPhim}</a></h4>
                  {movie.lstLichChieuTheoPhim.map((listShow) => {
                    return (
                      <div
                        key={listShow.maLichChieu}
                        className="col-sm-4  mb-3"
                      >
                        <button
                          onClick={() => handleBookticket(listShow.maLichChieu)}
                          
                          className="butsi"
                        >
                        <span style={{ color: "#2092ce" }}>
                            {listShow.ngayChieuGioChieu.slice(11)}
                          </span>
                          ~
                          <span style={{ color: "#38bdf8" }}>
                            {moment(listShow.ngayChieuGioChieu.slice(0, 10)).format(
                        "DD/MM/YYYY"
                      )}
                          </span>
                         
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Showci;
