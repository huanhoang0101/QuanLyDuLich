import React, { state } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const OrderHistoryBlock = (props) => {
    const updateStatus = (id) => {
        
    }
    const setStatus = (status) => {
        if(status == 1){
            return "Pending"
        } else if (status == 2){
            return "Watting Visit"
        } else if ( status == 3){
            return "Processing"
        } else {
            return "Completed"
        }
    }
    const checkUpdate = (status) => {
        console.log(status);
        if(status <= 3){
            return true;
        }
        return false;
    }
    const getDateTime = function(isoTimestamp){
        const date = new Date(isoTimestamp);
    
        const formattedDate = ("0" + date.getUTCDate()).slice(-2) + "/" +
                              ("0" + (date.getUTCMonth() + 1)).slice(-2) + "/" +
                              date.getUTCFullYear() + " "
        return formattedDate;
    
      }
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
  return (
    <div style={{backgroundColor:"burlywood", padding:"20px", marginBottom:"20px"}}>
        <Row>
        <Col xs={8}>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={6}>
                    <span>Tour name</span>
                </Col>
                <Col xs={3} >
                    <span style={{float:"right"}}>
                        {setStatus(props.order.status)}
                    </span>
                </Col>
                {
                    checkUpdate(props.order.status) 
                    ?
                    <Col xs={3} >
                        <Button style={{float:"right"}} variant="success">Update Status</Button>
                    </Col>
                    :
                    <div></div>
                }

            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={3}>
                    <strong>Ngày bắt đầu : </strong>
                </Col>
                <Col xs={9}>
                    <span>{getDateTime(props.order.date_start)}</span>
                </Col>
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={3}>
                    <strong>Ngày kết thúc : </strong>
                </Col>
                <Col xs={9}>
                    <span>{getDateTime(props.order.date_finish)}</span>
                </Col>
            </Row>
            <Row  style={{marginBottom:"10px"}}>
                <Col xs={4} >
                    <strong>Người lớn :  </strong>
                    <span>{props.order.number_adult}</span>
                </Col>
                <Col xs={4} >
                    <strong>Trẻ em :  </strong>
                    <span>{props.order.number_children}</span>
                </Col>
                <Col xs={4} >
                    <strong>Tổng số người :  </strong>
                    <span>{props.order.number_adult + props.order.number_children}</span>
                </Col>
            </Row>
            <Row style={{marginBottom:"10px",marginTop:"20px",marginLeft:"0px", marginRight:'0px', borderTop:"1px solid black"}}>
            </Row>
            <Row style={{marginBottom:"0px",marginTop:"20px"}}>
                <Col xs={7} >
                    <h3>Total</h3>
                </Col>
                <Col xs={5} >
                    <h3 style={{float:"right"}}>{formatCurrency(parseInt(props.order.total_price))}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Payment : <strong>{props.order.payment_method}</strong></span>
                </Col>
            </Row>
        </Col>
        <Col xs={4} style={{borderLeft:"1px solid black"}}>
            <Row style={{textAlign:"center", margin:"10px"}}>
                <span><strong>Customer Email : </strong>{props.order.user.email}</span> 
            </Row>
            <Row style={{textAlign:"center", margin:"10px"}}>
                <span><strong>Customer Name : </strong>{props.order.user.first_name} {props.order.user.last_name}</span> 
            </Row>
            <Row style={{textAlign:"center", margin:"10px"}}>
                <span><strong>Customer ID Card : </strong>{props.order.user.id_card}</span> 
            </Row>
        </Col>
        </Row>

    </div>
  );

};

export default OrderHistoryBlock;
