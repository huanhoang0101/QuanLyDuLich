import React, { state } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const DetailTourBlock = (props) => {


  return (
    <>
          <Row style={{borderBottom: "1px solid gray", paddingBottom: "20px", margin:"20px"}}>
            <Col xs={12}>
              <div style={{width:"100%",textAlign:"center"}}>
                <label style={{fontWeight:"600"}}>
                  {props.value}
                </label>
              </div>
            </Col>
          </Row>
    </>
  );

};

export default DetailTourBlock;
