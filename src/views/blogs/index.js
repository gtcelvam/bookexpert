import React, { useState } from "react";
import { BlogsContainer, BlogsMainWrapper } from "./blogs-styled";
import Blog from "../../components/blog";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import SearchBar from "../../components/search";

const totalBlogs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Blogs = () => {
  //state values
  const [page, setPage] = useState(1);
    const [value, setValue] = useState("");
    const [blog, setBlog] = useState(totalBlogs);
    
 //constant
  const page1 = blog.slice(0,5);
  const page2 = blog.slice(5,blog.length);

    
  //functions
  const handlePage = (e, value) => {
    setPage(value);
  };

  const handleChange = (e) => {
      setValue(e.target.value);
      let data = [...page1, ...page2];
      let result = data.filter(item => item == e.target.value);
      Boolean(e.target.value.length) ? setBlog(result) : setBlog(totalBlogs);
  };

  return (
    <BlogsContainer>
      <Stack width={"100%"} paddingRight={"2rem"} alignItems={"flex-end"}>
        <SearchBar value={value} handleChange={handleChange} />
      </Stack>
      <BlogsMainWrapper>
        {Boolean(blog.length) ?  (page === 1 ? page1 : page2).map((item) => (
          <Blog title={item + 1} />
        )) : <p>No Blogs Found!</p>}
      </BlogsMainWrapper>
      <Stack spacing={2}>
        <Pagination count={2} defaultPage={1} onChange={handlePage} />
      </Stack>
    </BlogsContainer>
  );
};

export default Blogs;
