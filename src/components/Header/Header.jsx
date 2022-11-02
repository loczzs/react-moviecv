import React from "react";
import { FaUser } from "react-icons/fa";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import style from "./style.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import useWindowSize from "hooks/useWindowsize";
import { useNavigate } from "react-router-dom";
import { logout } from "modules/Authentication/slices/authSlice";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Form from "react-bootstrap/Form";

const Header = () => {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let display = width < 1200 ? "" : "none";
  let display2 = width > 1200 ? "" : "none";
  let margin = width < 1000 ? "mt-3" : "mt-1";
  // if (width < 1200) {
  //   display = "none";
  // }
  // let display2 = "none";
  // if (width < 1200) {
  //   display2 = "block";
  // }
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/Login");
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const handleRegister = () => {
    navigate("/Register");
  };
  const handlelogo = () => {
    navigate("/");
  };
  return (
   
    <Navbar
      style={{ height: "100%" }}
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
    >
      <Container>
        <Navbar.Brand>
          <h1 style={{color:'#d82d8b'}}> Tix-Movie</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          variant="primary"
          onClick={handleShow}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <b>Trang chủ</b>
            </Nav.Link>
            <Nav.Link>
              <b>Lịch chiếu</b>
            </Nav.Link>
            <Nav.Link>
              <b>Cụm rạp</b>
            </Nav.Link>
          </Nav>

          {user ? (
            <Nav>
              <Nav.Link>
                <span className=" me-1 ">Xin Chào</span>
                <b style={{color:"#d82d8b"}} className="fs-3 ">{user.taiKhoan}</b>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <button
                  onClick={handleLogout}
                  className={`${style.but} btn btn-danger`}
                >
                  Logout
                </button>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <button
                  onClick={handleLogin}
                  className="  bg-transparent border-0"
                >
                  <i className="me-1 ">
                    <FaUser />
                  </i>
                  <span>Đăng nhập</span>
                </button>
              </Nav.Link>
              <Nav.Link>
                <button
                  onClick={handleRegister}
                  className="  text-center bg-transparent border-0"
                >
                  <i className="me-1">
                    <FaUser />
                  </i>
                  <span>Đăng ký</span>
                </button>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5 className="text-danger ">
              <b>CYBER MOVIE</b>
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          {user ? (
            <Nav>
            <Nav.Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger border-0 "
                >
                  Logout
                </button>
              </Nav.Link>
              <Nav.Link>
                <span className=" me-1 ">Xin Chào</span>
                <b className="fs-3 ">{user.taiKhoan}</b>
              </Nav.Link>
              
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <button
                  onClick={handleLogin}
                  className="  bg-transparent border-0"
                >
                  <i className="me-1 ">
                    <FaUser />
                  </i>
                  <span>Đăng nhập</span>
                </button>
              </Nav.Link>
              <Nav.Link>
                <button
                  onClick={handleRegister}
                  className="  text-center bg-transparent border-0"
                >
                  <i className="me-1">
                    <FaUser />
                  </i>
                  <span>Đăng ký</span>
                </button>
              </Nav.Link>
            </Nav>
          )}
            <div className="pt-3">
              <a className={style.stylea1}> Home</a>
              <a href="#b" className={style.stylea1}>
                {" "}
                Lịch chiếu
              </a>
              <a className={style.stylea1}> Cụm rạp </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default Header;
{
  /* <div className="col-sm-6 " style={{display: display2}}>
                <div className="row">
                  <div className="col-sm-6 mt-3 text-end   pe-0">
                    <h3 className="text-white">Xin Chào</h3>
                    
                  </div>
                  <div className="col-sm-6 text-center   ps-0 ">
                  <button onClick={handleLogout} className="bg-transparent text-white border-0 fs-3">Logout</button>
                  </div>
                </div>
        </div> */
}
