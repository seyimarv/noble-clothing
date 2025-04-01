import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  padding: 30px;
  border-radius: 8px;
  background-color: white;
  

  h2 {
    margin: 0 0 15px 0;
    font-size: 28px;
    font-weight: 500;
    color: #333;
  }
  
  span {
    color: #666;
    margin-bottom: 25px;
    font-size: 16px;
  }
  
  form {
    margin-top: 10px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 20px;
    
    h2 {
      font-size: 24px;
    }
    
    span {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 15px;
  
  button {
    flex: 1;
    padding: 15px 20px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    
    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #999;
  font-size: 14px;
  
  &:before, &:after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }
  
  &:before {
    margin-right: 10px;
  }
  
  &:after {
    margin-left: 10px;
  }
`;
