import React, { state } from 'react';
import Row from 'react-bootstrap/Row';
import BlogBlock from '../Components/BlogBlock';
import {
  Link
} from 'react-router-dom';
const NewBlogs = () => {


  return (
    <>
      <h2 style={{margin:"0px", borderBottom: "1px solid gray", padding: "10px", backgroundColor: "goldenrod"}}>New Blogs</h2>
      <Row style={{margin:"0px"}}>
          <BlogBlock/>
      </Row>
      <Row style={{margin:"0px"}}>
          <BlogBlock/>
      </Row>
      <Row style={{margin:"0px"}}>
          <BlogBlock/>
      </Row>
      <div style={{width:"100%"}}>
        <div style={{width: "200px", margin: "auto"}}>
          <button className='btn-all-blogs'><Link style={{color:"white", textDecoration:"none"}} to="/posts">See All Blogs</Link></button>
        </div>
      </div>
    </>
  );

};

export default NewBlogs;
