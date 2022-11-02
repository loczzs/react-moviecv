import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../apis/movieAPI";

const initialState = {
  cinemas: [],
  isLoading: false,
  error: "",
  cinema: [
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 16531,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16532,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16533,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16534,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16535,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16536,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16537,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-02T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16538,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-02T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16539,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-02T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16540,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-02T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16541,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-02T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16542,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-02T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16543,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-03T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16544,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-03T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16545,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-03T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16546,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-03T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16547,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-03T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16548,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-03T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16549,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-04T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16550,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-04T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16551,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-04T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16552,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-04T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16553,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-04T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16554,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-04T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16555,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-05T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16556,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-05T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16557,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-05T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16558,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-05T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16559,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-05T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16560,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-05T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16561,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-06T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16562,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-06T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16563,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-06T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16564,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-06T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16565,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-06T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16566,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-06T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16567,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-07T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16568,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-07T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16569,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-07T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16570,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-07T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16571,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-07T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16572,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-07T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16573,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-08T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16574,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-08T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16575,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-08T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16576,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-08T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16577,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-08T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16578,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-08T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16579,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-09T10:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16580,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-09T12:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16581,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-09T14:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16582,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-09T16:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16583,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-09T18:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 16584,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-09T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 42871,
          "maRap": "471",
          "tenRap": "Rạp 1",
          "ngayChieuGioChieu": "2021-04-26T23:53:28",
          "giaVe": 75000
        },
        {
          "maLichChieu": 42872,
          "maRap": "473",
          "tenRap": "Rạp 3",
          "ngayChieuGioChieu": "2021-04-28T23:53:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43598,
          "maRap": "480",
          "tenRap": "Rạp 10",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 1322,
      "tenPhim": "John Wick 2 ",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
      "hot": false,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 40318,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2020-04-10T08:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 40499,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2019-01-01T15:45:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43578,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-09T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43940,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T10:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 1969,
      "tenPhim": "Avatar",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 40377,
          "maRap": "471",
          "tenRap": "Rạp 1",
          "ngayChieuGioChieu": "2020-05-21T01:05:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43310,
          "maRap": "471",
          "tenRap": "Rạp 1",
          "ngayChieuGioChieu": "2019-01-01T00:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43312,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2019-01-01T21:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43313,
          "maRap": "473",
          "tenRap": "Rạp 3",
          "ngayChieuGioChieu": "2019-01-01T21:50:00",
          "giaVe": 100000
        },
        {
          "maLichChieu": 43314,
          "maRap": "474",
          "tenRap": "Rạp 4",
          "ngayChieuGioChieu": "2019-01-01T19:50:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43315,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T22:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43709,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 150000
        }
      ],
      "maPhim": 2850,
      "tenPhim": "Goá Phụ Đen",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
      "hot": true,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 40412,
          "maRap": "471",
          "tenRap": "Rạp 1",
          "ngayChieuGioChieu": "2020-08-02T12:50:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 40426,
          "maRap": "471",
          "tenRap": "Rạp 1",
          "ngayChieuGioChieu": "2020-08-17T07:15:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 40427,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2020-08-17T12:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 40428,
          "maRap": "474",
          "tenRap": "Rạp 4",
          "ngayChieuGioChieu": "2020-08-17T12:30:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43581,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-08T13:30:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 3582,
      "tenPhim": "Downtown Abbey",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 40424,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2020-08-06T09:10:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3594,
      "tenPhim": "Bad boy (2022)",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bad-boy-2022-_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 40439,
          "maRap": "480",
          "tenRap": "Rạp 10",
          "ngayChieuGioChieu": "2020-08-05T10:15:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43583,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-06T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43620,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3634,
      "tenPhim": "Dự Án Siêu Năng Lực (2021)",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/du-an-sieu-nang-luc-2021-_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 40551,
          "maRap": "474",
          "tenRap": "Rạp 4",
          "ngayChieuGioChieu": "2020-10-15T20:00:00",
          "giaVe": 100000
        }
      ],
      "maPhim": 4171,
      "tenPhim": "Holly Slept Over",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/holly-slept-over_gp09.jpg",
      "hot": true,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 41656,
          "maRap": "480",
          "tenRap": "Rạp 10",
          "ngayChieuGioChieu": "2021-01-27T12:25:00",
          "giaVe": 100000
        }
      ],
      "maPhim": 1367,
      "tenPhim": "Cá mập cắn cáp",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ca-map-can-cap_gp01.png",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 42102,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2000-12-13T20:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 42103,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2000-12-12T20:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 1382,
      "tenPhim": "Raya1",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 42107,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2000-12-13T20:00:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43609,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43614,
          "maRap": "476",
          "tenRap": "Rạp 6",
          "ngayChieuGioChieu": "2021-12-21T09:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3414,
      "tenPhim": "Scoob!",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 42128,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2021-03-16T14:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 42140,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-13T01:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 42873,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2021-12-13T06:00:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43540,
          "maRap": "476",
          "tenRap": "Rạp 6",
          "ngayChieuGioChieu": "2021-07-09T08:00:00",
          "giaVe": 100000
        },
        {
          "maLichChieu": 43997,
          "maRap": "471",
          "tenRap": "Rạp 1",
          "ngayChieuGioChieu": "2021-08-05T18:26:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 1337,
      "tenPhim": "Siêu Thú Cuồng Nộ1",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 42272,
          "maRap": "474",
          "tenRap": "Rạp 4",
          "ngayChieuGioChieu": "2020-11-02T15:25:00",
          "giaVe": 100000
        },
        {
          "maLichChieu": 43587,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-02T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43650,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3575,
      "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43075,
          "maRap": "476",
          "tenRap": "Rạp 6",
          "ngayChieuGioChieu": "2020-10-14T19:00:00",
          "giaVe": 120000
        }
      ],
      "maPhim": 6105,
      "tenPhim": "Ối Trời Ơi: Chuyến Phiêu Lưu Đầy 'Thú' Vị",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/oi-troi-oi-chuyen-phieu-luu-day-thu-vi_gp09.jpg",
      "hot": null,
      "dangChieu": null,
      "sapChieu": null
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43156,
          "maRap": "474",
          "tenRap": "Rạp 4",
          "ngayChieuGioChieu": "2019-01-10T10:40:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 1412,
      "tenPhim": "Jurassic World 3: Dominion",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-3-dominion_gp09.png",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43311,
          "maRap": "472",
          "tenRap": "Rạp 2",
          "ngayChieuGioChieu": "2019-01-01T20:10:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43316,
          "maRap": "471",
          "tenRap": "Rạp 1",
          "ngayChieuGioChieu": "2019-01-01T19:10:00",
          "giaVe": 100000
        },
        {
          "maLichChieu": 43317,
          "maRap": "473",
          "tenRap": "Rạp 3",
          "ngayChieuGioChieu": "2019-01-01T20:30:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43318,
          "maRap": "474",
          "tenRap": "Rạp 4",
          "ngayChieuGioChieu": "2019-01-01T21:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43319,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2019-01-01T22:00:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43320,
          "maRap": "476",
          "tenRap": "Rạp 6",
          "ngayChieuGioChieu": "2019-01-01T22:30:00",
          "giaVe": 75000
        },
        {
          "maLichChieu": 43592,
          "maRap": "478",
          "tenRap": "Rạp 8",
          "ngayChieuGioChieu": "2022-02-04T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43680,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 120000
        }
      ],
      "maPhim": 3356,
      "tenPhim": "Fast And Furious 9",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious-9_gp09.jpeg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43576,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-11T13:30:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 1532,
      "tenPhim": "Siêu anh hùng: Hồi Kết",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infiniti_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43577,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-10T13:30:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 1547,
      "tenPhim": "The Scary Stories",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-scary-stories_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43579,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-08T13:30:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 3047,
      "tenPhim": "Nắng 3",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nang-3_gp09.jpeg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43580,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-09T13:30:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 3393,
      "tenPhim": "Sói 100%",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/soi-100-_gp09.jfif",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43582,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-07T13:30:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 3587,
      "tenPhim": "Southpaw",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43584,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-05T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43626,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3057,
      "tenPhim": "Candyman",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/candyman_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43585,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-04T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43632,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 2966,
      "tenPhim": "Bloodshot (C18)",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot-c18-_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43586,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2022-03-03T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43638,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3269,
      "tenPhim": "Tenet",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tenet_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43588,
          "maRap": "476",
          "tenRap": "Rạp 6",
          "ngayChieuGioChieu": "2022-03-02T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43656,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3385,
      "tenPhim": "Kẻ đào tẩu giấc mơ",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-dao-tau-giac-mo_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43589,
          "maRap": "476",
          "tenRap": "Rạp 6",
          "ngayChieuGioChieu": "2022-03-01T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43662,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3408,
      "tenPhim": "Survive The Night",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/survive-the-night_gp09.png",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43590,
          "maRap": "477",
          "tenRap": "Rạp 7",
          "ngayChieuGioChieu": "2022-02-01T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43668,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 3056,
      "tenPhim": "The King's Man",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-king-s-man_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43591,
          "maRap": "478",
          "tenRap": "Rạp 8",
          "ngayChieuGioChieu": "2022-02-01T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43674,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 3351,
      "tenPhim": "King Kong",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/king-kong_gp09.jpg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43593,
          "maRap": "478",
          "tenRap": "Rạp 8",
          "ngayChieuGioChieu": "2022-02-05T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43686,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3362,
      "tenPhim": "Vagabond 2",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vagabond2_gp09.jpeg",
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43594,
          "maRap": "479",
          "tenRap": "Rạp 9",
          "ngayChieuGioChieu": "2022-02-05T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43692,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 90000
        }
      ],
      "maPhim": 3049,
      "tenPhim": "Sát Thủ Vô Cùng Cực",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sat-thu-vo-cung-cuc_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43595,
          "maRap": "479",
          "tenRap": "Rạp 9",
          "ngayChieuGioChieu": "2022-02-06T13:30:00",
          "giaVe": 90000
        },
        {
          "maLichChieu": 43698,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 3340,
      "tenPhim": "Kẻ Trực Đêm II",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-truc-dem-ii_gp09.png",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 43644,
          "maRap": "475",
          "tenRap": "Rạp 5",
          "ngayChieuGioChieu": "2021-12-21T12:00:00",
          "giaVe": 75000
        }
      ],
      "maPhim": 1427,
      "tenPhim": "Fantastic Four 441",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fantastic-four-4_gp09.jpg",
      "hot": false,
      "dangChieu": true,
      "sapChieu": false
    },
    {
      "lstLichChieuTheoPhim": [
        {
          "maLichChieu": 44186,
          "maRap": "474",
          "tenRap": "Rạp 4",
          "ngayChieuGioChieu": "2021-08-26T15:57:00",
          "giaVe": 120000
        }
      ],
      "maPhim": 8071,
      "tenPhim": "Lật Mặt 5: 48H",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-5-48h_gp09.png",
      "hot": null,
      "dangChieu": null,
      "sapChieu": null
    }
  ], 
  addresses:[
    {
      "danhSachPhim": [
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 16531,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16532,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16533,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16534,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16535,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16536,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16537,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16538,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16539,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16540,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16541,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16542,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16543,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16544,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16545,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16546,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16547,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16548,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16549,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16550,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16551,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16552,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16553,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16554,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16555,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16556,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16557,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16558,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16559,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16560,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16561,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16562,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16563,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16564,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16565,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16566,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16567,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16568,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16569,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16570,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16571,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16572,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16573,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16574,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16575,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16576,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16577,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16578,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16579,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16580,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16581,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16582,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16583,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 16584,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42871,
              "maRap": "471",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-26T23:53:28",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42872,
              "maRap": "473",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-04-28T23:53:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43598,
              "maRap": "480",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1322,
          "tenPhim": "John Wick 2 ",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
          "hot": false,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40318,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-04-10T08:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40499,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2019-01-01T15:45:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43578,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-09T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43940,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T10:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1969,
          "tenPhim": "Avatar",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40377,
              "maRap": "471",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-05-21T01:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43310,
              "maRap": "471",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-01-01T00:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43312,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2019-01-01T21:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43313,
              "maRap": "473",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2019-01-01T21:50:00",
              "giaVe": 100000
            },
            {
              "maLichChieu": 43314,
              "maRap": "474",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2019-01-01T19:50:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43315,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T22:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43709,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 150000
            }
          ],
          "maPhim": 2850,
          "tenPhim": "Goá Phụ Đen",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40412,
              "maRap": "471",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-08-02T12:50:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 40426,
              "maRap": "471",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-08-17T07:15:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40427,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-08-17T12:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 40428,
              "maRap": "474",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2020-08-17T12:30:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43581,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-08T13:30:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3582,
          "tenPhim": "Downtown Abbey",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40424,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-08-06T09:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3594,
          "tenPhim": "Bad boy (2022)",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bad-boy-2022-_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40439,
              "maRap": "480",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2020-08-05T10:15:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43583,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-06T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43620,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3634,
          "tenPhim": "Dự Án Siêu Năng Lực (2021)",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/du-an-sieu-nang-luc-2021-_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40551,
              "maRap": "474",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2020-10-15T20:00:00",
              "giaVe": 100000
            }
          ],
          "maPhim": 4171,
          "tenPhim": "Holly Slept Over",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/holly-slept-over_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 41656,
              "maRap": "480",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-01-27T12:25:00",
              "giaVe": 100000
            }
          ],
          "maPhim": 1367,
          "tenPhim": "Cá mập cắn cáp",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ca-map-can-cap_gp01.png",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42102,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2000-12-13T20:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42103,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2000-12-12T20:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1382,
          "tenPhim": "Raya1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42107,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2000-12-13T20:00:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43609,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43614,
              "maRap": "476",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2021-12-21T09:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3414,
          "tenPhim": "Scoob!",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42128,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-03-16T14:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42140,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-13T01:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42873,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-12-13T06:00:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43540,
              "maRap": "476",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2021-07-09T08:00:00",
              "giaVe": 100000
            },
            {
              "maLichChieu": 43997,
              "maRap": "471",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-08-05T18:26:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1337,
          "tenPhim": "Siêu Thú Cuồng Nộ1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42272,
              "maRap": "474",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2020-11-02T15:25:00",
              "giaVe": 100000
            },
            {
              "maLichChieu": 43587,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-02T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43650,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3575,
          "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43075,
              "maRap": "476",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2020-10-14T19:00:00",
              "giaVe": 120000
            }
          ],
          "maPhim": 6105,
          "tenPhim": "Ối Trời Ơi: Chuyến Phiêu Lưu Đầy 'Thú' Vị",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/oi-troi-oi-chuyen-phieu-luu-day-thu-vi_gp09.jpg",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43156,
              "maRap": "474",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2019-01-10T10:40:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1412,
          "tenPhim": "Jurassic World 3: Dominion",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-3-dominion_gp09.png",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43311,
              "maRap": "472",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2019-01-01T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43316,
              "maRap": "471",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-01-01T19:10:00",
              "giaVe": 100000
            },
            {
              "maLichChieu": 43317,
              "maRap": "473",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2019-01-01T20:30:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43318,
              "maRap": "474",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2019-01-01T21:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43319,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T22:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43320,
              "maRap": "476",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2019-01-01T22:30:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43592,
              "maRap": "478",
              "tenRap": "Rạp 8",
              "ngayChieuGioChieu": "2022-02-04T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43680,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 120000
            }
          ],
          "maPhim": 3356,
          "tenPhim": "Fast And Furious 9",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious-9_gp09.jpeg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43576,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-11T13:30:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 1532,
          "tenPhim": "Siêu anh hùng: Hồi Kết",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infiniti_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43577,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-10T13:30:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 1547,
          "tenPhim": "The Scary Stories",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-scary-stories_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43579,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-08T13:30:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3047,
          "tenPhim": "Nắng 3",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nang-3_gp09.jpeg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43580,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-09T13:30:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3393,
          "tenPhim": "Sói 100%",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/soi-100-_gp09.jfif",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43582,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-07T13:30:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3587,
          "tenPhim": "Southpaw",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43584,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-05T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43626,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3057,
          "tenPhim": "Candyman",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/candyman_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43585,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-04T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43632,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 2966,
          "tenPhim": "Bloodshot (C18)",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot-c18-_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43586,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-03-03T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43638,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3269,
          "tenPhim": "Tenet",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tenet_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43588,
              "maRap": "476",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2022-03-02T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43656,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3385,
          "tenPhim": "Kẻ đào tẩu giấc mơ",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-dao-tau-giac-mo_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43589,
              "maRap": "476",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2022-03-01T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43662,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3408,
          "tenPhim": "Survive The Night",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/survive-the-night_gp09.png",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43590,
              "maRap": "477",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2022-02-01T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43668,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3056,
          "tenPhim": "The King's Man",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-king-s-man_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43591,
              "maRap": "478",
              "tenRap": "Rạp 8",
              "ngayChieuGioChieu": "2022-02-01T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43674,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3351,
          "tenPhim": "King Kong",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/king-kong_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43593,
              "maRap": "478",
              "tenRap": "Rạp 8",
              "ngayChieuGioChieu": "2022-02-05T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43686,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3362,
          "tenPhim": "Vagabond 2",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vagabond2_gp09.jpeg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43594,
              "maRap": "479",
              "tenRap": "Rạp 9",
              "ngayChieuGioChieu": "2022-02-05T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43692,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3049,
          "tenPhim": "Sát Thủ Vô Cùng Cực",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sat-thu-vo-cung-cuc_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43595,
              "maRap": "479",
              "tenRap": "Rạp 9",
              "ngayChieuGioChieu": "2022-02-06T13:30:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43698,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3340,
          "tenPhim": "Kẻ Trực Đêm II",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-truc-dem-ii_gp09.png",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43644,
              "maRap": "475",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1427,
          "tenPhim": "Fantastic Four 441",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fantastic-four-4_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 44186,
              "maRap": "474",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2021-08-26T15:57:00",
              "giaVe": 120000
            }
          ],
          "maPhim": 8071,
          "tenPhim": "Lật Mặt 5: 48H",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-5-48h_gp09.png",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        }
      ],
      "maCumRap": "bhd-star-cineplex-pham-hung",
      "tenCumRap": "BHD Star Cineplex - Phạm Hùng",
      "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      "diaChi": "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh"
    },
    {
      "danhSachPhim": [
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 17341,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-01T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17342,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-01T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17343,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-01T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17344,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-01T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17345,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-01T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17346,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-01T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17347,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-02T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17348,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-02T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17349,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-02T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17350,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-02T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17351,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-02T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17352,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-02T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17353,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-03T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17354,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-03T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17355,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-03T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17356,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-03T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17357,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-03T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17358,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-03T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17359,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-04T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17360,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-04T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17361,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-04T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17362,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-04T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17363,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-04T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17364,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-04T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17365,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-05T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17366,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-05T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17367,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-05T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17368,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-05T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17369,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-05T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17370,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-05T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17371,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-06T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17372,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-06T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17373,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-06T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17374,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-06T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17375,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-06T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17376,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-06T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17377,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-07T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17378,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-07T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17379,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-07T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17380,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-07T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17381,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-07T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17382,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-07T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17383,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-08T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17384,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-08T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17385,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-08T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17386,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-08T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17387,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-08T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17388,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-08T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17389,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-09T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17390,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-09T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17391,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-09T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17392,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-09T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17393,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-09T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 17394,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2019-01-09T20:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1337,
          "tenPhim": "Siêu Thú Cuồng Nộ1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40233,
              "maRap": "481",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-12-31T10:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1969,
          "tenPhim": "Avatar",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40383,
              "maRap": "483",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-05-21T03:05:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 2850,
          "tenPhim": "Goá Phụ Đen",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42822,
              "maRap": "487",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2018-04-04T05:04:05",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42823,
              "maRap": "487",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2018-04-05T08:05:06",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42824,
              "maRap": "481",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-21T18:49:57",
              "giaVe": 90000
            },
            {
              "maLichChieu": 42825,
              "maRap": "482",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-04-21T18:49:57",
              "giaVe": 90000
            },
            {
              "maLichChieu": 42826,
              "maRap": "483",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-04-21T18:49:57",
              "giaVe": 90000
            },
            {
              "maLichChieu": 42859,
              "maRap": "481",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-25T09:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42860,
              "maRap": "481",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-01-02T22:45:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43447,
              "maRap": "483",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-07-29T04:35:16",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43599,
              "maRap": "490",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1322,
          "tenPhim": "John Wick 2 ",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
          "hot": false,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42861,
              "maRap": "489",
              "tenRap": "Rạp 9",
              "ngayChieuGioChieu": "2019-01-03T22:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 6224,
          "tenPhim": "Trạng Tí Phiêu Lưu Ký",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/trang-ti-phieu-luu-ky_gp09.jpg",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42863,
              "maRap": "481",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-03-01T14:30:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42864,
              "maRap": "482",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-03-01T15:15:00",
              "giaVe": 100000
            },
            {
              "maLichChieu": 42865,
              "maRap": "483",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-03-01T18:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1457,
          "tenPhim": "Harry Potter",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/aladinvfd_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43477,
              "maRap": "484",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2021-07-23T10:00:09",
              "giaVe": 75000
            }
          ],
          "maPhim": 1472,
          "tenPhim": "The Longest Ride",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-longest-ride_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43990,
              "maRap": "481",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-07T20:30:00",
              "giaVe": 100000
            }
          ],
          "maPhim": 1382,
          "tenPhim": "Raya1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 45189,
              "maRap": "483",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2022-08-07T20:05:40",
              "giaVe": 75000
            }
          ],
          "maPhim": 9514,
          "tenPhim": "Thor And the dark world 2022",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/thor-and-the-dark-world-2022_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        }
      ],
      "maCumRap": "bhd-star-cineplex-vincom-le-van-viet",
      "tenCumRap": "BHD Star Cineplex - Vincom Lê Văn Việt",
      "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      "diaChi": "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9"
    },
    {
      "danhSachPhim": [
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 18151,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18152,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18153,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18154,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18155,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18156,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-01T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18157,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18158,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18159,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18160,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18161,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18162,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-02T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18163,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18164,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18165,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18166,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18167,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18168,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-03T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18169,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18170,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18171,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18172,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18173,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18174,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-04T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18175,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18176,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18177,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18178,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18179,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18180,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-05T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18181,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18182,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18183,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18184,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18185,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18186,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-06T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18187,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18188,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18189,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18190,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18191,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18192,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-07T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18193,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18194,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18195,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18196,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18197,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18198,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-08T20:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18199,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18200,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T12:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18201,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T14:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18202,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T16:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18203,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T18:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 18204,
              "maRap": "505",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2019-01-09T20:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1352,
          "tenPhim": "Bloodshot1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40385,
              "maRap": "502",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-05-21T10:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43559,
              "maRap": "501",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2022-01-21T12:00:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43561,
              "maRap": "503",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2022-02-21T07:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43562,
              "maRap": "504",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2022-02-21T08:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 2850,
          "tenPhim": "Goá Phụ Đen",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40518,
              "maRap": "501",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-01-01T00:00:00",
              "giaVe": 200000
            }
          ],
          "maPhim": 1502,
          "tenPhim": "Clemency",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/clemency_gp09.png",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 45181,
              "maRap": "509",
              "tenRap": "Rạp 9",
              "ngayChieuGioChieu": "2022-08-06T02:56:57",
              "giaVe": 75000
            }
          ],
          "maPhim": 9505,
          "tenPhim": "shadow bone",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/shadow-bone_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        }
      ],
      "maCumRap": "bhd-star-cineplex-vincom-thao-dien",
      "tenCumRap": "BHD Star Cineplex - Vincom Thảo Điền",
      "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      "diaChi": "L5-Megamall, 159 XL Hà Nội, Q.2"
    },
    {
      "danhSachPhim": [
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40229,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-12-31T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40230,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-12-30T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40232,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2019-12-31T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43014,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-03-10T20:45:00",
              "giaVe": 100000
            }
          ],
          "maPhim": 1969,
          "tenPhim": "Avatar",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40231,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2019-07-01T10:10:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40311,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-04-09T20:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40415,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-08-07T17:15:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40506,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-11-22T12:00:00",
              "giaVe": 95000
            },
            {
              "maLichChieu": 40507,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-09-23T23:30:30",
              "giaVe": 95000
            },
            {
              "maLichChieu": 40757,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-10-20T14:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40761,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-11-19T15:15:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40766,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-10-09T15:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40955,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-10-02T18:30:00",
              "giaVe": 100000
            },
            {
              "maLichChieu": 42080,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-03-23T12:32:00",
              "giaVe": 80000
            },
            {
              "maLichChieu": 42081,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-03-10T03:47:00",
              "giaVe": 79000
            },
            {
              "maLichChieu": 42794,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-01T18:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42858,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-25T23:19:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42888,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-03-10T20:50:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42889,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-03-10T21:50:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43323,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-10-31T04:15:00",
              "giaVe": 150000
            },
            {
              "maLichChieu": 43533,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-09T13:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43557,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-10T18:54:00",
              "giaVe": 120000
            },
            {
              "maLichChieu": 43596,
              "maRap": "460",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43989,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-08-07T19:51:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43996,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-08-03T18:19:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 44189,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-08-23T09:53:00",
              "giaVe": 80000
            },
            {
              "maLichChieu": 44190,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-08-12T09:55:00",
              "giaVe": 80000
            },
            {
              "maLichChieu": 44202,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-08-26T09:08:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1322,
          "tenPhim": "John Wick 2 ",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
          "hot": false,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40312,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-04-09T21:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40314,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-04-10T20:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1532,
          "tenPhim": "Siêu anh hùng: Hồi Kết",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infiniti_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40313,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-04-09T22:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1382,
          "tenPhim": "Raya1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40320,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-04-13T10:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1517,
          "tenPhim": "Spectre2",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/spectre_gp09.png",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40324,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-04-14T10:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40326,
              "maRap": "455",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2020-04-16T10:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43984,
              "maRap": "457",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2021-07-08T20:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1412,
          "tenPhim": "Jurassic World 3: Dominion",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-3-dominion_gp09.png",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40331,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-04-21T08:15:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40339,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-05-01T06:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40373,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-05-20T08:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40374,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-05-20T10:08:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40378,
              "maRap": "454",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2020-05-21T02:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40382,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-05-21T09:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 2850,
          "tenPhim": "Goá Phụ Đen",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40334,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-04-29T08:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40335,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-04-30T08:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40345,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-05-11T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1547,
          "tenPhim": "The Scary Stories",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-scary-stories_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40338,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-04-30T12:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 45170,
              "maRap": "460",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2022-08-18T03:30:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 2966,
          "tenPhim": "Bloodshot (C18)",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot-c18-_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40340,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-05-06T12:00:00",
              "giaVe": 76000
            },
            {
              "maLichChieu": 40341,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-05-07T10:50:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43383,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-06-28T06:36:30",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43531,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-08T18:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43532,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-07-09T14:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1352,
          "tenPhim": "Bloodshot1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40342,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-05-07T10:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3049,
          "tenPhim": "Sát Thủ Vô Cùng Cực",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sat-thu-vo-cung-cuc_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40343,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-05-08T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3046,
          "tenPhim": "Vì Anh Vẫn Tin",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vi-anh-van-tin_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40350,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-05-14T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3057,
          "tenPhim": "Candyman",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/candyman_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40351,
              "maRap": "454",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2020-05-18T05:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3056,
          "tenPhim": "The King's Man",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-king-s-man_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40389,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-06-04T08:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3047,
          "tenPhim": "Nắng 3",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nang-3_gp09.jpeg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40414,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-08-05T11:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3587,
          "tenPhim": "Southpaw",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40416,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-08-05T20:30:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3575,
          "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40762,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-11-20T15:15:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 42828,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-21T22:08:47",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43450,
              "maRap": "459",
              "tenRap": "Rạp 9",
              "ngayChieuGioChieu": "2021-08-04T03:20:00",
              "giaVe": 150000
            },
            {
              "maLichChieu": 43747,
              "maRap": "459",
              "tenRap": "Rạp 9",
              "ngayChieuGioChieu": "2020-08-04T13:30:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1367,
          "tenPhim": "Cá mập cắn cáp",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ca-map-can-cap_gp01.png",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 41748,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-02-03T11:02:36",
              "giaVe": 75000
            },
            {
              "maLichChieu": 45163,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2014-08-18T09:30:00",
              "giaVe": 200000
            },
            {
              "maLichChieu": 45168,
              "maRap": "458",
              "tenRap": "Rạp 8",
              "ngayChieuGioChieu": "2022-08-04T09:30:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 45169,
              "maRap": "457",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2022-08-04T08:30:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1442,
          "tenPhim": "Mad Max: Fury Road 2050",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mad-max-fury-road_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42321,
              "maRap": "452",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-01-04T18:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1457,
          "tenPhim": "Harry Potter",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/aladinvfd_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42781,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-03T02:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 5948,
          "tenPhim": "The Adam Family part 2",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-adam-family_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 42874,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-04-28T20:04:01",
              "giaVe": 75000
            }
          ],
          "maPhim": 6237,
          "tenPhim": "Money Heist",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/money-heist_gp09.png",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43093,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-05-05T09:24:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43534,
              "maRap": "453",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-07-08T22:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43975,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-24T10:30:00",
              "giaVe": 150000
            }
          ],
          "maPhim": 1337,
          "tenPhim": "Siêu Thú Cuồng Nộ1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43152,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2022-03-25T13:30:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 6666,
          "tenPhim": "Kiều",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/kieu_gp09.jpg",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43324,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-10-02T02:10:00",
              "giaVe": 150000
            }
          ],
          "maPhim": 6820,
          "tenPhim": "Avengers: End Game",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-end-game_gp09.jpg",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43448,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-02T12:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43454,
              "maRap": "454",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2021-07-03T15:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1397,
          "tenPhim": "Người kiến3",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-kien_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43452,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-07T21:25:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 7048,
          "tenPhim": "Liên Minh Công Lý",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lien-minh-cong-ly_gp09.jpg",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 44181,
              "maRap": "451",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-12-25T16:30:00",
              "giaVe": 150000
            }
          ],
          "maPhim": 3582,
          "tenPhim": "Downtown Abbey",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 44432,
              "maRap": "455",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-11-11T07:30:03",
              "giaVe": 85000
            },
            {
              "maLichChieu": 44433,
              "maRap": "454",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2021-11-11T09:45:31",
              "giaVe": 85000
            }
          ],
          "maPhim": 8385,
          "tenPhim": "Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan: Viên Đạn Đỏ",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/detective-conan-scarlet-bullet-tham-tu-lung-danh-conan-vien-dan-do_gp09.png",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        }
      ],
      "maCumRap": "bhd-star-cineplex-3-2",
      "tenCumRap": "BHD Star Cineplex - 3/2",
      "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10"
    },
    {
      "danhSachPhim": [
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40376,
              "maRap": "462",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-05-21T09:05:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 2850,
          "tenPhim": "Goá Phụ Đen",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40401,
              "maRap": "467",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2020-06-30T09:35:00",
              "giaVe": 95000
            },
            {
              "maLichChieu": 40403,
              "maRap": "463",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-06-30T10:05:00",
              "giaVe": 95000
            }
          ],
          "maPhim": 3268,
          "tenPhim": "Trận chiến Midway",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tran-chien-midway_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40404,
              "maRap": "465",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2020-07-20T08:00:00",
              "giaVe": 95000
            }
          ],
          "maPhim": 3269,
          "tenPhim": "Tenet",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tenet_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40410,
              "maRap": "467",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2020-07-10T12:00:00",
              "giaVe": 95000
            }
          ],
          "maPhim": 3414,
          "tenPhim": "Scoob!",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40417,
              "maRap": "462",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2020-08-05T17:35:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3575,
          "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40515,
              "maRap": "468",
              "tenRap": "Rạp 8",
              "ngayChieuGioChieu": "2019-01-01T09:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40516,
              "maRap": "466",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2019-01-01T09:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 40517,
              "maRap": "466",
              "tenRap": "Rạp 6",
              "ngayChieuGioChieu": "2019-01-01T09:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3051,
          "tenPhim": "Dreamy Eyes",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dreamy-eyes_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40550,
              "maRap": "463",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-10-15T18:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 44391,
              "maRap": "464",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2021-10-31T08:20:00",
              "giaVe": 150000
            }
          ],
          "maPhim": 4171,
          "tenPhim": "Holly Slept Over",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/holly-slept-over_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 41576,
              "maRap": "463",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-12-31T11:11:11",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43426,
              "maRap": "461",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-10T20:00:10",
              "giaVe": 100000
            },
            {
              "maLichChieu": 43597,
              "maRap": "470",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43803,
              "maRap": "462",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2021-07-31T10:07:01",
              "giaVe": 90000
            },
            {
              "maLichChieu": 44198,
              "maRap": "463",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-08-14T06:47:00",
              "giaVe": 80000
            },
            {
              "maLichChieu": 44199,
              "maRap": "463",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-08-15T06:47:00",
              "giaVe": 80000
            }
          ],
          "maPhim": 1322,
          "tenPhim": "John Wick 2 ",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
          "hot": false,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43472,
              "maRap": "461",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2021-07-04T12:00:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 44365,
              "maRap": "465",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-07-09T12:02:00",
              "giaVe": 100000
            }
          ],
          "maPhim": 1397,
          "tenPhim": "Người kiến3",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-kien_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43536,
              "maRap": "463",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-07-10T23:00:00",
              "giaVe": 80000
            },
            {
              "maLichChieu": 43539,
              "maRap": "463",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-07-08T17:00:00",
              "giaVe": 80000
            }
          ],
          "maPhim": 1337,
          "tenPhim": "Siêu Thú Cuồng Nộ1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43807,
              "maRap": "470",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-07-29T17:40:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1352,
          "tenPhim": "Bloodshot1",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 45164,
              "maRap": "467",
              "tenRap": "Rạp 7",
              "ngayChieuGioChieu": "2022-08-20T10:30:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 6104,
          "tenPhim": "Bố Già",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bo-gia_gp09.png",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 45167,
              "maRap": "465",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2022-08-31T08:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 6666,
          "tenPhim": "Kiều",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/kieu_gp09.jpg",
          "hot": null,
          "dangChieu": null,
          "sapChieu": null
        }
      ],
      "maCumRap": "bhd-star-cineplex-bitexco",
      "tenCumRap": "BHD Star Cineplex - Bitexco",
      "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      "diaChi": "L3-Bitexco Icon 68, 2 Hải Triều, Q.1"
    },
    {
      "danhSachPhim": [
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40384,
              "maRap": "494",
              "tenRap": "Rạp 4",
              "ngayChieuGioChieu": "2020-05-21T05:05:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43558,
              "maRap": "500",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 90000
            },
            {
              "maLichChieu": 43560,
              "maRap": "491",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2022-02-21T12:00:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 2850,
          "tenPhim": "Goá Phụ Đen",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40413,
              "maRap": "491",
              "tenRap": "Rạp 1",
              "ngayChieuGioChieu": "2020-08-03T12:52:00",
              "giaVe": 90000
            }
          ],
          "maPhim": 3582,
          "tenPhim": "Downtown Abbey",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 40422,
              "maRap": "493",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2020-08-05T13:10:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3587,
          "tenPhim": "Southpaw",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43083,
              "maRap": "495",
              "tenRap": "Rạp 5",
              "ngayChieuGioChieu": "2021-03-11T22:20:00",
              "giaVe": 75000
            },
            {
              "maLichChieu": 43538,
              "maRap": "493",
              "tenRap": "Rạp 3",
              "ngayChieuGioChieu": "2021-07-08T09:00:00",
              "giaVe": 80000
            },
            {
              "maLichChieu": 43600,
              "maRap": "500",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-12-21T12:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 1322,
          "tenPhim": "John Wick 2 ",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
          "hot": false,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 43615,
              "maRap": "500",
              "tenRap": "Rạp 10",
              "ngayChieuGioChieu": "2021-12-21T09:00:00",
              "giaVe": 75000
            }
          ],
          "maPhim": 3414,
          "tenPhim": "Scoob!",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
          "hot": true,
          "dangChieu": false,
          "sapChieu": true
        },
        {
          "lstLichChieuTheoPhim": [
            {
              "maLichChieu": 45178,
              "maRap": "492",
              "tenRap": "Rạp 2",
              "ngayChieuGioChieu": "2022-08-06T01:46:55",
              "giaVe": 75000
            }
          ],
          "maPhim": 9502,
          "tenPhim": "Arrival X",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/arrival_gp09.jpg",
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        }
      ],
      "maCumRap": "bhd-star-cineplex-vincom-quang-trung",
      "tenCumRap": "BHD Star Cineplex - Vincom Quang Trung",
      "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      "diaChi": "B1-Vincom QT, 190 Quang Trung, Gò Vấp"
    }
  ],
  cart: {
    "lstCumRap": [
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 16531,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16532,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16533,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16534,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16535,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16536,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16537,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16538,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16539,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16540,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16541,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16542,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16543,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16544,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16545,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16546,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16547,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16548,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16549,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16550,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16551,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16552,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16553,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16554,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16555,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16556,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16557,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16558,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16559,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16560,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16561,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16562,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16563,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16564,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16565,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16566,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16567,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16568,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16569,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16570,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16571,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16572,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16573,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16574,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16575,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16576,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16577,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16578,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16579,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16580,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16581,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16582,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16583,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16584,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42871,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-26T23:53:28",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42872,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-04-28T23:53:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43598,
                "maRap": "480",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1322,
            "tenPhim": "John Wick 2 ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40318,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-04-10T08:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40499,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2019-01-01T15:45:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43578,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-09T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43940,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T10:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1969,
            "tenPhim": "Avatar",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40377,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-05-21T01:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43310,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-01-01T00:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43312,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2019-01-01T21:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43313,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T21:50:00",
                "giaVe": 100000
              },
              {
                "maLichChieu": 43314,
                "maRap": "474",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2019-01-01T19:50:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43315,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T22:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43709,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 150000
              }
            ],
            "maPhim": 2850,
            "tenPhim": "Goá Phụ Đen",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40412,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-08-02T12:50:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 40426,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-08-17T07:15:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40427,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-08-17T12:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 40428,
                "maRap": "474",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2020-08-17T12:30:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43581,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-08T13:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3582,
            "tenPhim": "Downtown Abbey",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40424,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-08-06T09:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3594,
            "tenPhim": "Bad boy (2022)",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bad-boy-2022-_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40439,
                "maRap": "480",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2020-08-05T10:15:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43583,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-06T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43620,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3634,
            "tenPhim": "Dự Án Siêu Năng Lực (2021)",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/du-an-sieu-nang-luc-2021-_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40551,
                "maRap": "474",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2020-10-15T20:00:00",
                "giaVe": 100000
              }
            ],
            "maPhim": 4171,
            "tenPhim": "Holly Slept Over",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/holly-slept-over_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 41656,
                "maRap": "480",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-01-27T12:25:00",
                "giaVe": 100000
              }
            ],
            "maPhim": 1367,
            "tenPhim": "Cá mập cắn cáp",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ca-map-can-cap_gp01.png",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42102,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2000-12-13T20:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42103,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2000-12-12T20:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1382,
            "tenPhim": "Raya1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42107,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2000-12-13T20:00:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43609,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43614,
                "maRap": "476",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2021-12-21T09:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3414,
            "tenPhim": "Scoob!",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42128,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-03-16T14:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42140,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-13T01:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42873,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-12-13T06:00:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43540,
                "maRap": "476",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2021-07-09T08:00:00",
                "giaVe": 100000
              },
              {
                "maLichChieu": 43997,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-08-05T18:26:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1337,
            "tenPhim": "Siêu Thú Cuồng Nộ1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42272,
                "maRap": "474",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2020-11-02T15:25:00",
                "giaVe": 100000
              },
              {
                "maLichChieu": 43587,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-02T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43650,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3575,
            "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43075,
                "maRap": "476",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2020-10-14T19:00:00",
                "giaVe": 120000
              }
            ],
            "maPhim": 6105,
            "tenPhim": "Ối Trời Ơi: Chuyến Phiêu Lưu Đầy 'Thú' Vị",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/oi-troi-oi-chuyen-phieu-luu-day-thu-vi_gp09.jpg",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43156,
                "maRap": "474",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2019-01-10T10:40:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1412,
            "tenPhim": "Jurassic World 3: Dominion",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-3-dominion_gp09.png",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43311,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2019-01-01T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43316,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-01-01T19:10:00",
                "giaVe": 100000
              },
              {
                "maLichChieu": 43317,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T20:30:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43318,
                "maRap": "474",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2019-01-01T21:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43319,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T22:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43320,
                "maRap": "476",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2019-01-01T22:30:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43592,
                "maRap": "478",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2022-02-04T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43680,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 120000
              }
            ],
            "maPhim": 3356,
            "tenPhim": "Fast And Furious 9",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious-9_gp09.jpeg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43576,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-11T13:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 1532,
            "tenPhim": "Siêu anh hùng: Hồi Kết",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infiniti_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43577,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-10T13:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 1547,
            "tenPhim": "The Scary Stories",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-scary-stories_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43579,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-08T13:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3047,
            "tenPhim": "Nắng 3",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nang-3_gp09.jpeg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43580,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-09T13:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3393,
            "tenPhim": "Sói 100%",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/soi-100-_gp09.jfif",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43582,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-07T13:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3587,
            "tenPhim": "Southpaw",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43584,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-05T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43626,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3057,
            "tenPhim": "Candyman",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/candyman_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43585,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-04T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43632,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 2966,
            "tenPhim": "Bloodshot (C18)",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot-c18-_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43586,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-03-03T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43638,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3269,
            "tenPhim": "Tenet",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tenet_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43588,
                "maRap": "476",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2022-03-02T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43656,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3385,
            "tenPhim": "Kẻ đào tẩu giấc mơ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-dao-tau-giac-mo_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43589,
                "maRap": "476",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2022-03-01T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43662,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3408,
            "tenPhim": "Survive The Night",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/survive-the-night_gp09.png",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43590,
                "maRap": "477",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2022-02-01T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43668,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3056,
            "tenPhim": "The King's Man",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-king-s-man_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43591,
                "maRap": "478",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2022-02-01T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43674,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3351,
            "tenPhim": "King Kong",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/king-kong_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43593,
                "maRap": "478",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2022-02-05T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43686,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3362,
            "tenPhim": "Vagabond 2",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vagabond2_gp09.jpeg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43594,
                "maRap": "479",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2022-02-05T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43692,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3049,
            "tenPhim": "Sát Thủ Vô Cùng Cực",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sat-thu-vo-cung-cuc_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43595,
                "maRap": "479",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2022-02-06T13:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43698,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3340,
            "tenPhim": "Kẻ Trực Đêm II",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-truc-dem-ii_gp09.png",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43644,
                "maRap": "475",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1427,
            "tenPhim": "Fantastic Four 441",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fantastic-four-4_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 44186,
                "maRap": "474",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2021-08-26T15:57:00",
                "giaVe": 120000
              }
            ],
            "maPhim": 8071,
            "tenPhim": "Lật Mặt 5: 48H",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-5-48h_gp09.png",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          }
        ],
        "maCumRap": "bhd-star-cineplex-pham-hung",
        "tenCumRap": "BHD Star Cineplex - Phạm Hùng",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 17341,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-01T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17342,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-01T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17343,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-01T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17344,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-01T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17345,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-01T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17346,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-01T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17347,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-02T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17348,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-02T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17349,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-02T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17350,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-02T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17351,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-02T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17352,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-02T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17353,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-03T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17354,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-03T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17355,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-03T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17356,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-03T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17357,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-03T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17358,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-03T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17359,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-04T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17360,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-04T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17361,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-04T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17362,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-04T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17363,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-04T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17364,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-04T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17365,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-05T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17366,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-05T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17367,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-05T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17368,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-05T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17369,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-05T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17370,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-05T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17371,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-06T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17372,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-06T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17373,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-06T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17374,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-06T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17375,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-06T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17376,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-06T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17377,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-07T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17378,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-07T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17379,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-07T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17380,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-07T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17381,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-07T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17382,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-07T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17383,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-08T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17384,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-08T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17385,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-08T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17386,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-08T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17387,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-08T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17388,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-08T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17389,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-09T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17390,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-09T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17391,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-09T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17392,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-09T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17393,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-09T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17394,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2019-01-09T20:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1337,
            "tenPhim": "Siêu Thú Cuồng Nộ1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40233,
                "maRap": "481",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-12-31T10:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1969,
            "tenPhim": "Avatar",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40383,
                "maRap": "483",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-05-21T03:05:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 2850,
            "tenPhim": "Goá Phụ Đen",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42822,
                "maRap": "487",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2018-04-04T05:04:05",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42823,
                "maRap": "487",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2018-04-05T08:05:06",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42824,
                "maRap": "481",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-21T18:49:57",
                "giaVe": 90000
              },
              {
                "maLichChieu": 42825,
                "maRap": "482",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-04-21T18:49:57",
                "giaVe": 90000
              },
              {
                "maLichChieu": 42826,
                "maRap": "483",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-04-21T18:49:57",
                "giaVe": 90000
              },
              {
                "maLichChieu": 42859,
                "maRap": "481",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-25T09:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42860,
                "maRap": "481",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-01-02T22:45:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43447,
                "maRap": "483",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-07-29T04:35:16",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43599,
                "maRap": "490",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1322,
            "tenPhim": "John Wick 2 ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42861,
                "maRap": "489",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2019-01-03T22:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 6224,
            "tenPhim": "Trạng Tí Phiêu Lưu Ký",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/trang-ti-phieu-luu-ky_gp09.jpg",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42863,
                "maRap": "481",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-03-01T14:30:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42864,
                "maRap": "482",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-03-01T15:15:00",
                "giaVe": 100000
              },
              {
                "maLichChieu": 42865,
                "maRap": "483",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-03-01T18:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1457,
            "tenPhim": "Harry Potter",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/aladinvfd_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43477,
                "maRap": "484",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2021-07-23T10:00:09",
                "giaVe": 75000
              }
            ],
            "maPhim": 1472,
            "tenPhim": "The Longest Ride",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-longest-ride_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43990,
                "maRap": "481",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-07T20:30:00",
                "giaVe": 100000
              }
            ],
            "maPhim": 1382,
            "tenPhim": "Raya1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45189,
                "maRap": "483",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2022-08-07T20:05:40",
                "giaVe": 75000
              }
            ],
            "maPhim": 9514,
            "tenPhim": "Thor And the dark world 2022",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/thor-and-the-dark-world-2022_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-vincom-le-van-viet",
        "tenCumRap": "BHD Star Cineplex - Vincom Lê Văn Việt",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 18151,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18152,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18153,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18154,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18155,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18156,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-01T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18157,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18158,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18159,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18160,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18161,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18162,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-02T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18163,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18164,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18165,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18166,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18167,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18168,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-03T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18169,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18170,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18171,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18172,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18173,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18174,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-04T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18175,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18176,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18177,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18178,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18179,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18180,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-05T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18181,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18182,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18183,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18184,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18185,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18186,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-06T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18187,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18188,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18189,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18190,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18191,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18192,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-07T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18193,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18194,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18195,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18196,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18197,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18198,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-08T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18199,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18200,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18201,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18202,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18203,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18204,
                "maRap": "505",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2019-01-09T20:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1352,
            "tenPhim": "Bloodshot1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40385,
                "maRap": "502",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-05-21T10:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43559,
                "maRap": "501",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-01-21T12:00:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43561,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2022-02-21T07:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43562,
                "maRap": "504",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2022-02-21T08:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 2850,
            "tenPhim": "Goá Phụ Đen",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40518,
                "maRap": "501",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-01-01T00:00:00",
                "giaVe": 200000
              }
            ],
            "maPhim": 1502,
            "tenPhim": "Clemency",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/clemency_gp09.png",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45181,
                "maRap": "509",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2022-08-06T02:56:57",
                "giaVe": 75000
              }
            ],
            "maPhim": 9505,
            "tenPhim": "shadow bone",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/shadow-bone_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          }
        ],
        "maCumRap": "bhd-star-cineplex-vincom-thao-dien",
        "tenCumRap": "BHD Star Cineplex - Vincom Thảo Điền",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L5-Megamall, 159 XL Hà Nội, Q.2"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40229,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-12-31T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40230,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-12-30T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40232,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2019-12-31T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43014,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-03-10T20:45:00",
                "giaVe": 100000
              }
            ],
            "maPhim": 1969,
            "tenPhim": "Avatar",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40231,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2019-07-01T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40311,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-04-09T20:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40415,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-08-07T17:15:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40506,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-11-22T12:00:00",
                "giaVe": 95000
              },
              {
                "maLichChieu": 40507,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-09-23T23:30:30",
                "giaVe": 95000
              },
              {
                "maLichChieu": 40757,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-10-20T14:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40761,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-11-19T15:15:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40766,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-10-09T15:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40955,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-10-02T18:30:00",
                "giaVe": 100000
              },
              {
                "maLichChieu": 42080,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-03-23T12:32:00",
                "giaVe": 80000
              },
              {
                "maLichChieu": 42081,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-03-10T03:47:00",
                "giaVe": 79000
              },
              {
                "maLichChieu": 42794,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-01T18:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42858,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-25T23:19:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42888,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-03-10T20:50:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42889,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-03-10T21:50:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43323,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-10-31T04:15:00",
                "giaVe": 150000
              },
              {
                "maLichChieu": 43533,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-09T13:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43557,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-10T18:54:00",
                "giaVe": 120000
              },
              {
                "maLichChieu": 43596,
                "maRap": "460",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43989,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-08-07T19:51:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43996,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-08-03T18:19:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 44189,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-08-23T09:53:00",
                "giaVe": 80000
              },
              {
                "maLichChieu": 44190,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-08-12T09:55:00",
                "giaVe": 80000
              },
              {
                "maLichChieu": 44202,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-08-26T09:08:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1322,
            "tenPhim": "John Wick 2 ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40312,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-04-09T21:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40314,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-04-10T20:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1532,
            "tenPhim": "Siêu anh hùng: Hồi Kết",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infiniti_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40313,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-04-09T22:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1382,
            "tenPhim": "Raya1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40320,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-04-13T10:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1517,
            "tenPhim": "Spectre2",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/spectre_gp09.png",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40324,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-04-14T10:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40326,
                "maRap": "455",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2020-04-16T10:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43984,
                "maRap": "457",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2021-07-08T20:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1412,
            "tenPhim": "Jurassic World 3: Dominion",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-3-dominion_gp09.png",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40331,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-04-21T08:15:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40339,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-05-01T06:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40373,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-05-20T08:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40374,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-05-20T10:08:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40378,
                "maRap": "454",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2020-05-21T02:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40382,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-05-21T09:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 2850,
            "tenPhim": "Goá Phụ Đen",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40334,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-04-29T08:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40335,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-04-30T08:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40345,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-05-11T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1547,
            "tenPhim": "The Scary Stories",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-scary-stories_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40338,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-04-30T12:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 45170,
                "maRap": "460",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2022-08-18T03:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 2966,
            "tenPhim": "Bloodshot (C18)",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot-c18-_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40340,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-05-06T12:00:00",
                "giaVe": 76000
              },
              {
                "maLichChieu": 40341,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-05-07T10:50:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43383,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-06-28T06:36:30",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43531,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-08T18:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43532,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-07-09T14:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1352,
            "tenPhim": "Bloodshot1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40342,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-05-07T10:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3049,
            "tenPhim": "Sát Thủ Vô Cùng Cực",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sat-thu-vo-cung-cuc_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40343,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-05-08T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3046,
            "tenPhim": "Vì Anh Vẫn Tin",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vi-anh-van-tin_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40350,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-05-14T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3057,
            "tenPhim": "Candyman",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/candyman_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40351,
                "maRap": "454",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2020-05-18T05:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3056,
            "tenPhim": "The King's Man",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-king-s-man_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40389,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-06-04T08:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3047,
            "tenPhim": "Nắng 3",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nang-3_gp09.jpeg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40414,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-08-05T11:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3587,
            "tenPhim": "Southpaw",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40416,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-08-05T20:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3575,
            "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40762,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-11-20T15:15:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 42828,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-21T22:08:47",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43450,
                "maRap": "459",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2021-08-04T03:20:00",
                "giaVe": 150000
              },
              {
                "maLichChieu": 43747,
                "maRap": "459",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2020-08-04T13:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1367,
            "tenPhim": "Cá mập cắn cáp",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ca-map-can-cap_gp01.png",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 41748,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-02-03T11:02:36",
                "giaVe": 75000
              },
              {
                "maLichChieu": 45163,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2014-08-18T09:30:00",
                "giaVe": 200000
              },
              {
                "maLichChieu": 45168,
                "maRap": "458",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2022-08-04T09:30:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 45169,
                "maRap": "457",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2022-08-04T08:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1442,
            "tenPhim": "Mad Max: Fury Road 2050",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mad-max-fury-road_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42321,
                "maRap": "452",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-01-04T18:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1457,
            "tenPhim": "Harry Potter",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/aladinvfd_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42781,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-03T02:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 5948,
            "tenPhim": "The Adam Family part 2",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-adam-family_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 42874,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-04-28T20:04:01",
                "giaVe": 75000
              }
            ],
            "maPhim": 6237,
            "tenPhim": "Money Heist",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/money-heist_gp09.png",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43093,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-05-05T09:24:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43534,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-07-08T22:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43975,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-24T10:30:00",
                "giaVe": 150000
              }
            ],
            "maPhim": 1337,
            "tenPhim": "Siêu Thú Cuồng Nộ1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43152,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-03-25T13:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 6666,
            "tenPhim": "Kiều",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/kieu_gp09.jpg",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43324,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-10-02T02:10:00",
                "giaVe": 150000
              }
            ],
            "maPhim": 6820,
            "tenPhim": "Avengers: End Game",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-end-game_gp09.jpg",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43448,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-02T12:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43454,
                "maRap": "454",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2021-07-03T15:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1397,
            "tenPhim": "Người kiến3",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-kien_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43452,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-07T21:25:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 7048,
            "tenPhim": "Liên Minh Công Lý",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lien-minh-cong-ly_gp09.jpg",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 44181,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-12-25T16:30:00",
                "giaVe": 150000
              }
            ],
            "maPhim": 3582,
            "tenPhim": "Downtown Abbey",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 44432,
                "maRap": "455",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-11-11T07:30:03",
                "giaVe": 85000
              },
              {
                "maLichChieu": 44433,
                "maRap": "454",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2021-11-11T09:45:31",
                "giaVe": 85000
              }
            ],
            "maPhim": 8385,
            "tenPhim": "Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan: Viên Đạn Đỏ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/detective-conan-scarlet-bullet-tham-tu-lung-danh-conan-vien-dan-do_gp09.png",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-3-2",
        "tenCumRap": "BHD Star Cineplex - 3/2",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40376,
                "maRap": "462",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-05-21T09:05:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 2850,
            "tenPhim": "Goá Phụ Đen",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40401,
                "maRap": "467",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2020-06-30T09:35:00",
                "giaVe": 95000
              },
              {
                "maLichChieu": 40403,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-06-30T10:05:00",
                "giaVe": 95000
              }
            ],
            "maPhim": 3268,
            "tenPhim": "Trận chiến Midway",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tran-chien-midway_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40404,
                "maRap": "465",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2020-07-20T08:00:00",
                "giaVe": 95000
              }
            ],
            "maPhim": 3269,
            "tenPhim": "Tenet",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tenet_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40410,
                "maRap": "467",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2020-07-10T12:00:00",
                "giaVe": 95000
              }
            ],
            "maPhim": 3414,
            "tenPhim": "Scoob!",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40417,
                "maRap": "462",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2020-08-05T17:35:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3575,
            "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40515,
                "maRap": "468",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-01T09:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40516,
                "maRap": "466",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2019-01-01T09:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 40517,
                "maRap": "466",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2019-01-01T09:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3051,
            "tenPhim": "Dreamy Eyes",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dreamy-eyes_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40550,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-10-15T18:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 44391,
                "maRap": "464",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2021-10-31T08:20:00",
                "giaVe": 150000
              }
            ],
            "maPhim": 4171,
            "tenPhim": "Holly Slept Over",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/holly-slept-over_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 41576,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-12-31T11:11:11",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43426,
                "maRap": "461",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-10T20:00:10",
                "giaVe": 100000
              },
              {
                "maLichChieu": 43597,
                "maRap": "470",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43803,
                "maRap": "462",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2021-07-31T10:07:01",
                "giaVe": 90000
              },
              {
                "maLichChieu": 44198,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-08-14T06:47:00",
                "giaVe": 80000
              },
              {
                "maLichChieu": 44199,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-08-15T06:47:00",
                "giaVe": 80000
              }
            ],
            "maPhim": 1322,
            "tenPhim": "John Wick 2 ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43472,
                "maRap": "461",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2021-07-04T12:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 44365,
                "maRap": "465",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-07-09T12:02:00",
                "giaVe": 100000
              }
            ],
            "maPhim": 1397,
            "tenPhim": "Người kiến3",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-kien_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43536,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-07-10T23:00:00",
                "giaVe": 80000
              },
              {
                "maLichChieu": 43539,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-07-08T17:00:00",
                "giaVe": 80000
              }
            ],
            "maPhim": 1337,
            "tenPhim": "Siêu Thú Cuồng Nộ1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43807,
                "maRap": "470",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-07-29T17:40:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1352,
            "tenPhim": "Bloodshot1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45164,
                "maRap": "467",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2022-08-20T10:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 6104,
            "tenPhim": "Bố Già",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bo-gia_gp09.png",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45167,
                "maRap": "465",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-08-31T08:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 6666,
            "tenPhim": "Kiều",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/kieu_gp09.jpg",
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          }
        ],
        "maCumRap": "bhd-star-cineplex-bitexco",
        "tenCumRap": "BHD Star Cineplex - Bitexco",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L3-Bitexco Icon 68, 2 Hải Triều, Q.1"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40384,
                "maRap": "494",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2020-05-21T05:05:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43558,
                "maRap": "500",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 43560,
                "maRap": "491",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-02-21T12:00:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 2850,
            "tenPhim": "Goá Phụ Đen",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40413,
                "maRap": "491",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2020-08-03T12:52:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 3582,
            "tenPhim": "Downtown Abbey",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 40422,
                "maRap": "493",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2020-08-05T13:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3587,
            "tenPhim": "Southpaw",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43083,
                "maRap": "495",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2021-03-11T22:20:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 43538,
                "maRap": "493",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2021-07-08T09:00:00",
                "giaVe": 80000
              },
              {
                "maLichChieu": 43600,
                "maRap": "500",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-12-21T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1322,
            "tenPhim": "John Wick 2 ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 43615,
                "maRap": "500",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2021-12-21T09:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 3414,
            "tenPhim": "Scoob!",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45178,
                "maRap": "492",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2022-08-06T01:46:55",
                "giaVe": 75000
              }
            ],
            "maPhim": 9502,
            "tenPhim": "Arrival X",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/arrival_gp09.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-vincom-quang-trung",
        "tenCumRap": "BHD Star Cineplex - Vincom Quang Trung",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "B1-Vincom QT, 190 Quang Trung, Gò Vấp"
      }
    ],
    "maHeThongRap": "BHDStar",
    "tenHeThongRap": "BHD Star Cineplex",
    "logo": "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    "mahom": "GP09"
  },
  cart2:  {
    "danhSachPhim": [
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 16531,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16532,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16533,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16534,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16535,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16536,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16537,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-02T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16538,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-02T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16539,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-02T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16540,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-02T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16541,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-02T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16542,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-02T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16543,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-03T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16544,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-03T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16545,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-03T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16546,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-03T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16547,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-03T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16548,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-03T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16549,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-04T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16550,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-04T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16551,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-04T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16552,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-04T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16553,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-04T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16554,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-04T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16555,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-05T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16556,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-05T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16557,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-05T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16558,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-05T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16559,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-05T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16560,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-05T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16561,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-06T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16562,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-06T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16563,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-06T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16564,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-06T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16565,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-06T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16566,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-06T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16567,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-07T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16568,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-07T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16569,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-07T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16570,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-07T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16571,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-07T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16572,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-07T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16573,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-08T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16574,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-08T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16575,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-08T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16576,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-08T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16577,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-08T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16578,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-08T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16579,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-09T10:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16580,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-09T12:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16581,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-09T14:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16582,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-09T16:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16583,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-09T18:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 16584,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-09T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 42871,
            "maRap": "471",
            "tenRap": "Rạp 1",
            "ngayChieuGioChieu": "2021-04-26T23:53:28",
            "giaVe": 75000
          },
          {
            "maLichChieu": 42872,
            "maRap": "473",
            "tenRap": "Rạp 3",
            "ngayChieuGioChieu": "2021-04-28T23:53:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43598,
            "maRap": "480",
            "tenRap": "Rạp 10",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 1322,
        "tenPhim": "John Wick 2 ",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/john-wick-2_gp01.jpg",
        "hot": false,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 40318,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2020-04-10T08:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 40499,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2019-01-01T15:45:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43578,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-09T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43940,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T10:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 1969,
        "tenPhim": "Avatar",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 40377,
            "maRap": "471",
            "tenRap": "Rạp 1",
            "ngayChieuGioChieu": "2020-05-21T01:05:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43310,
            "maRap": "471",
            "tenRap": "Rạp 1",
            "ngayChieuGioChieu": "2019-01-01T00:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43312,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2019-01-01T21:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43313,
            "maRap": "473",
            "tenRap": "Rạp 3",
            "ngayChieuGioChieu": "2019-01-01T21:50:00",
            "giaVe": 100000
          },
          {
            "maLichChieu": 43314,
            "maRap": "474",
            "tenRap": "Rạp 4",
            "ngayChieuGioChieu": "2019-01-01T19:50:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43315,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T22:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43709,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 150000
          }
        ],
        "maPhim": 2850,
        "tenPhim": "Goá Phụ Đen",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 40412,
            "maRap": "471",
            "tenRap": "Rạp 1",
            "ngayChieuGioChieu": "2020-08-02T12:50:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 40426,
            "maRap": "471",
            "tenRap": "Rạp 1",
            "ngayChieuGioChieu": "2020-08-17T07:15:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 40427,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2020-08-17T12:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 40428,
            "maRap": "474",
            "tenRap": "Rạp 4",
            "ngayChieuGioChieu": "2020-08-17T12:30:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43581,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-08T13:30:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 3582,
        "tenPhim": "Downtown Abbey",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/downtown-abbey_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 40424,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2020-08-06T09:10:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3594,
        "tenPhim": "Bad boy (2022)",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bad-boy-2022-_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 40439,
            "maRap": "480",
            "tenRap": "Rạp 10",
            "ngayChieuGioChieu": "2020-08-05T10:15:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43583,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-06T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43620,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3634,
        "tenPhim": "Dự Án Siêu Năng Lực (2021)",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/du-an-sieu-nang-luc-2021-_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 40551,
            "maRap": "474",
            "tenRap": "Rạp 4",
            "ngayChieuGioChieu": "2020-10-15T20:00:00",
            "giaVe": 100000
          }
        ],
        "maPhim": 4171,
        "tenPhim": "Holly Slept Over",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/holly-slept-over_gp09.jpg",
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 41656,
            "maRap": "480",
            "tenRap": "Rạp 10",
            "ngayChieuGioChieu": "2021-01-27T12:25:00",
            "giaVe": 100000
          }
        ],
        "maPhim": 1367,
        "tenPhim": "Cá mập cắn cáp",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ca-map-can-cap_gp01.png",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 42102,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2000-12-13T20:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 42103,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2000-12-12T20:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 1382,
        "tenPhim": "Raya1",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 42107,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2000-12-13T20:00:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43609,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43614,
            "maRap": "476",
            "tenRap": "Rạp 6",
            "ngayChieuGioChieu": "2021-12-21T09:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3414,
        "tenPhim": "Scoob!",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 42128,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2021-03-16T14:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 42140,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-13T01:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 42873,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2021-12-13T06:00:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43540,
            "maRap": "476",
            "tenRap": "Rạp 6",
            "ngayChieuGioChieu": "2021-07-09T08:00:00",
            "giaVe": 100000
          },
          {
            "maLichChieu": 43997,
            "maRap": "471",
            "tenRap": "Rạp 1",
            "ngayChieuGioChieu": "2021-08-05T18:26:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 1337,
        "tenPhim": "Siêu Thú Cuồng Nộ1",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-thu-cuong-no1_gp01.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 42272,
            "maRap": "474",
            "tenRap": "Rạp 4",
            "ngayChieuGioChieu": "2020-11-02T15:25:00",
            "giaVe": 100000
          },
          {
            "maLichChieu": 43587,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-02T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43650,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3575,
        "tenPhim": "Tiếng Gọi Nơi Hoang Dã",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tieng-goi-noi-hoang-da_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43075,
            "maRap": "476",
            "tenRap": "Rạp 6",
            "ngayChieuGioChieu": "2020-10-14T19:00:00",
            "giaVe": 120000
          }
        ],
        "maPhim": 6105,
        "tenPhim": "Ối Trời Ơi: Chuyến Phiêu Lưu Đầy 'Thú' Vị",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/oi-troi-oi-chuyen-phieu-luu-day-thu-vi_gp09.jpg",
        "hot": null,
        "dangChieu": null,
        "sapChieu": null
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43156,
            "maRap": "474",
            "tenRap": "Rạp 4",
            "ngayChieuGioChieu": "2019-01-10T10:40:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 1412,
        "tenPhim": "Jurassic World 3: Dominion",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-3-dominion_gp09.png",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43311,
            "maRap": "472",
            "tenRap": "Rạp 2",
            "ngayChieuGioChieu": "2019-01-01T20:10:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43316,
            "maRap": "471",
            "tenRap": "Rạp 1",
            "ngayChieuGioChieu": "2019-01-01T19:10:00",
            "giaVe": 100000
          },
          {
            "maLichChieu": 43317,
            "maRap": "473",
            "tenRap": "Rạp 3",
            "ngayChieuGioChieu": "2019-01-01T20:30:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43318,
            "maRap": "474",
            "tenRap": "Rạp 4",
            "ngayChieuGioChieu": "2019-01-01T21:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43319,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2019-01-01T22:00:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43320,
            "maRap": "476",
            "tenRap": "Rạp 6",
            "ngayChieuGioChieu": "2019-01-01T22:30:00",
            "giaVe": 75000
          },
          {
            "maLichChieu": 43592,
            "maRap": "478",
            "tenRap": "Rạp 8",
            "ngayChieuGioChieu": "2022-02-04T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43680,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 120000
          }
        ],
        "maPhim": 3356,
        "tenPhim": "Fast And Furious 9",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious-9_gp09.jpeg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43576,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-11T13:30:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 1532,
        "tenPhim": "Siêu anh hùng: Hồi Kết",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infiniti_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43577,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-10T13:30:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 1547,
        "tenPhim": "The Scary Stories",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-scary-stories_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43579,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-08T13:30:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 3047,
        "tenPhim": "Nắng 3",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nang-3_gp09.jpeg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43580,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-09T13:30:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 3393,
        "tenPhim": "Sói 100%",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/soi-100-_gp09.jfif",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43582,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-07T13:30:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 3587,
        "tenPhim": "Southpaw",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43584,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-05T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43626,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3057,
        "tenPhim": "Candyman",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/candyman_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43585,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-04T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43632,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 2966,
        "tenPhim": "Bloodshot (C18)",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot-c18-_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43586,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2022-03-03T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43638,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3269,
        "tenPhim": "Tenet",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tenet_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43588,
            "maRap": "476",
            "tenRap": "Rạp 6",
            "ngayChieuGioChieu": "2022-03-02T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43656,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3385,
        "tenPhim": "Kẻ đào tẩu giấc mơ",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-dao-tau-giac-mo_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43589,
            "maRap": "476",
            "tenRap": "Rạp 6",
            "ngayChieuGioChieu": "2022-03-01T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43662,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3408,
        "tenPhim": "Survive The Night",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/survive-the-night_gp09.png",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43590,
            "maRap": "477",
            "tenRap": "Rạp 7",
            "ngayChieuGioChieu": "2022-02-01T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43668,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 3056,
        "tenPhim": "The King's Man",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-king-s-man_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43591,
            "maRap": "478",
            "tenRap": "Rạp 8",
            "ngayChieuGioChieu": "2022-02-01T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43674,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 3351,
        "tenPhim": "King Kong",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/king-kong_gp09.jpg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43593,
            "maRap": "478",
            "tenRap": "Rạp 8",
            "ngayChieuGioChieu": "2022-02-05T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43686,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3362,
        "tenPhim": "Vagabond 2",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vagabond2_gp09.jpeg",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43594,
            "maRap": "479",
            "tenRap": "Rạp 9",
            "ngayChieuGioChieu": "2022-02-05T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43692,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 90000
          }
        ],
        "maPhim": 3049,
        "tenPhim": "Sát Thủ Vô Cùng Cực",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sat-thu-vo-cung-cuc_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43595,
            "maRap": "479",
            "tenRap": "Rạp 9",
            "ngayChieuGioChieu": "2022-02-06T13:30:00",
            "giaVe": 90000
          },
          {
            "maLichChieu": 43698,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 3340,
        "tenPhim": "Kẻ Trực Đêm II",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ke-truc-dem-ii_gp09.png",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 43644,
            "maRap": "475",
            "tenRap": "Rạp 5",
            "ngayChieuGioChieu": "2021-12-21T12:00:00",
            "giaVe": 75000
          }
        ],
        "maPhim": 1427,
        "tenPhim": "Fantastic Four 441",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fantastic-four-4_gp09.jpg",
        "hot": false,
        "dangChieu": true,
        "sapChieu": false
      },
      {
        "lstLichChieuTheoPhim": [
          {
            "maLichChieu": 44186,
            "maRap": "474",
            "tenRap": "Rạp 4",
            "ngayChieuGioChieu": "2021-08-26T15:57:00",
            "giaVe": 120000
          }
        ],
        "maPhim": 8071,
        "tenPhim": "Lật Mặt 5: 48H",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-5-48h_gp09.png",
        "hot": null,
        "dangChieu": null,
        "sapChieu": null
      }
    ],
    "maCumRap": "bhd-star-cineplex-pham-hung",
    "tenCumRap": "BHD Star Cineplex - Phạm Hùng",
    "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    "diaChi": "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh"
  },
  logoz:'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
 
};

// getCinema()

export const getCinema = createAsyncThunk(
  "home/cinema/getcinema",
  async (_, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getCinema();
      // console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

 const cinemaSlice = createSlice({
  name: "home/cinema",
  initialState,
  reducers: {
    showAdress:(state,{payload})=>{
      console.log(payload);
      state.addresses = payload.lstCumRap
      state.cart = payload
      state.cart2 =payload.lstCumRap[0]
      state.cinema = payload.lstCumRap[0].danhSachPhim
      state.logoz = payload.logo
    },
    showcinema:(state,{payload})=>{
      state.cinema = payload.danhSachPhim
      state.cart2 = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCinema.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCinema.fulfilled, (state, { payload }) => {
      state.cinemas = payload;
      state.isLoading = false;
    });
    builder.addCase(getCinema.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export const { showAdress,showcinema } = cinemaSlice.actions;
export default cinemaSlice.reducer;
