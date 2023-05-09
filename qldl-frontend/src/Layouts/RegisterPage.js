import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/register.css'
import Loading from "../Components/Loading"
import API, { authAPI, endpoints } from "../configs/API"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  useNavigate
} from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [idCard, setIdCard] = useState("")
  const [gender, setGender] = useState(1)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const MySwal = withReactContent(Swal)
  const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', MySwal.stopTimer)
      toast.addEventListener('mouseleave', MySwal.resumeTimer)
    }
  })


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
    console.log(gender)
    const process = async () => {
      try {
          let res = await API.post(endpoints['register'], {
              "username": username,
              "password": password,
              "email" : email,
              "first_name" : firstname,
              "last_name" : lastname,
              "gender" : gender,
              "id_card" : idCard,
              "role" : 2
          })
          MySwal.fire(
            'Success',
            'Resgister Successfully?',
            'success'
          )
          navigate("/login");
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
    // setLoading(true);
    if(password != confirmPassword){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password not match',
      })
    }
    else{
      process();
    }
  };
  return (
    <div className='register-page'>
      <div className='register-block'>
        <Form className='form-register' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group style={{height:"95px"}} controlId="validationCustomUserEmail">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="john.smit@gmail.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a email.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}} controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="johnsmit"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a username.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}} controlId="validationCustomFirstName">
            <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
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
                value={lastname}
                onChange={e => setLastName(e.target.value)}
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
                value={idCard}
                onChange={e => setIdCard(e.target.value)}
                placeholder="CMND"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a CMND.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustomGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select value={gender} required onChange={e => setGender(e.target.value)}>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group style={{height:"85px"}} className="mb-3" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required/>
            <Form.Control.Feedback type="invalid">
              Please fill a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}} className="mb-3" controlId="validationCustomPasswordConfirm">
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Password Confirm" required/>
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