import React, { useState } from 'react'; 
import '../css/header.css'
import logo from '../image/logo/logo.png'
import {
    Link
} from 'react-router-dom';


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle user login
    const handleLogin = () => {
    setIsLoggedIn(true);
    }

    // Function to handle user logout
    const handleLogout = () => {
    setIsLoggedIn(false);
    }
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
                    <Link style={{color:"rgb(87, 87, 87)", textDecoration:"none"}} to="/blogs">Blogs</Link>
                </p>
            </div>
            <div className="header-menu">
                {isLoggedIn ? (
                    <div className='hadLogin'>
                        <button className='btn-logout' onClick={handleLogout}>Logout</button>
                        <span>User Name</span>
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

export default Header