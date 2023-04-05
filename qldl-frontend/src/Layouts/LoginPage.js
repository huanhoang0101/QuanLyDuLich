import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/login.css'
import {
  Link
} from 'react-router-dom';

function Login() {
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
    <div className='login-page'>
      <div className='login-block'>
        <Form className='form-login' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group style={{height:"95px"}}  controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Username"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a email.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}}  className="mb-3" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
            <Form.Control.Feedback type="invalid">
              Please fill a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Show Password" />
          </Form.Group>
          <Button style={{float:"right"}} variant="primary" type="submit">
            Login
          </Button>
          <div style={{marginTop:"50px"}}>
            <p>Forgot Password</p>
            <Button  variant="primary" type="button">
              <Link style={{color:"white", textDecoration:"none"}} to="/register">Register</Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;