import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logomain.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

    const [menu, SetMenu] = useState("");
    const { getTotalCartItems } = useContext(ShopContext)
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>ARMADIO</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { SetMenu("shop") }}>
                    <Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { SetMenu("men") }}>
                    <Link style={{ textDecoration: 'none', color: '#626262' }} to='/men'>Men</Link>
                    {menu === "men" ? <hr /> : <></>}
                </li>
                <li onClick={() => { SetMenu("women") }}>
                    <Link style={{ textDecoration: 'none', color: '#626262' }} to='/women'>Women</Link>
                    {menu === "women" ? <hr /> : <></>}
                </li>
                <li onClick={() => { SetMenu("kids") }}>
                    <Link style={{ textDecoration: 'none', color: '#626262' }} to='/kids'>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{ textDecoration: 'none', color: '#626262' }} to='/login'>
                    <button>Login</button>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#626262' }} to='/cart'>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}

export default Navbar