import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  
  @media screen and (max-width: 800px) {
    width: 85%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #555;
  text-transform: uppercase;
`;

export const HeaderBlock = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  
  span {
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 20px;
      height: 2px;
      background-color: #333;
    }
  }

  &:last-child {
    width: 8%;
    justify-content: center;
  }
  
  @media screen and (max-width: 800px) {
    &:nth-child(2) {
      display: none;
    }
    
    width: 30%;
    
    &:last-child {
      width: 10%;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 28px;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background-color: #333;
    margin-right: 15px;
  }
`;
