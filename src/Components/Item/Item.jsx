import React from 'react'
import './Item.css'
import star_icon from '../Assets/Star-Icon-final.jpg.png'
import { Link } from 'react-router-dom'
const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            <div className="name-price">
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-new">
                        ${props.new_price}
                    </div>
                    <div className="item-price-old">
                        ${props.old_price}
                    </div>
                </div>
            </div>
            <div className="item-color-size">
                <div className="item-color">
                    {props.colors.map((color, index) => (
                        <button key={index} style={{ backgroundColor: color }} />
                    ))
                    }
                </div>
                <div className="item-size">
                    {
                        props.sizes.map((size, index) => (
                            <button key={index}>
                                {size}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="item-rate">
                {props.item_rate}
                <img src={star_icon} style={{ background: 'white' }} alt="" />
            </div>
        </div>
    )
}

export default Item