import styled from 'styled-components';

export const SignUpContainer = styled.div`
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
  
  button {
    margin-top: 20px;
    width: 100%;
    padding: 15px 20px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
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
    
    button {
      padding: 12px 15px;
    }
  }
`;
