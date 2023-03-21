// import { Alert, Spin } from 'antd';
import { Space, Spin } from "antd";
import React from "react";
import scss from "./modules/Home/components/Banner/style.module.scss";

const Spiner = () => (
  <div className={scss.example}>
    <Spin size="large" />
  </div>
);
export default Spiner;
