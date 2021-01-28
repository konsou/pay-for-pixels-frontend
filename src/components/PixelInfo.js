import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_RMqvxnEUv0TbhaRCpLNpNzeF00G9e3C2JE');

/*
const claimPixels = async (pixels) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    const requestOptions = { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pixels),
    }

    // console.log(requestOptions);

    // Call your backend to create the Checkout Session
    const response = await fetch('http://localhost:4242/claim-pixel', requestOptions);

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error.message);
    }
}
*/
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
                {
                    // <button onClick={ () => claimPixels([ { ...pixelData, amount: pixelData.amount + 0.05 } ]) }>Claim for { pixelData.amount + 0.05 }</button>
                }
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