import React, { state } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import Menu from '../Components/ProfileMenu';
import Form from 'react-bootstrap/Form';
import slide2 from '../image/slide/slide2.png'
import OrderBlock from '../Components/OrderBlock';

const OrderHistory = () => {
    
    return (
        <div>
            <Row>
                <Col xs={4}>
                    <Menu/>
                </Col>
                <Col xs={8} style={{marginTop: "20px"}}>
                    <OrderBlock/>
                    <OrderBlock/>
                    <OrderBlock/>
                </Col>
            </Row>
        </div>
    ); 
};

export default OrderHistory;
