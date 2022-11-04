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
      className="con"
    >
      <h1
        style={{ color: "#d82d8b", fontFamily: "unset" }}
        className="text-center mb-3"
      >
        Lịch chiếu phim
      </h1>
      {width > 1000 ? (
        <div
          className=" bg-white rounded-3"
          style={{ padding: "50px", border: "1px solid black" }}
        >
          <div style={{ height: "100%" }} className="pdcss">
            <Logo />
          </div>
          <div
            className="row rounded-3 p-3 "
            style={{
              height: "550px",
              border: "1px solid black",
              width: "100%",
            }}
          >
            <div
              style={{ height: "100%", borderRight: "1px solid gray" }}
              className=" pe-3 ps-3 col-sm-4"
            >
              <Adress />
            </div>
            <div style={{ height: "100%" }} className="  col-sm-8 ">
              <Showci />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cinema;
