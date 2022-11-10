// import React from 'react'
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import Carousel from "react-bootstrap/Carousel";
import scss from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Moviesc = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());
  const moviez = movies?.filter((movie) => {
    return movie.sapChieu === true;
  });
  // console.log();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h3 className="mt-1 mb-1 text-white">Phim sắp chiếu</h3>
      <Slider {...settings} className="row bg-transparent">
        {moviez
          ?.map((movie) => {
            return (
              <button
                // style={{border:"none"}}
                className=" col-sm-3   bg-transparent border-0 "
                key={movie.maPhim}
              >
                {/* <div className={scss.lines}></div> */}
                <div className={`${scss.bg}  `}>
                  <div className={scss.fade}>
                    <button className={scss.butAni}>
                      <span>Trailer</span>
                    </button>
                  </div>
                  <img
                    style={{ borderRadius: "8px" }}
                    width={"100%"}
                    height={"400px"}
                    src={movie.hinhAnh}
                    alt=""
                  />
                </div>
              </button>
            );
          })
          .reverse()}
      </Slider>
    </div>
  );
};

export default Moviesc;
