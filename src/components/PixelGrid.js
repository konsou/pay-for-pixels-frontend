import React from 'react'
import PixelRow from './PixelRow'

import './PixelGrid.css'

const PixelGrid = ({ 
    fullPixelData, 
    activePixel,
    setActivePixelFunction, 
    pixelSize 
}) => {
    console.log('in PixelGrid')
    // console.log(`type of setActivePixelFunction: ${typeof(setActivePixelFunction)}`)
    return (
        <table 
            className="pixelGrid"
            >
            <tbody>
                { fullPixelData.map(row => <PixelRow 
                                            key={ row[0].y } 
                                            pixelRowData={ row }
                                            activePixel={ activePixel }
                                            setActivePixelFunction={ setActivePixelFunction } 
                                            pixelSize={ pixelSize }
                                            /> 
                ) }
            </tbody>
        </table>
    )
}
  

export default PixelGrid