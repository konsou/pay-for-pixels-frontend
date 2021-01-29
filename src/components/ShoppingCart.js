import React from 'react'

import './ShoppingCart.css'

const ShoppingCart = ({ contents }) => {
    console.log('shopping cart - contents', contents)
    return (
        <div 
            className="shoppingCart"
            >
            <h1>Cart</h1>
            { contents.map( item => {
                return (
                    <div 
                        className="shoppingCartItem"
                        key={`${item.x}-${item.y}`}
                        >
                        <div>Pixel {item.x}, {item.y}</div>
                        <div>Owner: {item.owner}</div>
                        <div>Color: {item.color}</div>
                        <div>Note: {item.note}</div>
                        <div>Claim amount: {item.amount}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingCart