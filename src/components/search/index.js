import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { CustomSearchBar } from "./search-styled";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
const SearchBar = ({ value, handleChange }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
      <CustomSearchBar
        id="outlined-adornment-password"
        type="text"
        value={value}
        endAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="toggle password visibility" edge="end">
              {<SearchIcon />}
            </IconButton>
          </InputAdornment>
        }
        label="Search"
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default SearchBar;
