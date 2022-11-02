import React from "react";
import { getCinema } from "modules/Home/slices/cinemaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FaApple, FaRobot,FaFacebook,FaInstagram } from "react-icons/fa";
import useWindowSize from "hooks/useWindowsize";
const Footer = () => {
  const dispatch = useDispatch();
  const { cinemas, isLoading, error, cinema, cart } = useSelector(
    (state) => state.cinema
  );
  const { width } = useWindowSize();
  useEffect(() => {
    dispatch(getCinema());
  }, []);
  if(width > 1200){
    return (
      <div className="container " style={{ padding: "100px", paddingTop: "0px" }}>
        <div className="row">
          <div className="col-sm-4">
            <h5>TIX</h5>
            <div className="row">
              <div className="col-sm-6">
                <p className="mb-1">FAQ</p>
                <span>Brand Guidelines</span>
              </div>
              <div className="col-sm-6">
                <p className="mb-1">Thỏa thuận sử dụng</p>
                <span>Chính sách bảo mật</span>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4"
            style={{ padding: "50px", paddingTop: "0px" }}
          >
            <h5>Đối Tác</h5>
            <div className="row">
              {cinemas.map((cinema) => {
                return (
                  <div
                    className="col-sm-3 mb-3 "
                    style={{ paddingRight: "0px" }}
                    key={cinema.maHeThongRap}
                  >
                    <img
                      height={"30px"}
                      width={"30px"}
                      src={cinema.logo}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-2">
            <h5> MOBBILE APP</h5>
            <div className="row">
              <div className="col-sm-2 me-3">
               <h2> <FaApple /></h2>
              </div>
  
              <div className="col-sm-2">
               <h2> <FaRobot /></h2>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <h5>SOCIAL</h5>
            <div className="row">
              <div className="col-sm-2 me-3">
               <h2> <FaFacebook /></h2>
              </div>
  
              <div className="col-sm-2">
               <h2> <FaInstagram /></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return(
      
          <div className="container">
            <div style={{borderBottom: "5px white solid"}} className=" text-center pb-3" >
            <h5>SOCIAL</h5>
           <span className="me-3 fs-1"><FaFacebook/></span>
           <span className=" fs-1"><FaInstagram/></span>
          </div> 
          </div>
      
    
      )
  }
};

export default Footer;
