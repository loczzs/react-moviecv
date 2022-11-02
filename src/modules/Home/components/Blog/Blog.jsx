import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from "./style.module.scss";

const Blog = () => {
  const [blogs, setBlog] = useState([]);
  const fetchUsers = async () => {
    try {
      // Call API
      const { data } = await axios.get(
        "https://62a694e897b6156bff7bc30e.mockapi.io/api/blog"
      );
      // Thành công => gọi hàm setUsers(data) để gán data từ API cho state users
      setBlog(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(blog);
  return (
    <div className={scss.bg}>
      <h2>Blog phim ảnh</h2>
      <h3>Tổng hợp và Review các bộ phim hot, bom tấn, phim chiếu rạp hay mỗi ngày</h3>
      <div className="container">
        <div className="row">
          {blogs?.map((blog) => {
            return (
              <div key={blog.id} className={`${scss.anicol} col-sm-3 mb-4`}>
                <div>
                  <img
                    className="rounded-3"
                    width={"100%"}
                    src={blog.img}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mt-1 mb-1 fw-bold">{blog.title}</p>
                  <span>{blog.chekc} lượt xem</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
