import logo from './logo.svg';
import './App.css';


import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_RMqvxnEUv0TbhaRCpLNpNzeF00G9e3C2JE');

function App() {
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

    console.log(requestOptions);

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
    <button type="button" role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}
export default App;