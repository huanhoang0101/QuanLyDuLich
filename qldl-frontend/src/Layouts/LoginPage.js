import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/login.css'
import cookie from 'react-cookies';
import {
  Link, Navigate
} from 'react-router-dom';
import { MyUserContext } from "../configs/MyContext"


function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [err, setErr] = useState()
  const [user, dispatch] = useContext(MyUserContext)
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    const process = async () => {
      try {
          // let res = await API.post(endpoints['login'], {
          //     "username": username,
          //     "password": password,
          //     "client_id": "Vbe8euZZQJoWJ2UzW9wDThg4hJEZHHbhFmnfj7UR",
          //     "client_secret": "cVm4w4hSdy4MtwbP4KuNgXkGPeQJ9yrQdBvXHGR6b3e97F2bYqQ81XJ49FEufzjcw4SKwpuOZQiCLsNelHY1MkuYTGBRcSqtWmSlebSUk27WfyDskCB2VeCQihnEKdZ2",
          //     "grant_type": "password"
          // })

          // cookie.save('access-token', res.data.access_token)
          cookie.save('access-token', 123456)

          let user = "user"
          cookie.save('current-user', user)

          dispatch({
              "type": "login", 
              "payload": user
          })
      } catch (ex) {
          console.error(ex)
          setErr('Username hoặc Password không hợp lệ!')
      } finally {
      }
    }

    if (username === "" || password === "")
        setErr("Phải nhập username và password!")
    else {
        process()
    }
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
                type="email"
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