import './App.css';

import React, { useState } from 'react'

import PixelGrid from './components/PixelGrid'
import PixelInfo from './components/PixelInfo'
import PixelInfoEditable from './components/PixelInfoEditable'
import SizeAdjuster from './components/SizeAdjuster'


import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_RMqvxnEUv0TbhaRCpLNpNzeF00G9e3C2JE');



const emptyPixel = {
  color: '#FFFFFF',
  owner: 'not claimed',
  note: '',
  amount: 0.45,
}

let pixels = [];

for (let row = 0; row < 100; row++) {
  pixels.push([]);

  for (let column = 0; column < 100; column++) {
    pixels[row].push({
      ...emptyPixel,
      x: column,
      y: row,
      color: `#${ (row * column).toString(16)}`,
    })
  }
}


function App() {
  const [ activePixel, setActivePixel ] = useState(null)
  const [ pixelSize, setPixelSize ] = useState(5)
  const [ quickCheckout, setQuickCheckout ] = useState(null) // if this contains pixel data then quick checkout is active

  const claimPixelsFunction = async (pixels) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    const requestOptions = { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pixels)
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

  return (
    <div className="content">
      <SizeAdjuster
        pixelSize={ pixelSize }
        setPixelSize={ setPixelSize }
        />

      <PixelGrid 
        fullPixelData={pixels} 
        setActivePixelFunction={ setActivePixel } 
        pixelSize={ pixelSize }
        />

      <PixelInfoEditable 
        pixelData={ activePixel } 
        claimPixelsFunction={ claimPixelsFunction }
        />

    </div>
  );
}
export default App;
