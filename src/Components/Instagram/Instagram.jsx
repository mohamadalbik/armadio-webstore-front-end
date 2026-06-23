import React from 'react'
import './Instagram.css'
import { Link } from 'react-router-dom'
import insta_icon from '../Assets/insta_Icon2.jpeg.png'
import arrow from '../Assets/arrow.png'
const Instagram = () => {
    return (
        <div className="insta">
            <h1>Be The First To Get Our Latest Offers</h1>
            <h3>Follow us on Instagram Now</h3>
            <div className="inst-logo">
                <Link target='_blank' style={{ textDecoration: 'none', color: 'white' }}
                    to='https://www.instagram.com/armadio__clothes?igsh=MXR0cW9kbDhlbzd5eA=='>
                    <img src={insta_icon} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Instagram