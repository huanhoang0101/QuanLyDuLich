import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/register.css'

function Register() {
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
    <div className='register-page'>
      <div className='register-block'>
        <Form className='form-register' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group style={{height:"95px"}} controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="john.smit@gmail.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a email.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}} controlId="validationCustomFirstName">
            <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a first name.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}} controlId="validationCustomLastName">
            <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Smith"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a last name.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}} controlId="validationCustomCMND">
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
          <Form.Group className="mb-3" controlId="validationCustomGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select >
              <option>Male</option>
              <option>Female</option>
          </Form.Select>
          </Form.Group>
          <Form.Group style={{height:"95px"}} className="mb-3" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
            <Form.Control.Feedback type="invalid">
              Please fill a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}} className="mb-3" controlId="validationCustomPasswordConfirm">
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control type="password" placeholder="Password Confirm" required/>
            <Form.Control.Feedback type="invalid">
              Please fill a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button style={{float:"right"}} variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;