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
import {CloseCircleOutlined} from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";
const Moviesc = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());
  const moviez = movies?.filter((movie) => {
    return movie.sapChieu === true;
  });
  const [lgShow, setLgShow] = useState(false);
  const[trailer,setTrailer]=useState("")
  // console.log();
  const settings = {
    dots: true,
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

    const showTrailer  = (trailer)=>{
      setTrailer(trailer)
      setLgShow(true)
    }
  return (
    <div className={scss.img}> 
        <Modal
         style={{background:"black"}}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        
        <Modal.Body style={{background:"black",padding:"0px"}}>
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
                setLgShow(false);
              }}
            >
              <CloseCircleOutlined /> 
            </button>
            <iframe
              style={{ position: "relative" }}
              allow="autoplay"
              src={`${trailer.trailer}?&autoplay=1`}
              width={"100%"}
              height={"100%"}
              frameborder="0"
            ></iframe>
            <div className="p-3">
              <h3 className="text-white">{trailer.tenPhim}</h3>
              <h4 className="text-white">Nội dung :</h4>
              <p className="text-white">{trailer.moTa}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
      <div className="container">
      <h1 className={scss.fsh1}>Phim sắp chiếu</h1>
        <Slider {...settings} className="row bg-transparent">
          {moviez
            ?.map((movie) => {
              return (
                <button
                  // style={{border:"none"}}
                  className=" col-sm-3  p-3 pt-1  bg-transparent border-0 "
                  key={movie.maPhim}
                >
                  {/* <div className={scss.lines}></div> */}
                  <div className={`${scss.bg}  `}>
                    <div className={scss.fade}>
                      <button onClick={()=>{
                        showTrailer(movie)
                      }} className={scss.butAni}>
                        <span>Trailer</span>
                      </button>
                    </div>
                    <img
                      style={{ borderRadius: "8px" }}
                      width={"100%"}
                      height={"300px"}
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
    </div>
  );
};

export default Moviesc;
