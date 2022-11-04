import React from "react";
import { getCinema } from "modules/Home/slices/cinemaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { showAdress } from "modules/Home/slices/cinemaSlice";
// import cinemaSlice

const Logo = () => {
  const dispatch = useDispatch();
  const { cinemas, isLoading, error, cinema, cart } = useSelector(
    (state) => state.cinema
  );
  useEffect(() => {
    dispatch(getCinema());
  }, []);
  // console.log(cinemas)
  // console.log(cart)
  const handleShowwadress = (cinema) => {
    dispatch(showAdress(cinema));
  };

  return (
    <div className="row mb-1">
      {cinemas.map((cinema) => {
        let border = "1px solid gray";

        if (cinema.maHeThongRap === cart.maHeThongRap) {
          {
            /* console.log(cart.maHeThongRap) */
          }
          border = "1px solid red";
        }

        return (
          <div style={{ width: "70px" }}>
            <div
              onClick={() => handleShowwadress(cinema)}
              key={cinema.maHeThongRap}
              className="rounded-3"
              style={{
                border: border,
                padding: "5px",
                cursor: "pointer",

                width: "50px",
                height: "50px",
                // backgroundColor: backgroundColors,
              }}
            >
              <img
                height={"100%"}
                key={cinema.maHeThongRap}
                width={"100%"}
                src={cinema.logo}
                alt=""
              />
            </div>
            <p style={{ fontSize: "0.75rem" }}>
              {cinema.tenHeThongRap.slice(0, 6) + ".."}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Logo;
