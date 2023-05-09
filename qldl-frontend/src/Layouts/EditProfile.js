import React, { useContext, useState } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import Menu from '../Components/ProfileMenu';
import Form from 'react-bootstrap/Form';
import slide2 from '../image/slide/slide2.png'
import cookie from "react-cookies";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import API, {authAPI, authAPIPost, endpoints } from "../configs/API"
import { MyUserContext } from "../configs/MyContext";
import Loading from "../Components/Loading"

const EditProfile = () => {
    let currentUser = cookie.load('current-user');
    console.log(currentUser)
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState(currentUser.email)
    const [username, setUsername] = useState(currentUser.username)
    const [firstname, setFirstName] = useState(currentUser.first_name)
    const [lastname, setLastName] = useState(currentUser.last_name)
    const [idCard, setIdCard] = useState(currentUser.id_card)
    const [gender, setGender] = useState(currentUser.gender)
    const [avatar, setAvatar] =  useState(currentUser.image)
    const [image, setImage] =  useState(null)
    const [user, dispatch] = useContext(MyUserContext)
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
              let res = await authAPIPost().put(endpoints['change-infor'], {
                  "first_name": firstname,
                  "last_name": lastname,
                  "username": username,
                  "email" : email,
                  "id_card" : idCard,
                  "gender" : gender,
                  "avatar" : image,
              });
              let user = await authAPI().get(endpoints['current-user'])
              cookie.save('current-user', user.data)    
              setAvatar(user.data.image);
              Swal.fire({
                icon: 'success',
                title: 'Successful',
                text: 'Update password successful',
              })
          } catch (ex) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Somthing went wrong',
            })
          } finally {
                

                setLoading(false)
            }
        }
        setLoading(true)
        process();

    }

    function changeAvt(event) {
        setImage(event.target.files[0])
        setAvatar(URL.createObjectURL(event.target.files[0]))
    }

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
                        <Row>
                            <div style={{width:"170px", margin:"auto"}}>
                                <img className='avatar-profile' src={avatar} width={170} height={170}/>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Change Avatar</Form.Label>
                                    <Form.Control onChange={changeAvt}  type="file" />
                                </Form.Group>
                            </div>
                        </Row>
                        <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                value={firstname}
                                onChange={e => setFirstName(e.target.value)}            
                                type="text" r
                                equired />
                            <Form.Control.Feedback type="invalid">
                                This fields is require.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group style={{height:"80px"}} className="mb-3" controlId="profileForm.lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                value={lastname}
                                onChange={e => setLastName(e.target.value)}            
                                type="text" 
                                required/>
                            <Form.Control.Feedback type="invalid">
                                This fields is require.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="profileForm.gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select value={gender} required onChange={e => setGender(e.target.value)}>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{height:"95px"}} controlId="profileForm.CMND">
                            <Form.Label>CMND</Form.Label>
                            <Form.Control
                                type="number"
                                value={idCard}
                                onChange={e => setIdCard(e.target.value)}
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
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="john.smit@gmail.com"
                                required
                            />
                        </Form.Group>
                        <Form.Group style={{height:"95px"}} controlId="profileForm.Email">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
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

export default EditProfile;
