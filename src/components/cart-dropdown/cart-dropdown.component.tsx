import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { 
  selectCartItems, 
  selectCartTotal, 
  selectIsCartOpen 
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartHeader,
  CartTitle,
  CartTotal,
  CartFooter,
  CloseButton
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.shopping-icon') // Don't close when clicking the cart icon
      ) {
        dispatch(setIsCartOpen(false));
      }
    };

    // Handle escape key press
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isCartOpen) {
        dispatch(setIsCartOpen(false));
      }
    };
    
    if (isCartOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      window.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isCartOpen, dispatch]);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false)); // Close dropdown when navigating to checkout
  };
  
  const closeCart = () => {
    dispatch(setIsCartOpen(false));
  };
  
  const itemCount = cartItems.length;
  
  return (
    <CartDropdownContainer ref={dropdownRef} className="cart-dropdown">
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </CartHeader>
      
      <CartItems>
        {itemCount ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      
      <CartFooter>
        {itemCount > 0 && (
          <CartTotal>
            Total: <span>${cartTotal}</span>
          </CartTotal>
        )}
        <Button 
          buttonType={BUTTON_TYPE_CLASSES.inverted} 
          onClick={goToCheckoutHandler}
          disabled={itemCount === 0}
        >
          Checkout
        </Button>
      </CartFooter>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
