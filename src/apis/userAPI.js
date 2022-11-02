import axiosClient from "./axiosClient";

const userAPI = {
  getUser: () => {
    return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP09",
      },
    });
  },
};

export default userAPI;
