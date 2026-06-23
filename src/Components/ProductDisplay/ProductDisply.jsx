import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/Star-Icon-final.jpg.png'
import { ShopContext } from '../../Context/ShopContext';
import ReactImageMagnify from 'react-image-magnify';
const ProductDisply = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className="product-display">
            <div className="product-display-left">
                <ReactImageMagnify {...{
                    smallImage: {
                        src: product.image,
                        width: 550,
                        height: 770,
                    },
                    largeImage: {
                        src: product.image,
                        width: 1200,
                        height: 1800,
                    },
                    enlargedImagePosition: "over",
                    hoverDelayInMs: 700
                }
                }
                />
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <h4></h4>
                {/* <div className="product-display-right-star">
                    <img src={star_icon} style={{ height: '20px', widows: '20px' }} alt="" />
                    <p>{product.item_rate}</p>
                </div> */}

                <div className="product-display-right-description">
                    <h4>Product Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit consequuntur,
                        qui dolor minima alias dicta corporis harum labore odio impedit magnam, officiis obcaecati blanditiis minus, aut earum sed sequi?
                    </p>
                </div>
                <div className="product-color">
                    <h3>Colors</h3>
                    <div className="colors">
                        {
                            product.colors.map((color, index) => (
                                <button key={index} style={{ background: color }} />
                            ))
                        }
                    </div>
                </div>
                <div className="product-display-right-size">
                    <h3>Size</h3>
                    <div className="sizes">
                        {
                            product.sizes.map((size, index) => (
                                <button key={index}>
                                    {size}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="add-to-cart-price">
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <div className="product-display-right-new-price">
                        ${product.new_price}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDisply