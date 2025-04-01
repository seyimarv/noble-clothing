import styled, { keyframes } from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: white;
  top: 80px;
  right: 20px;
  z-index: 5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.3s ease forwards;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    right: 30px;
    width: 16px;
    height: 16px;
    background-color: white;
    transform: rotate(45deg);
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.04);
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: 1rem;
    border-radius: 30px;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    padding: 0.8rem 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(-1px);
    }
  }
  
  @media screen and (max-width: 768px) {
    width: 280px;
    right: 10px;
    top: 60px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1rem;
  color: #666;
  margin: 3rem auto;
  text-align: center;
  animation: ${bounce} 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:before {
    content: '🛒';
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const CartTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: all 0.2s ease;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  
  &:hover {
    color: #333;
    background-color: #f0f0f0;
  }
`;

export const CartFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #666;
  
  span {
    font-weight: 700;
    font-size: 1.2rem;
    color: #333;
  }
`;

export const CartItems = styled.div`
  max-height: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-right: -5px;
  padding-right: 5px;
  flex: 1;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  /* Animation for cart items */
  & > * {
    animation: ${fadeIn} 0.3s ease forwards;
  }
  
  & > *:nth-child(1) { animation-delay: 0.1s; }
  & > *:nth-child(2) { animation-delay: 0.2s; }
  & > *:nth-child(3) { animation-delay: 0.3s; }
  & > *:nth-child(4) { animation-delay: 0.4s; }
  & > *:nth-child(5) { animation-delay: 0.5s; }
`;
