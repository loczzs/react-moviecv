import axiosClient from "./axiosClient";

const movieAPI = {
  getMovies: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP09 ",
      },
    });
  },

  getBanners: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovieDetails: (movieId) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  getCinema: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP09",
      },
    });
  },

  addMovie: (movie) => {
    // Đối với dữ liệu có định dạng đặc biệt như File,...
    // Ta cần phải tạo ra FormData để lưu trữ
    const formData = new FormData();

    // Duyệt qua từng thuộc tính trong object movie và thêm vào formData
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP09");
    return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
  },
  DeleteMovie: (movieId, acces) => {
    console.log(movieId, acces);
    return axiosClient.delete(`QuanLyPhim/XoaPhim`, {
      headers: {
        Authorization: `Bearer ${acces}`,
      },
      params: {
        maPhim: movieId,
      },
    });
  },
  UpdateMovie: (values) => {
    console.log(values);
    const user = JSON.parse(localStorage.getItem("user"));
    const formData = new FormData();
    for (let key in values) {
      if (key !== "hinhAnh") {
        formData.append(key, values[key]);
      } else {
        if (values.hinhAnh !== null) {
          formData.append("File", values.hinhAnh);
        }
      }
    }
    formData.append("maNhom", "GP09");
    // formData.append("maPhim", values.maPhim);

    // formData.append("maPhim", values);
    return axiosClient.post("QuanLyPhim/CapNhatPhimUpload", formData);
  },

  getUser: () => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP09",
      },
    });
  },
  DeleteUser: (userId, acces) => {
    console.log(userId, acces);
    return axiosClient.delete(`QuanLyNguoiDung/XoaNguoiDung`, {
      headers: {
        Authorization: `Bearer ${acces}`,
      },
      params: {
        taiKhoan: userId,
      },
    });
  },
  addUser: (values) => {
    console.log(values);
    const formData = new FormData();

    // Duyệt qua từng thuộc tính trong object movie và thêm vào formData
    for (let key in values) {
      formData.append(key, values[key]);
    }
    formData.append("maNhom", "GP09");
    return axiosClient.post("QuanLyNguoiDung/ThemNguoiDung", {
      ...values,
      maNhom: "GP09",
    });
  },

  getuserDetail: (userId) => {
    // const user = JSON.parse(localStorage.getItem("user"));
    console.log(userId);
    return axiosClient.post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${userId}`);
  },
  updateuser:(values) =>{
    console.log(values)
    return axiosClient.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      ...values,
      maNhom:"GP09"
    });
  },
  getLayGhe:(ticketId) =>{
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe",{
      params: {
        MaLichChieu : ticketId
      }
    })
  },
  DatVe: (data,acces) =>{
    return axiosClient.post("QuanLyDatVe/DatVe",{
      ...data,
      headers:{
        Authorization: `Bearer ${acces}`,
      }
    })
  },
  ShowTime: (values, acces) =>{
    return axiosClient.post("QuanLyDatVe/TaoLichChieu",{
      ...values,
      headers:{
        Authorization: `Bearer ${acces}`,
      },
    })
  },
  getThongTinPhim:(movieId) =>{
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim",{
      params: {
        maPhim : movieId
      }
    })
  },
  // axiosClient.post(url,
  //   {},
  //   {
  //     params: {
  //      taiKhoan: userId
  //     }
  //   })
  
};


export default movieAPI;
