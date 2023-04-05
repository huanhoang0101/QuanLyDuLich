import React from 'react';
import '../css/footer.css'
import logo from '../image/logo/logo.png'

const Footer = () => {
    return (
        <div className=" ct-footer">
            <div className='footer-name-logo'>
                <p className='footer-title'>Con mèo đen</p>
                <div className='footer-logo'>
                <img src={logo} width="75"/> 
                </div>
            </div>
            <div className='contact-copyright'>
                <div className='copyright'>
                    <span><i class="fa fa-copyright"></i> 2023</span>
                    <span style={{marginLeft:"30px"}}>Thành Phố Hồ Chí Minh</span>
                </div>
                <div>
                    <p>Contact</p>
                    <div className='contact'>
                        <div>
                            <i class="fa fa-facebook-official facebook-1"></i>
                        </div>
                        <div>
                            <i class="fa fa-facebook-official facebook-2"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='email-phone'>
                <div className='email'>
                    <div style={{marginRight:"27px"}}>
                        <span>Email:</span>
                    </div>
                    <div >
                        <span style={{display:'block', marginBottom:"10px"}} >1951010024hung@ou.edu.vn</span>
                        <span>1951010024hung@ou.edu.vn</span>
                    </div>
                </div>
                <div className='phone'>
                    <div style={{marginRight:"20px"}}>
                        <span>Phone:</span>
                    </div>
                    <div >
                        <span style={{display:'block', marginBottom:"10px"}} >1951010024</span>
                        <span>1951010024</span>
                    </div>
                </div>
            </div>
            <div className='certification'>
                <div style={{height:"50%"}}>
                    <i class='fas fa-plane plane'></i>
                </div>
                <div>
                    <i class='fas fa-shuttle-van bus'></i>
                </div>
            </div>
        </div>
    )
}

export default Footer