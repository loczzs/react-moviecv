import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import MainLayout from "components/MainLayout";
import AuthLayout from "components/AuthLayout";
import CheckoutRoute from "routes/CheckoutRoute";
import AdminRoute from "routes/AdminRoute";

// import AddUser from "modules/AdminMovie/pages/AddUser";
// import addUser from "modules/AdminMovie/pages/addUser";
// import addUser from "modules/AdminMovie/addUser";
// import addUser from "modules/AdminMovie/addUser";
// Không import trực tiếp các pages, vì nó sẽ được tải tất cả ở lần đầu tiên
// import Home from "modules/Home/pages/Home";
// import Movie from "modules/Movie/pages/Movie";
// import Login from "modules/Authentication/pages/Login";
// import Register from "modules/Authentication/pages/Register";

// Để chỉ cần tải những pages cần thiết ta sử dụng kĩ thuật lazyload
const Home = lazy(() => import("modules/Home/pages/Home"));
const Movie = lazy(() => import("modules/Movie/pages/Movie"));
const Login = lazy(() => import("modules/Authentication/pages/Login"));
const Register = lazy(() => import("modules/Authentication/pages/Register"));

const MovieList = lazy(() => import("modules/AdminMovie/pages/MovieList"));
const AddMovie = lazy(() => import("modules/AdminMovie/pages/AddMovie"));
// const AddMovie = lazy(() => import("modules/AdminMovie/pages/AddMovie"));
const UpdateMovie = lazy(() => import("modules/AdminMovie/pages/UpdateMovie"));
const Times = lazy(() => import("modules/AdminMovie/pages/Times"));
const UpdateUser = lazy(() => import("modules/AdminMovie/pages/UpdateUser"));
const UserList = lazy(() => import("modules/AdminMovie/pages/UserList"));
const AddUser = lazy(()=> import("modules/AdminMovie/pages/AddUser"))
const Ticket = lazy(()=> import("modules/Ticket/Pages/Ticket"))
function App() {
  return (
  
    // Suspense: hiển thị fallback UI (Loading) khi các file JS của một page đang được tải về
    <Suspense 
    
    >
    
      <Routes>
        <Route path="/" element={<AdminRoute />}>
          <Route path="admin/">
            <Route index path="movies" element={<MovieList />} />
            <Route path="movies/addmovie" element={<AddMovie />} />
            <Route
              path="movies/updatemovie/:movieId"
              element={<UpdateMovie />}
            />
            {/* <Route path="movies/time" element={<Times />} /> */}
            <Route path="movies/time" element={<Times />} />
            <Route path="movies/adduser" element={<AddUser/>} />
            <Route path="movies/updateuser/:userId" element={<UpdateUser />} />
            
            <Route path="movies/user" element={<UserList />} />
          </Route>
          {/* AdminUser, AdminShowtimes */}
        </Route>

        {/* Để các routes có cùng chung 1 layout, ta sử dụng kĩ thuật nested route, route parent đi định nghĩa layout component, bên trong route parent sẽ gọi tới cái children routes */}
        <Route path="/" element={<MainLayout />}>
          {/* index: path của child route khớp 100% với path của parent route */}
          <Route index element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route
            path="ticket/:ticketId"
            element={
              <CheckoutRoute>
                {/* <Checkout /> */}
                {<Ticket />}
              </CheckoutRoute>
            }
          />
        </Route>
        

        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
