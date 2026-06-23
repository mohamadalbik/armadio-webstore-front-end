import React from 'react'
import './Footer.css'
import logo from '../Assets/logomain.png'
import insta_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo-menu">
                <div className="footer-logo">
                    <img src={logo} alt="" />
                    <p>ARMADIO</p>
                </div>
                <ul className="footer-links">
                    <li>Business</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <img src={insta_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={pinterest_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer