import { useEffect, useState } from "react";

import Blog from "../blog/Blog";

const Blogs = ({onBookMark,onReadTime}) => {

    const [blogs ,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('dB.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])
  return <div className="md:w-2/3">
    {blogs.map(blog=><Blog onReadTime={onReadTime} onBookMark={onBookMark}  key={blog.id} blog={blog}></Blog>)}
  </div>;
};
export default Blogs;