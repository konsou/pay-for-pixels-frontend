import React from 'react'
import Pixel from './Pixel'

const PixelRow = ({ pixelRowData, setActivePixelFunction, pixelSize }) => {
    return (
        <tr className="pixelRow">
            { pixelRowData.map(pixel => <Pixel 
                                            key={ pixel.x } 
                                            pixelData={pixel}
                                            setActivePixelFunction={ setActivePixelFunction }
                                            pixelSize={ pixelSize }
                                            />) }
        </tr>
    )
}
  

export default PixelRow