import React from "react";
import {
  HeaderAnchorTag,
  HeaderContainer,
  HeaderList,
  HeaderULContainer,
  LogoContainer,
  LogoImage,
} from "./header-styled";
import LOGO from "../../assests/images/logo.png";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/store/userSlice";

const Header = () => {
  //constructor
  const dispatch = useDispatch();

  //functions
  const handleLogout = () => {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    dispatch(setUser(false));
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={LOGO} alt="logo" />
      </LogoContainer>
      <HeaderULContainer>
        <HeaderList>
          <Link to={"/"}>Home</Link>
        </HeaderList>
        <HeaderList>
          <HeaderAnchorTag>About</HeaderAnchorTag>
        </HeaderList>
        <HeaderList>
          <Link to={"/blogs"}>Blogs</Link>
        </HeaderList>
        <HeaderList>
          <HeaderAnchorTag>Services</HeaderAnchorTag>
        </HeaderList>
        <HeaderList onClick={handleLogout}>
          <LogoutIcon />
        </HeaderList>
      </HeaderULContainer>
    </HeaderContainer>
  );
};

export default Header;
