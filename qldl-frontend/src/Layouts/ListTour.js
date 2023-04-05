import React, { state } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tour from '../Components/TourBlock';
import Form from 'react-bootstrap/Form';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import PageButton from '../Components/PageButton';

const ListTour = () => {
    const arrPages = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Form style={{marginTop: "20px", marginBottom: "-15px"}}>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="tourName">
                            <Form.Control type="text" placeholder="Enter Tour Name" />
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Select  controlId="tourPrice">
                            <option value="0">All</option>
                            <option value="1">Dưới 5 triệu</option>
                            <option value="2">5 triệu đến 8 triệu</option>
                            <option value="3">Trên 8 triệu</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2}>
                        <Form.Select aria-label="Default select example">
                            <option>All</option>
                            <option value="1">1 - 4 người</option>
                            <option value="2">5 - 9 người</option>
                            <option value="3">10 - 15 người</option>
                            <option value="4">15 - 25 người</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2}>
                        <Form.Select aria-label="Default select example">
                            <option>All</option>
                            <option value="1">2 - 4 ngày</option>
                            <option value="2">5 - 8 ngày</option>
                            <option value="3">9 - 14 ngày</option>
                            <option value="4">15 - 30 ngày</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form>
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
            <div style={{margin: "20px", display:"flex", justifyContent:"space-between"}}>
                <PreviousButton/>
                <div style={{width:"500px", justifyContent:"space-around", display:"flex"}}>
                    {arrPages.map(function(element) {
                        return (
                            <PageButton page={element}/>
                        );
                    })}
                </div>
                <NextButton/>
            </div>
        </>
    );

};

export default ListTour;
