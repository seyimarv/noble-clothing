import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
`;

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .product-image-wrapper {
    width: 100%;
    height: 95%;
       margin-bottom: 4px;
        overflow: hidden;
  }
  
  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    height: 100%;
  }

  button {
    width: 80%;
    position: absolute;
    top: 70%;
    
    @media screen and (min-width: 768px) {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    @media screen and (max-width: 767px) {
      opacity: 0.9;
      position: relative;
      top: auto;
      margin-top: 10px;
    }
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    button {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
  
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 5px 0;
`;

export const Name = styled.span`
  width: 85%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 15%;
  font-weight: bold;
  text-align: right;
`;
