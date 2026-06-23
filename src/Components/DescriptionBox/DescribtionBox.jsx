import React from 'react'
import './DescribtionBox.css'
const DescribtionBox = (props) => {

    const product = props

    return (
        <div className="description-box">
            <div className="description-box-navigator">
                <div className="description-box-nav-box">
                    Description
                </div>
                <div className="description-box-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="description-box-description">
                <p>Static description</p>
                <p>Static description</p>
            </div>
        </div>
    )
}

export default DescribtionBox