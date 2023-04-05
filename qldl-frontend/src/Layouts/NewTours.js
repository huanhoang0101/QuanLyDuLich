import React, { state } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tour from '../Components/TourBlock';
import {
  Link
} from 'react-router-dom';
const NewTours = () => {


  return (
    <>
      <h2 style={{margin:"0px", borderBottom: "1px solid gray", padding: "10px", backgroundColor: "goldenrod"}}>New Tours</h2>
      <Row>
        <Col xs={3}>
          <Tour/>
        </Col>
        <Col xs={3}>
          <Tour/>
        </Col>
        <Col xs={3}>
          <Tour/>
        </Col>
        <Col xs={3}>
          <Tour/>
        </Col>
        <Col xs={3}>
          <Tour/>
        </Col>
        <Col xs={3}>
          <Tour/>
        </Col>
        <Col xs={3}>
          <Tour/>
        </Col>
        <Col xs={3}>
          <Tour/>
        </Col>
      </Row>
      <div style={{width:"100%"}}>
        <div style={{width: "200px", margin: "auto"}}>
          <button className='btn-all-tours'>        <Link style={{color:"white", textDecoration:"none"}} to="/tours">See All Tours</Link></button>
        </div>
      </div>
    </>
  );

};

export default NewTours;
