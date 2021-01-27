import React from 'react'

const PixelInfo = ({ pixelData }) => {
    if (pixelData && pixelData !== null) {
        return (
            <div className="pixelInfo">
                <h2>Claimed by</h2>
                <h1>{ pixelData.owner }</h1>
                <div style={{ 
                    backgroundColor: pixelData.color,
                    width: '20px',
                    height: '20px',
                    }} />
                <p>{ pixelData.note }</p>
                <p>Claim amount: { pixelData.amount }</p>
        
            </div>
        )
    } else {
        return (
            <div className="pixelInfo">
                <p>No pixel selected</p>
            </div>
        )
    }
}
  

export default PixelInfo