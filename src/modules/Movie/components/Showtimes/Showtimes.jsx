import React from "react";
import Logoz from "./Logoz";
import Showtimez from "./Showtimez";
import style from "./style.module.scss";
const Showtimes = ({ movieId }) => {
  // useRequest call API lấy lịch chiếu
  // console.log(movieId);
  return (
    <div className="pt-5" id="a">
      <div style={{ border: "1px solid black" }} className="container p-5">
        <div>
          <Logoz movieId={movieId} />
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Showtimez movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showtimes;
