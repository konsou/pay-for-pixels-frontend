import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_RMqvxnEUv0TbhaRCpLNpNzeF00G9e3C2JE');


const QuickCheckout = ({ pixelData }) => {
    if (pixelData && pixelData !== null) {
        const handleClick = async (event) => {
            // Get Stripe.js instance
            const stripe = await stripePromise;
        
            const requestOptions = { 
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(
                [
                  {
                    x: 42,
                    y: 36,
                    color: '#123456',
                    owner: 'joe doe',
                    note: 'this is a note',
                    amount: 2.34,
                  },
                  {
                    x: 12,
                    y: 96,
                    color: '#654321',
                    owner: 'joe doe',
                    note: 'this is a second note',
                    amount: 1.34,
                  },
                ]
              )
            };
        
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
          };
        
        return (
            <div className="cuickCheckout">
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
  

export default QuickCheckout