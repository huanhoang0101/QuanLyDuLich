import React, { state } from 'react';
import { Col, Row } from 'react-bootstrap';

const OrderBlock = () => {
  return (
    <div style={{backgroundColor:"burlywood", padding:"20px", marginBottom:"20px"}}>
        <Row style={{marginBottom:"10px"}}>
            <Col xs={8}>
                <span>Tour name</span>
            </Col>
            <Col xs={4} >
                <span style={{float:"right"}}>Status</span>
            </Col>
        </Row>
        <Row style={{marginBottom:"10px"}}>
            <Col xs={3}>
                <strong>Ngày bắt đầu : </strong>
            </Col>
            <Col xs={9}>
                <span>12/11/2023</span>
            </Col>
        </Row>
        <Row style={{marginBottom:"10px"}}>
            <Col xs={3}>
                <strong>Ngày kết thúc : </strong>
            </Col>
            <Col xs={9}>
                <span>12/11/2023</span>
            </Col>
        </Row>
        <Row  style={{marginBottom:"10px"}}>
            <Col xs={4} >
                <strong>Người lớn :</strong>
                <span>12</span>
            </Col>
            <Col xs={4} >
                <strong>Trẻ em : </strong>
                <span>12</span>
            </Col>
            <Col xs={4} >
                <strong>Tổng số người : </strong>
                <span>20</span>
            </Col>
        </Row>
        <Row style={{marginBottom:"10px",marginTop:"20px",marginLeft:"0px", marginRight:'0px', borderTop:"1px solid black"}}>
        </Row>
        <Row style={{marginBottom:"0px",marginTop:"20px"}}>
            <Col xs={7} >
                <h3>Total</h3>
            </Col>
            <Col xs={5} >
                <h3 style={{float:"right"}}>200.000.000 VNĐ</h3>
            </Col>
        </Row>
    </div>
  );

};

export default OrderBlock;
