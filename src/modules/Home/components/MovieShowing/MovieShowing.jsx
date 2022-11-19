import { useNavigate } from "react-router-dom";
import React, { useState, useRef,useEffect } from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import scss from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgGirl from "./img/defaultImage.jpg";
import { logDOM } from "@testing-library/react";
const MovieShowing = () => {
  // useNavigate là một hook dùng để điều hướng url
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());
  
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  const moviez = movies?.filter((movie) => {
    return movie.dangChieu === true;
  });
  

  return (
    <div className={scss.img}>
      <div className="container">
        <h1 className={scss.fsh1}>Phim đang chiếu</h1>
        <Slider {...settings} className="row bg-transparent">
          {moviez
            ?.map((movie) => {
              return (
                <button
                  // style={{border:"none"}}
                  className=" col-sm-3 p-3 pt-1 bg-transparent border-0 "
                  onClick={() => {
                    goToMovie(movie.maPhim);
                  }}
                  key={movie.maPhim}
                >
                  {/* <div className={scss.lines}></div> */}
                  <div className={`${scss.scale}  `}>
                    {/* <div className={scss.fade}>
                    <button className={scss.butAni} onClick={(e)=> logABC(e,movie.maPhim)
                    
                    } ><span>Trailer</span></button>
                  </div> */}
                    <img
                      style={{ borderRadius: "8px" }}
                      width={"100%"}
                      height={"300px"}
                      src={movie.hinhAnh}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="text-white text-start mt-3  ">
                      {movie.tenPhim}
                    </h5>
                  </div>
                </button>
              );
            })
            .reverse()}
        </Slider>
      </div>
    </div>
  );
};

export default MovieShowing;
