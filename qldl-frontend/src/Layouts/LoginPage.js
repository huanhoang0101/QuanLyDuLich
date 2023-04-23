import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/login.css'
import cookie from 'react-cookies';
import API, { authAPI, endpoints } from "../configs/API"
import {
  Link, Navigate
} from 'react-router-dom';
import { MyUserContext } from "../configs/MyContext"
import Loading from "../Components/Loading"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [user, dispatch] = useContext(MyUserContext)
  const [validated, setValidated] = useState(false);
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
      return;
    }
    
    const process = async () => {
      try {
          let res = await API.post(endpoints['login'], {
              "username": username,
              "password": password,
              "client_id": "nyjfbR3VQ2eUamolYqDG0v0J2ET0zmltCBDvJTd5",
              "client_secret": "Qf5MhTbIAE2EaIWp8MX3vMOnW8qWlJokl854PRRQBHcY8Gwo2Gar04zknhWescNN6To9niXRiSDX9gcqmxhQNtjFBn83f59Q0f44ylEuyBqFu0SYlkoIxE1v0hvldJhO",
              "grant_type": "password"
          })

          cookie.save('access-token', res.data.access_token)

          let user = await authAPI().get(endpoints['current-user'])
          cookie.save('current-user', user.data)

          dispatch({
              "type": "login", 
              "payload": user.data
          })
      } catch (ex) {
          console.error(ex)
      } finally {
          setLoading(false)
      }
    }
    setLoading(true);
    process();
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  };
  if (user !== null)
    return <Navigate to="/" />

  return (
    <div className='login-page'>
      <div className='login-block'>
        <Form className='form-login' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group style={{height:"95px"}}  controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please fill a email.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{height:"95px"}}  className="mb-3" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password" 
              required/>
            <Form.Control.Feedback type="invalid">
              Please fill a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Show Password" />
          </Form.Group>
          {loading
          ?
          <Loading /> 
          :
          <Button style={{float:"right"}} variant="primary" type="submit">
            Login
          </Button>}
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