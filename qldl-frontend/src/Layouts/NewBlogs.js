import React, { state } from 'react';
import Row from 'react-bootstrap/Row';
import BlogBlock from '../Components/BlogBlock';

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
          <button className='btn-all-blogs'>See All Blogs</button>
        </div>
      </div>
    </>
  );

};

export default NewBlogs;
