import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 0 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  
  .logo {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
    
    @media screen and (max-width: 800px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  
  @media screen and (max-width: 800px) {
    gap: 0.8rem;
  }
`;

const NavLinkStyles = css`
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #333;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #000;
    
    &:after {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

export const NavLink = styled(Link)`
  ${NavLinkStyles}
`;

export const NavLinkSpan = styled.span`
  ${NavLinkStyles}
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
  }
  
  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: #333;
    transition: all 0.3s ease;
  }
`;

export const SearchBarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;
