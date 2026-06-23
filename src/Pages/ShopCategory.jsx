import React, { useEffect, useContext, useState, useMemo } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import Filter from '../Components/Filter/Filter'


export const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    const [filteredProducts, setFilterProducts] = useState([]);

    const [filters, setFilters] = useState({
        size: "",
        color: "",
        brand: "",
        price: [0, 500],
    });


    const filteredProductsMemo = useMemo(() => {
        return all_product.filter((product) => {
            const matchesCategory = props.category === product.category;

            const matchSize = filters.size ? product.sizes.includes(filters.size) : true;

            const matchColor = filters.color ? product.colors.includes(filters.color) : true;

            const matchBrand = filters.brand ? product.brand === filters.brand : true;

            const matchPrice = product.new_price >= filters.price[0] && product.new_price <= filters.price[1];

            return matchSize && matchPrice && matchColor && matchBrand && matchesCategory;
        });
    }, [filters, all_product, props.category])



    useEffect(() => {
        setFilterProducts(filteredProductsMemo);
    }, [filteredProductsMemo]);

    console.log(filters)
    console.log(filteredProducts);

    return (
        <div className="shop-category">
            <img className="shopCategory-banner" src={props.banner} alt="" />
            <div className="shop-category-filter-products">
                <div><Filter filters={filters} setFilters={setFilters} className="filter" /></div>
                <div className="shopCategory-products">
                    {filteredProducts.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image || "default-image.jpg"}
                            new_price={item.new_price} old_price={item.old_price} colors={item.colors}
                            sizes={item.sizes}
                            item_rate={item.item_rate} />

                    })}
                </div>
            </div>
            <div className="shopCategory-loadmore">
                Explore more
            </div>
        </div>
    )
}

export default ShopCategory
