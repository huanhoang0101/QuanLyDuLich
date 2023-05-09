import React, { useState } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import Menu from '../Components/ProfileMenu';
import Form from 'react-bootstrap/Form';
import slide2 from '../image/slide/slide2.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import API, { authAPIPost, endpoints } from "../configs/API"
import Loading from "../Components/Loading"
const EditPassword = () => {



    const [validated, setValidated] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          setValidated(true);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Some fields went wrong',
          })
          return;
        }
        
        const process = async () => {
          try {
              let res = await authAPIPost().put(endpoints['change-password'], {
                  "old-password": currentPassword,
                  "new-password": newPassword,
                  "confirm-password": confirmPassword,
              });

              Swal.fire({
                icon: 'success',
                title: 'Successful',
                text: 'Update password successful',
              })
              setCurrentPassword('')
              setConfirmPassword('')
              setNewPassword('')
          } catch (ex) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Somthing went wrong',
            })
          }  finally {
            setLoading(false)
            }
        }
        setLoading(true)
        process();
    };

    return (
        <div>
            <Row>
                <Col xs={4}>
                    <Menu/>
                </Col>
                <Col xs={8}>
                    {loading
                        ?
                        <Loading /> 
                        :
                        <Form className='form-register' noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.currentPassword">
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control 
                                    value={currentPassword}  
                                    onChange={e => setCurrentPassword(e.target.value)}
                                    type="password" 
                                    required/>
                                <Form.Control.Feedback type="invalid">
                                    This fields is require.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.password">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control 
                                    value={newPassword}  
                                    onChange={e => setNewPassword(e.target.value)}
                                    type="password" 
                                    required/>                            
                                    <Form.Control.Feedback type="invalid">
                                    This fields is require.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.confirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control 
                                    value={confirmPassword}  
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    type="password" 
                                    required/>                            
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
                    }
                </Col>

            </Row>
        </div>
    );
};

export default EditPassword;
