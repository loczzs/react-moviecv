import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Container } from "react-bootstrap";
import React from "react";
import Logo from "./Logo";
import Adress from "./Adress";
import Showci from "./Showci";
import "./cinema.scss";
import useWindowSize from "hooks/useWindowsize";

const Cinema = () => {
  const { width } = useWindowSize();
  return (
    <div
      id="b"
      className="container con"
    >
      <h1
        style={{ color: "#d82d8b", fontFamily: "unset" }}
        className="text-center mb-3"
      >
        Lịch chiếu phim
      </h1>
  
        <div
          className=" containcard bg-white rounded-3"
          
        >
          <div style={{ height: "100%" }} className="pdcss">
            <Logo />
          </div>
          <div
            className="cardz rounded-3 p-3 "
            
          >
            <div
             
              className=" cardz1 pe-3   col-sm-4"
            >
              <Adress />
            </div>
            <div style={{ height: "100%" }} className=" cardz2  col-sm-8 ">
              <Showci />
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Cinema;
