import React, { useEffect } from "react";
import SeatDetail from "./SeatDetail";
import SeatList from "./SeatList";
import scss from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLayGhe } from "../slices/LayDanhSachGhe";

const Ticket = () => {
  const { ticketId } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { ThongTinPhim, isLoading, error } = useSelector(
    (state) => state.danhsachghe
  );
  const { danhSachGhe, thongTinPhim } = ThongTinPhim;
 

  useEffect(() => {
    dispatch(getLayGhe(ticketId));
  }, []);

  return (
    <div style={{background:"white"}} className="  pb-3">
     
      <div className={scss.row}>
        {/* <img src="" alt="" /> */}
        
        <div
        
        className="col-sm-6"
          style={{
            width: "100%",
            backgroundImage: `url(${thongTinPhim?.hinhAnh})`,
            height: "100%",
            // backgroundRepeat:"no-repeat",
            // backgroundSize:"cover"
            
            // position:'fixed'
          }}
        >
          
          <SeatList DanhSachGhe={danhSachGhe} />
        </div>
        <SeatDetail  ThongTinPhim={thongTinPhim} />
      </div>
    </div>
  );
};

export default Ticket;
