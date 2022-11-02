import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import movieAPI from "apis/movieAPI";

const Showtimez = () => {
  const { cinema } = useSelector((state) => state.thongtinphim);
  // console.log(cinema);
  const navigate = useNavigate();
  // if(!cinema){
  //   return
  // }
  // const navigate = useNavigate();
  const handleTicket = (ThongTinPhims) => {
    // movieAPI.getThongTinPhim(movieId)
    navigate(`/ticket/${ThongTinPhims}`);
  };
  return (
    <div >
      {cinema?.map((cine) => {
        return (
          <div  className="mb-5" key={cine.maCumRap}>
            <h3>{cine.tenCumRap}</h3>
            {cine.lichChieuPhim.map((lichChieu) => {
              return (
                <button key={lichChieu.maLichChieu} style={{ backgroundColor:'#fafafa', fontSize: "13px" ,borderRadius:"10px",padding:"10px 5px",border:"grey 1px solid"}} onClick={() => handleTicket(lichChieu.maLichChieu)}>
                <span style={{ color: "green" }}>
                            {lichChieu.ngayChieuGioChieu.slice(0, 10)}
                          </span>
                          ~
                          <span style={{ color: "red" }}>
                            {lichChieu.ngayChieuGioChieu.slice(11)}
                          </span>{" "}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Showtimez;
