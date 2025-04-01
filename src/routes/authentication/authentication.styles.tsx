import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  max-width: 1100px;
  width: 90%;
  justify-content: space-between;
  margin: 60px auto;
  gap: 40px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    width: 1px;
    height: calc(100% + 40px);
    background: linear-gradient(to bottom, transparent, #e0e0e0 10%, #e0e0e0 90%, transparent);
    display: none;
  }
  
  @media screen and (min-width: 1024px) {
    &:before {
      display: block;
    }
  }
  
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin: 40px auto;
  }
  
  @media screen and (max-width: 480px) {
    width: 95%;
    margin: 20px auto;
  }
`;

export const AuthenticationTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 40px;
  color: #333;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;
