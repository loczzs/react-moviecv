import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from "./style.module.scss"
const News = () => {
    const[news,setNew]=useState([])
    const fetchUsers = async () => {
        try {
          // Call API
          const { data } = await axios.get(
            "https://62a694e897b6156bff7bc30e.mockapi.io/api/News"
          );
          // Thành công => gọi hàm setUsers(data) để gán data từ API cho state users
          setNew(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchUsers();
      }, []);
  return (
   <div className= {scss.bg}>
        <h2>Tin tức - Khuyến mãi</h2>
    <div className="container">
        <div className="row">
            {news?.map((newz)=>{
                return <div style={{height:"232px"}} className={`mt-4 col-sm-3 p-`}>
                    <div className={`${scss.news} rounded-3`} >
                        <div width={"100%"} style={{height:"100%"}}>
                            <img width={"100%"} height={"100%"}   src={newz.title} alt="" />
                        </div>
                        <div className={scss.anitext} >
                            <p>{newz.img}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
   </div>
  )
}

export default News