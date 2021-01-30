import './App.css';

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import PixelGrid from './components/PixelGrid'
import PixelInfo from './components/PixelInfo'
import PixelInfoEditable from './components/PixelInfoEditable'
import SizeAdjuster from './components/SizeAdjuster'
import ShoppingCart from './components/ShoppingCart'

import localStorageCart from './utils/shoppingCart'


import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_RMqvxnEUv0TbhaRCpLNpNzeF00G9e3C2JE');

const BACKEND_URL = 'http://pixels.rpghelpers.com:4242'


/*
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
*/
let pixels = []

function App() {
  const [ fetchedPixels, setFetchedPixels ] = useState(null)
  const [ activePixel, setActivePixel ] = useState(null)
  const [ pixelSize, setPixelSize ] = useState(5)
  const [ quickCheckout, setQuickCheckout ] = useState(null) // if this contains pixel data then quick checkout is active
  const [ cartContents, setCartContents ] = useState([]) // 

  console.log('render')
  // console.log('pixels', pixels)
  // console.log('fetchedPixels', fetchedPixels)

  useEffect(() => {
    console.log('running effect')
    // Load pixel data from backend
    axios
      .get(`${BACKEND_URL}/pixels`)
      .then(response => {
        //console.log('effect response', response.data)
        setFetchedPixels(response.data)                
      })
      .catch(error => {
        console.log(error)
      })
  }, []
  )

  if (pixels.length === 0 && fetchedPixels !== null) { pixels = fetchedPixels }

  const addToCart = ( item ) => {
    setCartContents( cartContents.concat([ item ]) )
    localStorageCart.add(item)
  }

  const emptyCart = () => {
    setCartContents([])
    localStorageCart.empty()
  }

  const claimPixelsFunction = async (pixels) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    const requestOptions = { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pixels)
    }

    // console.log(requestOptions);
    // TODO: EMPTY CART ONLY WHEN RETURNING FROM SUCCESFUL CHECKOUT
    emptyCart()

    // Call your backend to create the Checkout Session
    const response = await fetch(`${BACKEND_URL}/claim-pixels`, requestOptions);

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

  if (fetchedPixels === null) {
    return <h1>Loading...</h1>
  } else {

    return (
      <div 
        className="content"
        style={{ 
          display: "flex",
          flexFlow: "row wrap",
        }}
        >
        <Header
          header="TESTING MODE"
          text="Use card number 4242 4242 4242 4242 for purchases"
          />

        { /*
        <SizeAdjuster
          pixelSize={ pixelSize }
          setPixelSize={ setPixelSize }
          />
        */ }
        <PixelGrid 
          fullPixelData={pixels} 
          activePixel={activePixel}
          setActivePixelFunction={ setActivePixel } 
          pixelSize={ pixelSize }
          style={{ border: '1px solid black' }}
          />

        <div>
        <PixelInfoEditable 
          pixelData={ activePixel } 
          claimPixelsFunction={ claimPixelsFunction }
          addToCartFunction={ addToCart }
          />

        <ShoppingCart
          contents={ cartContents }
          checkoutFunction={ claimPixelsFunction }
          />
        </div>
      </div>
    )
  }
}
export default App;
