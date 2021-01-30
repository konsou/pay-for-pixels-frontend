import React, { useState } from 'react'

const Pixel = ({ pixelData, activePixel, setActivePixelFunction, pixelSize}) => {
    const [ borderColor, setBorderColor ] = useState(pixelData.color)

    const isActive = () => {
        return (activePixel !== null && (pixelData.x === activePixel.x && pixelData.y === activePixel.y))
            ? true
            : false
    }

    if (isActive() && borderColor !== '#111') {
        setBorderColor('#111')
    } else {
        //setBorderColor(pixelData.color)
    }

    if (!isActive() && borderColor === '#111') {
        setBorderColor(pixelData.color)
    }

    if (pixelData.x === 0 && pixelData.y === 0){
        console.log('isActive', isActive())
    }
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
            onMouseEnter={ () => {
                if (!isActive()){ setBorderColor('black') }
            }}
            onMouseLeave={ () => { 
                if(!isActive()){ setBorderColor(pixelData.color) }
            }}
            >
    
        </td>
    )
}
  

export default Pixel