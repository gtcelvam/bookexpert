import React, { useState } from "react";
import { CustomTextField, SignUpContainer, Logo } from "./signup-styled";
import { Button, Typography } from "@mui/material";
import { encryptText, handleRequest } from "../../utils/helpers";
import BookLogo from "../../assests/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  //constructor
  const navigate = useNavigate();

  //state values
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [isError, setIsError] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //constants
  const isName = Boolean(userData.name.length);
  const isEmail = Boolean(userData.email.length);
  const isPassword = Boolean(userData.password.length);
  const isConfirm = Boolean(userData.confirm.length);

  //functions
  const handleData = (e, type = "name") => {
    let data;
    if (type === "name") {
      data = {
        ...userData,
        name: e.target.value,
      };
    } else if (type === "email") {
      data = {
        ...userData,
        email: e.target.value,
      };
    } else if (type === "password") {
      data = {
        ...userData,
        password: e.target.value,
      };
    } else {
      data = {
        ...userData,
        confirm: e.target.value,
      };
    }
    setUserData(data);
  };

  const handleSubmit = async () => {
    if (!isName)
      setIsError({ ...isError, name: "username should not be empty" });
    else if (!isEmail)
      setIsError({ ...isError, email: "Email should not be empty" });
    else if (!isPassword)
      setIsError({ ...isError, password: "password should not be empty" });
    else if (userData.password !== userData.confirm)
      setIsError({ ...isError, confirm: "password is not matching" });
    else {
      let data = { ...userData };
      data.password = encryptText(userData.password);
      data.confirm = data.password;
      let result = await handleRequest("POST", data);
      if (result.data) navigate("/login");
    }
  };

  return (
    <SignUpContainer>
      <Logo src={BookLogo} alt="logo" />
      <Typography>SignUp Form</Typography>
      <CustomTextField
        label="username"
        value={userData.name}
        onChange={(e) => handleData(e)}
        helperText={isName && Boolean(userData.name) ? "" : isError.name}
      />
      <CustomTextField
        label="email"
        value={userData.email}
        onChange={(e) => handleData(e, "email")}
        helperText={isEmail && Boolean(userData.name) ? "" : isError.email}
      />
      <CustomTextField
        label="password"
        value={userData.password}
        onChange={(e) => handleData(e, "password")}
        helperText={
          isPassword && Boolean(userData.password) ? "" : isError.password
        }
      />
      <CustomTextField
        label="confirm password"
        value={userData.confirm}
        onChange={(e) => handleData(e, "confirm")}
        helperText={
          userData.password === userData.confirm &&
          Boolean(userData.confirm.length)
            ? ""
            : isError.confirm
        }
      />
      <Button variant="contained" onClick={handleSubmit}>
        SignUp
      </Button>
      <p>
        Already have an account ? <Link to={"/login"}>Login</Link>{" "}
      </p>
    </SignUpContainer>
  );
};

export default SignUp;
