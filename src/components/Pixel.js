import React from 'react'

const Pixel = ({ pixelData, setActivePixelFunction, pixelSize}) => {
    return (
        <td 
            className="pixel" 
            style={{ 
                backgroundColor: pixelData.color,
                width: pixelSize,
                height: pixelSize
                }}
            onClick={ () => setActivePixelFunction(pixelData) }
            >
    
        </td>
    )
}
  

export default Pixel