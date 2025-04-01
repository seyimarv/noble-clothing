import { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  NavLinkSpan,
  LogoContainer,
  MobileMenuButton,
  // SearchBarContainer,
  // SearchInput
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const signOutUser = () => dispatch(signOutStart());
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <Fragment>
      <NavigationContainer style={isScrolled ? { height: '60px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' } : {}}>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        
        {/* <SearchBarContainer>
          <SearchInput type='text' placeholder='Search...' />
        </SearchBarContainer>
         */}
        <MobileMenuButton 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className={isMobileMenuOpen ? 'active' : ''}
        >
          <div className="hamburger-icon">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </MobileMenuButton>
        
        <NavLinks style={isMobileMenuOpen ? 
          { 
            position: 'absolute', 
            top: '60px', 
            left: 0, 
            right: 0,
            flexDirection: 'column', 
            padding: '1rem',
            backgroundColor: 'white',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 100
          } : {}
        }>
          <NavLink to='/shop'>Shop</NavLink>

          {currentUser ? (
            <NavLinkSpan onClick={signOutUser}>
              Sign Out
            </NavLinkSpan>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
