import React, { useState } from "react";
import "./Filter.css";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const Filter = ({ filters, setFilters }) => {

    const [tempFilters, setTempFilters] = useState({
        size: "",
        color: "",
        brand: "",
        price: [0, 500],
    })

    const [showFilters, setShowFilters] = useState(false);

    const handleSizeChange = (e) => {
        setTempFilters((prev) => ({ ...prev, size: e.target.value }));
    };

    const handleBrandChange = (e) => {
        setTempFilters((prev) => ({ ...prev, brand: e.target.value }));
    };

    const handleColorChange = (color) => {
        setTempFilters((prev) => ({ ...prev, color }));
    };

    const handlePriceChange = (e) => {
        setTempFilters((prev) => ({ ...prev, price: [Number(e.target.value), prev.price[1]] }));
    };

    const handleMaxPriceChange = (e) => {
        setTempFilters((prev) => ({ ...prev, price: [prev.price[0], Number(e.target.value)] }));
    };

    const applyFilter = () => {
        setFilters(tempFilters);
    }

    console.log(tempFilters)

    return (
        <div className="filter-container">
            <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <div className={`filter-section ${showFilters ? "active" : ""}`}>
                {/* Size Filter */}
                <div className="filter-group">
                    <h4>Size</h4>
                    <select onChange={handleSizeChange} value={tempFilters.size}>
                        <option style={{ color: "beige" }} value="">_</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>

                {/* Brand Filter */}
                <div className="filter-group">
                    <h4>Brand</h4>
                    <select onChange={handleBrandChange} value={tempFilters.brand}>
                        <option value="">_</option>
                        <option value="x">Brand X</option>
                        <option value="y">Brand Y</option>
                    </select>
                </div>

                {/* Color Filter - Using Clickable Buttons */}
                <div className="filter-group">
                    <h4>Color</h4>
                    <div className="color-options">
                        {["#121212", "#313131", "#414141", "#000000"].map((color) => (
                            <button
                                key={color}
                                className={`color-swatch ${tempFilters.color === color ? "selected" : ""}`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorChange(color)}
                            ></button>
                        ))}
                    </div>
                </div>

                {/* Price Filter - Using Range Slider */}
                <div className="filter-group priceslider">
                    <h4>Price Range</h4>
                    <p> ${tempFilters.price[0]} </p>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={tempFilters.price[0]}
                        onChange={handlePriceChange}
                    />
                    <p>${tempFilters.price[1]}</p>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={tempFilters.price[1]}
                        onChange={handleMaxPriceChange}
                    />
                </div>
            </div>
            <button onClick={applyFilter} className={`show-rslt-btn ${showFilters ? "active" : ""}`}>
                Show Result
            </button>
        </div>

    );
};

export default Filter;
