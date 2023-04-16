import React, { useEffect } from "react";
import Header from "../header";
import Home from "../../views/home";
import Provider from "../provider";
import Footer from "../footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Blogs from "../../views/blogs";
import Login from "../login";
import SignUp from "../signup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../utils/store/userSlice";

const Layout = () => {
  //constructor
  const dispatch = useDispatch();

  //constant
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    let isUser = document.cookie.split("=");
    if (isUser[1] === "true") dispatch(setUser(true));
  }, []);

  console.log("Cookie : ", document.cookie);
  return (
    <Provider>
      {isLoggedIn && <Header />}
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/blogs"
          element={isLoggedIn ? <Blogs /> : <Navigate to="/login" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={"/"} /> : <Login />}
        />
      </Routes>
      <Routes>
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      {isLoggedIn && <Footer />}
    </Provider>
  );
};

export default Layout;
