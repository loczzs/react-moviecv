import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
// import { Carousel } from "antd";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useRef, useState } from "react";
import scss from "./style.module.scss";
import Modal from "react-bootstrap/Modal";
import { CloseCircleOutlined } from "@ant-design/icons";
import useWindowSize from "hooks/useWindowsize";
const data = [
  {
    name: "Top Gun: Maverick",
    bg: "https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    mota: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment...",
    trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
  },
  {
    name: "The Walking Dead",
    bg: "https://image.tmdb.org/t/p/original/zaulpwl355dlKkvtAiSBE5LaoWA.jpg",
    mota: "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
    trailer: "https://www.youtube.com/embed/cqpHzeGBsBc",
  },
  {
    name: "Star Wars: Andor",
    bg: "https://image.tmdb.org/t/p/original/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg",
    mota: "The tale of the burgeoning rebellion against the Empire and how people and planets became involved. In an era filled with danger, deception and intrigue, Cassian Andor embarks on the path that is...",
    trailer: "https://www.youtube.com/embed/cKOegEuCcfw",
  },
];

const Banner = () => {
  const {width} = useWindowSize()
  
  const [Banner, setBanner] = useState(
    data[Math.floor(Math.random() * data?.length)]
  );
  
  const [lgShow, setLgShow] = useState(false);
  const [time, setTime] = useState(false);

  const ref = useRef(data[Math.floor(Math.random() * data?.length)]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const bannerz = data[Math.floor(Math.random() * data.length)];

      setBanner(() => bannerz);
           
       
   }, 3000);
   return () => {
     intervalId && clearInterval(intervalId);
   };
    
   
   
  }, []);

  return (
    <div style={{ boxSizing: "border-box", transition: "all 3s" }}>
      <Modal
        style={{ background: "black" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body style={{ background: "black" }}>
          <div
            style={{
              height: "500px",
              paddingRight: "5px",
              position: "relative",
            }}
          >
            <button
            style={{top : width < 620 ? "10%" : "8%",right : width < 620 ? "5%" : "-50px" }}
              className={scss.butX}
              onClick={() => {
                setLgShow(false);
                setBanner(ref.current);
                // setTime(false);
                // setInterval(abc,1000)
                // abc()
              }}
            >
              <CloseCircleOutlined />
            </button>
            <iframe
              style={{ position: "relative" }}
              allow="autoplay"
              src={`${ref?.current?.trailer}?&autoplay=1`}
              width={"100%"}
              height={"100%"}
              frameborder="0"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
      {width > 992 ?  <div className={scss.bg}>
        <div
          style={{
            transition: "all 3s",
          }}
          className={scss.img}
        >
          <div
            style={{
              transition: "all 3s",
            }}
          >
            <img
              style={{
                transition: "all 3s",
              }}
              src={Banner?.bg}
              className={scss.image_XUUr}
              alt=""
            />
          </div>
        </div>
        <div className={scss.text}>
          <div
            style={{
              transition: "all 3s",
            }}
          >
            <h1
              style={{
                transition: "all 3s",
              }}
            >
              {Banner?.name}
            </h1>
            <p
              style={{
                transition: "all 3s",
              }}
              className="mb-5"
            >
              {Banner?.mota}
            </p>
            <button
              onClick={() => {
                setTime(true);
                ref.current = Banner;

                setBanner(Banner);
                setLgShow(true);
              }}
              className="btn btn-dark rounded-0"
            >
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M3 22v-20l18 10-18 10z"></path>
                </svg>

                <span className="ms-1  ">Watch Trailer</span>
              </div>
            </button>
          </div>
        </div>
      </div>:  <div
     style={{
       transition: "all 2s",
       width: "100%",
       height: "500px",
       backgroundImage: `url(${Banner?.bg})`,

       backgroundRepeat: "no-repeat",
       backgroundPosition: "center center",
       backgroundSize: "cover",
     }}
   >
     <div className={scss.flex}>
       <div className={scss.bannerrespon}>
         <h1
           style={{
             transition: "all 2s",
           }}
         >
           {Banner?.name}
         </h1>
         <p
           style={{
             transition: "all 2s",
           }}
           
         >
           {Banner?.mota}
         </p>
         <button
              onClick={() => {
                setTime(true);
                ref.current = Banner;

                setBanner(Banner);
                setLgShow(true);
              }}
              className="btn btn-dark rounded-0"
            >
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M3 22v-20l18 10-18 10z"></path>
                </svg>

                <span className="ms-1  ">Watch Trailer</span>
              </div>
            </button>
       </div>
     </div>
   </div>}
     
    
    </div>

   
  );
};

export default Banner;
