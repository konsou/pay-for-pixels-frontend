import React from 'react'

const SizeAdjuster = ({ pixelSize, setPixelSize }) => {
    return (
        <div className="sizeAdjuster">
            <button onClick={ () => setPixelSize(pixelSize + 1) }>+</button>
            <button onClick={ () => setPixelSize(pixelSize - 1) }>-</button>
        </div>
    )
}
  

export default SizeAdjuster