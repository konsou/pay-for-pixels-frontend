import React, { useState } from 'react'

const Pixel = ({ pixelData, setActivePixelFunction, pixelSize}) => {
    const [ borderColor, setBorderColor ] = useState(pixelData.color)
    //console.log('pixel borderColor', borderColor)
    return (
        <td 
            className="pixel" 
            style={{ 
                backgroundColor: pixelData.color,
                width: pixelSize,
                height: pixelSize,
                padding: 0,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: borderColor,
                //borderSpacing: 0,
                }}
            onClick={ () => setActivePixelFunction(pixelData) }
            onMouseEnter={ () => setBorderColor('black') }
            onMouseLeave={ () => setBorderColor(pixelData.color)}
            >
    
        </td>
    )
}
  

export default Pixel