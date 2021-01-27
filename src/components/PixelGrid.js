import React from 'react'
import PixelRow from './PixelRow'

const PixelGrid = ({ fullPixelData }) => {
    return (
        <table className="pixelGrid">
            <tbody>
                { fullPixelData.map(row => <PixelRow key={ row[0].y } pixelRowData={ row } /> ) }
            </tbody>
        </table>
    )
}
  

export default PixelGrid