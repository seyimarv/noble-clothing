import { useState, FormEvent } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  CardElementContainer,
  ErrorMessage,
} from './payment-form.styles';

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaymentError(null);

    if (!stripe || !elements) {
      setPaymentError('Stripe has not been properly initialized');
      return;
    }

    if (amount === 0) {
      setPaymentError('Your cart is empty. Please add items before checkout.');
      return;
    }

    setIsProcessingPayment(true);

    try {
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }).then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      });

      const {
        paymentIntent: { client_secret },
      } = response;

      const cardDetails = elements.getElement(CardElement);

      if (!ifValidCardElement(cardDetails)) {
        setPaymentError('Invalid card details');
        setIsProcessingPayment(false);
        return;
      }

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest',
          },
        },
      });

      setIsProcessingPayment(false);

      if (paymentResult.error) {
        setPaymentError(paymentResult.error.message || 'Payment failed');
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          setPaymentSuccess(true);
          cardDetails.clear();
        }
      }
    } catch (error) {
      setIsProcessingPayment(false);
      setPaymentError('Payment processing failed. Please try again.');
      console.error('Payment error:', error);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#e74c3c',
        iconColor: '#e74c3c',
      },
    },
    hidePostalCode: true,
  };

  return (
    <PaymentFormContainer>
      {paymentSuccess ? (
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <FormContainer onSubmit={paymentHandler}>
          <h2>Secure Payment</h2>
          
          <CardElementContainer>
            <CardElement options={cardElementOptions} />
          </CardElementContainer>
          
          {paymentError && <ErrorMessage>{paymentError}</ErrorMessage>}
          
          <PaymentButton
            isLoading={isProcessingPayment}
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            type="submit"
          >
            {isProcessingPayment ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
          </PaymentButton>
        </FormContainer>
      )}
    </PaymentFormContainer>
  );
};

export default PaymentForm;
