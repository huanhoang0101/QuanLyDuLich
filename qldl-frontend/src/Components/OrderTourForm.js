import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Form, Row } from 'react-bootstrap';

function OrderTourForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        console.log(123);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
  return (
    <>
        <Form  noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group style={{height:"95px"}}  controlId="validationAdult">
                    <Form.Label>Số Người Lớn</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="10"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please fill a number.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{height:"95px"}}  controlId="validationChild">
                    <Form.Label>Số Trẻ Em</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="10"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please fill a number.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{height:"95px"}}  controlId="validationDateStart">
                    <Form.Label>Ngày bắt đầu</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="10"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please fill a date.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{height:"95px"}}  controlId="validationDateEnd">
                    <Form.Label>Ngày kết thúc</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="10"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please fill a date.
                    </Form.Control.Feedback>
                </Form.Group>
                <div style={{paddingTop: "10px", paddingBottom:"10px", borderBottom:"1px solid gray", borderTop: "1px solid gray"}}>
                    <h4 style={{textAlign:"center"}}>Tổng Tiền</h4>
                </div>
                <div style={{textAlign:"center", marginLeft:"30px", marginRight:"30px"}}>
                    <Row style={{margin:"10px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>
                        <Col xs={6}>
                            <strong>Người lớn</strong>
                        </Col>
                        <Col xs={6}>
                            <span id="totalPriceAdult"></span>
                        </Col>
                    </Row>
                    <Row style={{margin:"10px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>
                        <Col xs={6}>
                            <strong>Trẻ em</strong>
                        </Col>
                        <Col xs={6}>
                            <span id="totalPriceChild"></span>
                        </Col>
                    </Row>
                    <Row style={{margin:"10px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>
                        <Col xs={6}>
                            <strong>Tổng hóa đơn</strong>
                        </Col>
                        <Col xs={6}>
                            <span id="totalPrice"></span>
                        </Col>
                    </Row>
                    <Row style={{margin:"10px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>
                        <Col xs={6}>
                            <strong>Thanh toán với</strong>
                        </Col>
                        <Col xs={6}>
                            {['radio'].map((type) => (
                                <div key={`payment`} style={{width:"100px", margin:"auto"}}>
                                <Form.Check 
                                    type={type}
                                    name="payment"
                                    id="payment-zalo"
                                    label="Zalo"
                                />
                                <Form.Check
                                    type={type}
                                    name="payment"
                                    id="payment-momo"
                                    label="Momo"
                                />
                                <Form.Check
                                    type={type}
                                    name="payment"
                                    id="payment-bank"
                                    label="Bank"
                                />
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Hủy</Button>
                <Button style={{float:"right"}} variant="dark" type="submit">
                    Thanh Toán Ngay
                </Button>
            </Modal.Footer>
            </Modal>
        </Form>
    </>
  );
}

export default OrderTourForm;