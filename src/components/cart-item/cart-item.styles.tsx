import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  position: relative;
  gap: 1rem;
  
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f9f9f9;
    transform: translateX(3px);
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0.8rem;

  span:first-child {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #333;
    margin-right: 1rem;
  }
  
  span:last-child {
    font-size: 0.85rem;
    color: #666;
    font-weight: 500;
    
    &:before {
      content: '\1F4B0'; /* Money bag emoji */
      margin-right: 5px;
    }
  }
`;
