import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", values);
  },

  register: (values) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", {
      ...values,
      maNhom: "GP09",
    });
  },
};

export default authAPI;
