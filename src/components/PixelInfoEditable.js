import React, { useState } from 'react'


const PixelInfoEditable = ({ pixelData, claimPixelsFunction }) => {
    const [ pixel, setPixel ] = useState(null)

    console.log('in PixelInfoEditable')
    console.log('pixelData:', pixelData)
    console.log('pixel:', pixel)

    if (
        (pixel === null && pixelData !== null) ||
        (pixel !== null && pixel.x !== pixelData.x) ||
        (pixel !== null && pixel.y !== pixelData.y)
        ) {
            setPixel({ ...pixelData, amount: pixelData.amount + 0.05 })
        }


    if (pixel && pixel !== null) {
        return (
            <div className="pixelInfo" style={{ border: '1px solid black' }}>
                <h1>Pixel { pixel.x },{ pixel.y }</h1>
                <label>
                    Claimed by:
                    <input 
                        type="text"
                        value={ pixel.owner }
                        onChange={ (event) => setPixel({ ...pixel, owner: event.target.value }) }
                        />
                    <br />
                </label>
                <label>
                    Color:
                    <div style={{ 
                        backgroundColor: pixel.color,
                        width: '20px',
                        height: '20px',
                        }} />
                    <input 
                        type="text"
                        value={ pixel.color }
                        onChange={ (event) => setPixel({ ...pixel, color: event.target.value }) }
                        />
                    <br />
                </label>
                <label>
                    Note:
                    <input 
                        type="text"
                        value={ pixel.note }
                        onChange={ (event) => setPixel({ ...pixel, note: event.target.value }) }
                        />
                    <br />
                </label>
                <label>
                    Claim amount:
                    <input 
                        type="text"
                        value={ pixel.amount }
                        style={{ 
                            width: '3em',
                            textAlign: 'right',
                            }}
                        onChange={ (event) => setPixel({ ...pixel, amount: event.target.value }) }
                        /> €
                    <br />
                </label>

                <button onClick={ () => claimPixelsFunction([ pixel ]) }>Claim for { pixel.amount } €</button> 
                
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
  

export default PixelInfoEditable