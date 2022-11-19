import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import "../../../Home/components/Cinema/cinema.scss";
import useWindowSize from "hooks/useWindowsize";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
import { useDispatch } from "react-redux";
import scss from "./style.module.scss";
import { RightOutlined ,HomeOutlined,CloseCircleOutlined} from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";
import moment from "moment/moment";
const Overview = ({ movieId }) => {
  const [lgShow, setLgShow] = useState(false);
  const [openTrailer, setTrailer] = useState(true);
  const { width } = useWindowSize();
  const {
    data: movie,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));
  console.log(movie);

  const navigate = useNavigate();
  const handleTicket = (ThongTinPhims) => {
    // movieAPI.getThongTinPhim(movieId)
    navigate(`/ticket/${ThongTinPhims}`);
  };
  if (!movie) {
    return null;
  }
  let paddingTop = width < 770 ? "20px" : "50px";
  let widths = width < 770 ? "100%" : "";
  let display = width < 770 ? "none" : "block";
  return (
    <div className="bg-white">
      <Modal
        style={{background:"black"}}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body style={{background:"black",padding:"0px",paddingTop:"20px"}}>
          
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
              src={`${movie.trailer}?&autoplay=1`}
              width={"100%"}
              height={"100%"}
              frameborder="0"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
      <div className={scss.navbarover}>
        
          <p style={{marginBottom:'8px'}}><HomeOutlined className= {scss.backhome} onClick={()=>{
            navigate('/')
          }}/></p>
        
        <RightOutlined style={{ color: "gray", marginTop: "2px" }} />
        <span>movie</span>
        <RightOutlined style={{ color: "gray", marginTop: "2px" }} />
        <span>{movie.tenPhim}</span>
        {/* <RightOutlined style={{color:"gray",}} /> */}
      </div>
      <div
        id="cv"
        style={{
          backgroundImage: `url(${movie.hinhAnh})`,

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "cover",
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.7)", padding: "70px 0px" }}>
          <div style={{ width: "70%", margin: "auto" }}>
            <div className="row">
              <div className="col-sm-5 " style={{ width: widths }}>
              <img
                    //  style={{ borderRadius: "10px" }}
                    width={"100%"}
                    height={"400px"}
                    src={movie.hinhAnh}
                    alt=""
                  />
              </div>
              <div className="col-sm-7 p-3 " style={{ width: widths }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div>
                    <h1 className={scss.name}>{movie.tenPhim}</h1>
                  </div>

                  <div style={{ width: "100%" }}>
                    <p className={scss.pmota}>Nội dung</p>

                    <span className={scss.spanmota}> {movie.moTa}</span>
                  </div>
                  <div>
                    <p className="text-white mt-3">
                      <span className={scss.spanmota}>Ngày chiếu :</span>
                      {moment(movie?.ngayKhoiChieu?.slice(0, 10)).format(
                        "DD/MM/YYYY"
                      )}
                    </p>
                  </div>
                  <div className="row mb-3 ">
                    <div className="col-sm-3">
                      <a href="#b">
                        <button className={scss.but1}>Mua vé</button>
                      </a>
                    </div>
                    <div className="col-sm-3">
                      <button
                        className={scss.but2}
                        onClick={() => setLgShow(true)}
                        
                      >
                        Trailer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
// background:`url(${movie.hinhAnh})`,backgroundRepeat:"no-repeat",backgroundSize:" cover"
