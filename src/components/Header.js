import React from 'react'

import './Header.css'

const Header = ({ header, text }) => {
    return (
        <div className="header">
            <h1>{ header }</h1>
            <h2>{ text } (<a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noreferrer">more info</a>)</h2>
        </div>
    )
}
  

export default Header