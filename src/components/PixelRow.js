import React from 'react'
import Pixel from './Pixel'

const PixelRow = ({ pixelRowData }) => {
    return (
        <tr className="pixelRow">
            { pixelRowData.map(pixel => <Pixel key={ pixel.x } pixelData={pixel}/>) }
        </tr>
    )
}
  

export default PixelRow