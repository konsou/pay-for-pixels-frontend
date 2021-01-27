import React from 'react'
import PixelRow from './PixelRow'

const PixelGrid = ({ fullPixelData, setActivePixelFunction }) => {
    console.log('in PixelGrid')
    console.log(`type of setActivePixelFunction: ${typeof(setActivePixelFunction)}`)
    return (
        <table className="pixelGrid">
            <tbody>
                { fullPixelData.map(row => <PixelRow 
                                            key={ row[0].y } 
                                            pixelRowData={ row }
                                            setActivePixelFunction={ setActivePixelFunction } 
                                            /> 
                ) }
            </tbody>
        </table>
    )
}
  

export default PixelGrid