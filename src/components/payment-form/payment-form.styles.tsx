import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  @media screen and (max-width: 768px) {
    padding: 20px;
    margin: 30px auto;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  
  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 25px;
    color: #333;
    
    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  
  .StripeElement {
    border: 1px solid #e0e0e0;
    padding: 15px;
    border-radius: 4px;
    background-color: #fafafa;
    transition: all 0.3s ease;
    
    &--focus {
      border-color: #333;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    &--invalid {
      border-color: #e74c3c;
    }
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  padding: 15px 35px;
  width: 100%;
  max-width: 200px;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  @media screen and (max-width: 768px) {
    margin: 25px auto 0;
    padding: 12px 30px;
  }
`;

export const CardElementContainer = styled.div`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '⚠️';
    margin-right: 8px;
  }
`;
