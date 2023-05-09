import React, { useContext, useState, useEffect} from 'react';
import '../css/header.css'
import logo from '../image/logo/logo.png'
import {
    Link,
    Navigate,
    useNavigate
} from 'react-router-dom';
import { MyUserContext } from "../configs/MyContext";
import cookie from 'react-cookies';
import Cookies from 'js-cookie';



const Header = () => {
    const navigate = useNavigate();
    const [user, dispatch] = useContext(MyUserContext)
    const [nameValue, setNameValue] = useState('');
    const [role, setRole] = useState(2);
    useEffect(() => {
        const cookie = Cookies.get('current-user')
        if (cookie) {
            const parsedValue = JSON.parse(cookie);
            setNameValue(parsedValue['first_name']  + " " + parsedValue['last_name']);
            setRole(parsedValue['role']);
            
        }
    }, [user]);
      
    
    const logout = () => {
        dispatch({
            "type": "logout"
        })
        navigate("/login");
    }


    if (role < 2){
        return (
            <div className="ct-header">
                <div class="logo">
                    <img src={logo} width="50"/> 
                </div>
                <div className="ct-company-name">
                    <p><Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/">Con Mèo Đen</Link></p>
                </div>
                <div className="header-link">
                    <p className='link-header'>
                        <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/tours">Tours</Link>
                    </p>
                    <p className='link-header'>
                        <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/posts">Blogs</Link>
                    </p>
                    <p className='link-header'>
                        <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/orders">Orders</Link>
                    </p>
                </div>
                <div className="header-menu">
                    {user ? (
                        <div className='hadLogin'>
                            <button className='btn-logout' onClick={logout}>Logout</button>
                                               
                                <span>
                                <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/profile">     
                                    {nameValue}
                                    </Link>
                                </span>
    
    
                            <img src={logo} width="60"></img>
                        </div>
                    ) : (
                        <div className='notLogin'>
                            <button className='btn-login'><Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link></button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    if (role === 2){
        return (
            <div className="ct-header">
                <div class="logo">
                    <img src={logo} width="50"/> 
                </div>
                <div className="ct-company-name">
                    <p><Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/">Con Mèo Đen</Link></p>
                </div>
                <div className="header-link">
                    <p className='link-header'>
                        <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/tours">Tours</Link>
                    </p>
                    <p className='link-header'>
                        <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/posts">Blogs</Link>
                    </p>
                </div>
                <div className="header-menu">
                    {user ? (
                        <div className='hadLogin'>
                            <button className='btn-logout' onClick={logout}>Logout</button>
                                               
                                <span>
                                <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/profile">     
                                    {nameValue}
                                    </Link>
                                </span>
    
    
                            <img src={logo} width="60"></img>
                        </div>
                    ) : (
                        <div className='notLogin'>
                            <button className='btn-login'><Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link></button>
                        </div>
                    )}
                </div>
            </div>
        )
    }

}

export default Header