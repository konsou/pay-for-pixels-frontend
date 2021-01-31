import React from 'react'

import cartImage from '../images/shopping-cart.svg'
import './ShoppingCartIndicator.css'

const ShoppingCartIndicator = ({ itemsInCart }) => {
    if (itemsInCart > 0) {
        return (
            <div id="shoppingCartIndicator">
                <img src={cartImage} id="shoppingCartIndicatorImage" alt="Shopping Cart"/>
                <div id="shoppingCartIndicatorCount">{ itemsInCart }</div>
            </div>
        )
    } else {
        return null
    }
}
  

export default ShoppingCartIndicator