import React from 'react'
import Pixel from './Pixel'

const PixelRow = ({ 
    pixelRowData, 
    activePixel,
    setActivePixelFunction, 
    pixelSize 
}) => {
    return (
        <tr className="pixelRow">
            { pixelRowData.map(pixel => <Pixel 
                                            key={ pixel.x } 
                                            pixelData={ pixel }
                                            activePixel={ activePixel }
                                            setActivePixelFunction={ setActivePixelFunction }
                                            pixelSize={ pixelSize }
                                            />) }
        </tr>
    )
}
  

export default PixelRow