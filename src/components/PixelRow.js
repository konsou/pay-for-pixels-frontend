import React from 'react'
import Pixel from './Pixel'

const PixelRow = ({ pixelRowData, setActivePixelFunction }) => {
    return (
        <tr className="pixelRow">
            { pixelRowData.map(pixel => <Pixel 
                                            key={ pixel.x } 
                                            pixelData={pixel}
                                            setActivePixelFunction={ setActivePixelFunction }
                                            />) }
        </tr>
    )
}
  

export default PixelRow