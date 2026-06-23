import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumbs/BreadCrumb'
import ProductDisply from '../Components/ProductDisplay/ProductDisply'
import DescribtionBox from '../Components/DescriptionBox/DescribtionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {

    const { all_product } = useContext(ShopContext)
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <BreadCrumb product={product} />
            <ProductDisply product={product} />
            <DescribtionBox product={product} />
            <RelatedProducts />
        </div>
    )
}

export default Product