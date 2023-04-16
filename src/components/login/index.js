import React, { useState } from "react";
import { CustomTextField, LoginContainer, Logo } from "./login-styled";
import { Button, CircularProgress, Typography } from "@mui/material";
import { decryptText, encryptText, handleRequest } from "../../utils/helpers";
import { ToastContainer, toast } from "react-toastify";
import BookLogo from "../../assests/images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/store/userSlice";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //constructor
  const dispatch = useDispatch();

  //state values
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [isError, setIsError] = useState({ name: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  //constants
  const isName = Boolean(userData.name.length);
  const isPassword = Boolean(userData.password.length);

  //functions
  const handleData = (e, type = "name") => {
    let data;
    if (type === "name") {
      data = {
        ...userData,
        name: e.target.value,
      };
    } else {
      data = {
        ...userData,
        password: e.target.value,
      };
    }
    setUserData(data);
  };

  const handleSubmit = async () => {
    if (!isName) setIsError({ ...isError, name: "email should not be empty" });
    else if (!isPassword)
      setIsError({ ...isError, password: "password should not be empty" });
    else {
      setIsLoading(true);
      let data = { ...userData };
      const result = await handleRequest("GET", data.name);
      let decryptedPass = decryptText(result.data.password);
      if (result.data) {
        if (data.password === decryptedPass) {
          document.cookie = "user=true";
          dispatch(setUser(true));
          setIsLoading(false);
        } else {
          setIsLoading(false);
          toast.error("Invalid password!");
        }
      } else {
        setIsLoading(false);
        toast.error("Invalid email or password!");
      }
    }
  };

  return (
    <>
      <LoginContainer>
        <Logo src={BookLogo} alt="logo" />
        <Typography>Login Form</Typography>
        <CustomTextField
          label="email"
          value={userData.name}
          onChange={(e) => handleData(e)}
          helperText={isName && Boolean(userData.name) ? "" : isError.name}
        />
        <CustomTextField
          label="password"
          value={userData.password}
          onChange={(e) => handleData(e, "password")}
          helperText={
            isPassword && Boolean(userData.password) ? "" : isError.password
          }
        />
        <Button
          variant="contained"
          style={{ width: "100px", height: "auto" }}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <CircularProgress
              style={{ width: "20px", height: "auto" }}
              color="inherit"
            />
          ) : (
            "Login"
          )}
        </Button>
        <p>
          New user ? Create account <Link to={"/signup"}>here</Link>{" "}
        </p>
      </LoginContainer>
      <ToastContainer />
    </>
  );
};

export default Login;
