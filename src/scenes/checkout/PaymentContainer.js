import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Payment from './components/Payment';
import { stripeKey } from 'libs/config';

import CoinbaseButtonContainer from './CoinbaseButtonContainer';

/**
 * Builds up the higher level blocks of the page
 */
const PaymentContainer = props => {
  return (
    <div>
      <StripeProvider apiKey={stripeKey}>
        <Elements>
          <Payment guests={props.guests} trip={props.trip} />
        </Elements>
      </StripeProvider>
      <CoinbaseButtonContainer
        tripId={props.trip._id}
        guests={[{ title: 'Mr', firstName: 'jaydeep', lastName: 'solanki' }]}
      />
    </div>
  );
};

PaymentContainer.propTypes = {};

export default PaymentContainer;
