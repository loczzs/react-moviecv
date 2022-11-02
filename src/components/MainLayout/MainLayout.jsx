import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
// import Carousel from "react-bootstrap/Carousel";
import Header from "../Header";
import Footer from "components/Footer/Footer";


const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header className="bg-white " style={{borderBottom:"1px solid grey"}} >
        <Header />
      </Layout.Header>
      <Layout.Content>
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        {/* <h1>My Footer</h1> */}
        <Footer/>
      </Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
