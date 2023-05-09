import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import API, { authAPI, authAPIPost, endpoints } from "../configs/API"


function OrderTourForm(props) {
    const [validated, setValidated] = useState(false);
    const [childPrice, setChildPrice] = useState(props.tour.children_price);
    const [adultPrice, setAdultPrice] = useState(props.tour.adult_price);
    const [numberChild, setNumberChild] = useState(0);
    const [numberAdult, setNumberAdult] = useState(0);
    const [maxPerson, setMaxPerson] = useState(props.tour.max_person);
    const [totalChildPrice, setTotalChildPrice] = useState(0)
    const [totalAdultPrice, setTotalAdultPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const MySwal = withReactContent(Swal)
    const [loading, setLoading] = useState(false)

    const [paymentMethod, setPaymentMethod] = useState('money')

    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Some fields went wrong',
            })
            setValidated(true);
            return;
        }
        const checkTotalPerson = () => { 
            if(parseInt(numberAdult) < 0 || parseInt(numberChild) < 0)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Person is empty ',
                })
                return true;
            }
            if(parseInt(numberAdult) == 0 && parseInt(numberChild) == 0)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Person is empty ',
                })
                return true;
            }
        }
        const checkMaxPerson = () => {
            console.log(numberAdult + numberChild, maxPerson)
            if((parseInt(numberAdult) + parseInt(numberChild)) > parseInt(maxPerson))
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Max person in tour is ' + maxPerson,
                })
                return true;
            }
        }
        const checkDateStart = () => {
            var currentDate = new Date();
            var date = new Date(Date.parse(dateStart));
            if(date < currentDate)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Date start must after current date',
                })
                return true;
            }
        }
        const checkDate = () => {
            var startDate = new Date(Date.parse(dateStart));
            var endDate = new Date(Date.parse(dateEnd));
            console.log(startDate, endDate)

            if(startDate >= endDate)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Date start must before Date end',
                })
                return true;
            }
        }
        const process = async () => {
            try {
                let e = `${endpoints['tour']}${props.tour.id}/order/`
                let res = await authAPIPost().post(e, {
                    "number_adult" : numberAdult,
                    "number_children" : numberChild,
                    "date_start" : dateStart,
                    "date_finish" : dateEnd,
                    "total_price" : totalPrice,
                    "payment_method" : paymentMethod
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Order Successful...',
                    text: 'We will contact you soon',
                })
            } catch (ex) {
                Swal.fire({
                    icon: 'error',
                    title: 'Order Failure...',
                    text: 'Somthing went wrong',
                })
            } finally {
                setNumberChild(0)
                setNumberAdult(0)
                setDateEnd('')
                setDateStart('')
                setTotalPrice(0)
                setAdultPrice(0)
                setChildPrice(0)
                setTotalAdultPrice(0)
                setTotalChildPrice(0)
                setLoading(false)
            }
          }
        if(checkTotalPerson()){
        return;
        }
        if(checkMaxPerson()){
        return;
        }
        if(checkDateStart()){
        return;
        }
        if(checkDate()){
        return;
        }
        if(setLoading()){
        return;
        }
        process();
    };
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    function changeTotalPrice(a, b){
        setTotalPrice(a+b);
    }
    function changeNumberAdult(value){
        var price = parseInt(value)*parseInt(adultPrice);
        setTotalAdultPrice(price);
        setNumberAdult(value)
        changeTotalPrice(price, totalChildPrice);
    }
    function changeNumberChild(value){
        var price = parseInt(value)*parseInt(childPrice);
        setTotalChildPrice(price);
        setNumberChild(value)
        changeTotalPrice(price, totalAdultPrice);
    }
  return (
    <>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Order Form
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group style={{height:"95px"}}  controlId="validationAdult">
                <Form.Label>Số Người Lớn</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="10"
                    required
                    value={numberAdult}
                    onChange={e => changeNumberAdult(e.target.value)}
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
                    value={numberChild}
                    onChange={e => changeNumberChild(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Please fill a number.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{height:"95px"}}  controlId="validationDateStart">
                <Form.Label>Ngày bắt đầu</Form.Label>
                <Form.Control
                    type="date"
                    required
                    value={dateStart} 
                    onChange={(e) => setDateStart(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Please fill a date.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{height:"95px"}}  controlId="validationDateEnd">
                <Form.Label>Ngày kết thúc</Form.Label>
                <Form.Control
                    type="date"
                    required
                    value={dateEnd} 
                    onChange={(e) => setDateEnd(e.target.value)}
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
                        <span id="totalPriceAdult">{formatCurrency(totalAdultPrice)}</span>
                    </Col>
                </Row>
                <Row style={{margin:"10px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>
                    <Col xs={6}>
                        <strong>Trẻ em</strong>
                    </Col>
                    <Col xs={6}>
                        <span id="totalPriceChild">{formatCurrency(totalChildPrice)}</span>
                    </Col>
                </Row>
                <Row style={{margin:"10px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>
                    <Col xs={6}>
                        <strong>Tổng hóa đơn</strong>
                    </Col>
                    <Col xs={6}>
                        <span id="totalPrice">{formatCurrency(totalPrice)}</span>
                    </Col>
                </Row>
                <Row style={{margin:"10px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>
                    <Col xs={6}>
                        <strong>Thanh toán với</strong>
                    </Col>
                    <Col xs={6}>
                        {['radio'].map((type) => (
                            <div key={`payment`} style={{width:"200px", margin:"auto"}}>
                            <Form.Check 
                                type={type}
                                name="payment"
                                id="payment-zalo"
                                label="Zalo (Disabled)"
                                disabled
                            />
                            <Form.Check
                                type={type}
                                name="payment"
                                id="payment-momo"
                                label="Momo (Disabled)"
                                disabled
                            />
                            <Form.Check
                                type={type}
                                name="payment"
                                id="payment-bank"
                                label="Bank (Disabled)"
                                disabled
                            />
                            <Form.Check
                                type={type}
                                name="payment"
                                id="payment-money"
                                label="Money"
                                checked={paymentMethod === 'money'}
                                onChange={e => setPaymentMethod(e.target.value)}
                                value="money"
                            />
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>
            <div style={{}}>
                <Button onClick={props.onHide}>Hủy</Button>
                <Button style={{float:"right"}} variant="dark" type="submit">
                    Thanh Toán Ngay
                </Button>
            </div>
            </Form>
        </Modal.Body>
        </Modal>
    </>
  );
}

export default OrderTourForm;