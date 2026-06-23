import React from 'react'
import './Hero.css'
//import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
//import hero_img from '../Assets/hero_image.png'
import winter_icon from '../Assets/2832069.png'
import hero_winter_image from '../Assets/Hero_winter_image.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                {/*h2>NEW ARRIVALS ONLY</h2>*/}
                <div>
                    <p>Winter Arc</p>
                    <div className="hero-hand-icon">
                        <p>Collections</p>
                        <img src={winter_icon} alt="" />
                    </div>
                </div>
                <div className="hero-latest-btn">
                    <div>Winter Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_winter_image} alt="" />
            </div>
        </div>
    )
}

export default Hero