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
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { LoginOutlined } from "@ant-design/icons";

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
      <Container >
        <Navbar.Brand onClick={handlelogo} style={{cursor:"pointer"}}>
          <h1 style={{ color: "#d82d8b" }}> Tix-Movie</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          variant="primary"
          onClick={handleShow}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handlelogo}>
              <b>Trang chủ</b>
            </Nav.Link>
            <Nav.Link href="#b">
              <b>Lịch chiếu</b>
            </Nav.Link>
            <Nav.Link href="#c">
              <b>Blog</b>
            </Nav.Link>
          </Nav>

          {user ? (
            <NavDropdown title={user.taiKhoan} id="basic-nav-dropdown">
              <NavDropdown.Item style={{height:"50px"}} href="#action/3.1" className="pe-none">
                <p className="pe-none">loại tài khoản : {user.maLoaiNguoiDung}</p>
              </NavDropdown.Item>
              {user.maLoaiNguoiDung === "QuanTri" ? (
              <NavDropdown.Item style={{height:"50px"}} onClick={()=>{
                 navigate("/admin/movies")
              }} ><p>đến trang admin</p></NavDropdown.Item>
            ) : (
              <></>
            )}
             
              <div className="container">
              <NavDropdown.Divider />
              </div>
              <NavDropdown.Item  href="#/action-3.3">
              <div className="row  align-items-center">
                <div className="col-sm-3">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="login" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"></path></svg>
                </div>
                <div onClick={handleLogout} className=" ps-0 col-sm-9 text-danger">
                  <span>LogOut</span>
                </div>
              </div>
            </NavDropdown.Item>
              
            </NavDropdown>
          ) : (
            <Nav>
              <Nav.Link>
                <button
                  onClick={handleLogin}
                  className=" d-flex align-items-center  bg-transparent border-0"
                >
                  
                    <FaUser />
                  
                  <span className="ms-1"> Đăng nhập</span>
                </button>
              </Nav.Link>
              <Nav.Link>
                <button
                  onClick={handleRegister}
                  className="d-flex align-items-center  text-center bg-transparent border-0"
                >
               
                    <FaUser />
                  
                  <span className="ms-1">Đăng ký</span>
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
