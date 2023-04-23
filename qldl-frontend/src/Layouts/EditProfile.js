import React, { useState } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import Menu from '../Components/ProfileMenu';
import Form from 'react-bootstrap/Form';
import slide2 from '../image/slide/slide2.png'

const EditProfile = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div>
            <Row>
                <Col xs={4}>
                    <Menu/>
                </Col>
                <Col xs={8}>
                    <Form className='form-register' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <div style={{width:"170px", margin:"auto"}}>
                                <img className='avatar-profile' src={slide2} width={170} height={170}/>
                                <Button variant="dark" className='btn-avatar' >Change Avatar</Button>
                            </div>
                        </Row>
                        <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid">
                                This fields is require.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid">
                                This fields is require.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="profileForm.gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select >
                            <option>Male</option>
                            <option>Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{height:"95px"}} controlId="profileForm.CMND">
                            <Form.Label>CMND</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="CMND"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill a CMND.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group style={{height:"95px"}} controlId="profileForm.Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                placeholder="john.smit@gmail.com"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill a email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button style={{float:"right"}} variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default EditProfile;
