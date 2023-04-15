import React, { state } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../css/profile.css'
import {
    Link
  } from 'react-router-dom';

const Menu = () => {


  return (
    <div className='menu'>
        <Row className='menu-item'>
            <Link style={{color:"black", textDecoration:"none"}} to="/profile">
                <p>
                    Account Information
                </p>
            </Link>
        </Row>
        <Row className='menu-item'>           
            <Link style={{color:"black", textDecoration:"none"}} to="/password"> 
                <p style={{paddingTop:"15px"}}>
                    Password
                </p>
            </Link>
        </Row>
        <Row className='menu-item'>
            <Link style={{color:"black", textDecoration:"none"}} to="/history">
                <p style={{paddingTop:"15px"}}>
                    Order History
                </p>
            </Link>
        </Row>    
    </div>
  );

};

export default Menu;
