import React, { useState } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import Menu from '../Components/ProfileMenu';
import Form from 'react-bootstrap/Form';
import slide2 from '../image/slide/slide2.png'

const EditPassword = () => {

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
                        <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.currentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="password" required/>
                            <Form.Control.Feedback type="invalid">
                                This fields is require.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.password">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" required/>
                            <Form.Control.Feedback type="invalid">
                                This fields is require.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required/>
                            <Form.Control.Feedback type="invalid">
                                This fields is require.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Show Password" />
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

export default EditPassword;
