import React from 'react'

const Pixel = ({ pixelData, setActivePixelFunction }) => {
    return (
        <td 
            className="pixel" 
            style={{ backgroundColor: pixelData.color }}
            onClick={ () => setActivePixelFunction(pixelData) }
            >
    
        </td>
    )
}
  

export default Pixel