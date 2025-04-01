import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 0;
  font-size: 16px;
  align-items: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #fafafa;
  }
  
  @media screen and (max-width: 800px) {
    font-size: 14px;
    padding: 15px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  @media screen and (max-width: 800px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  color: #333;
  
  @media screen and (max-width: 800px) {
    &:nth-child(2) {
      display: none;
    }
    width: 30%;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #000;
  }
`;

export const Value = styled.span`
  margin: 0 10px;
  min-width: 20px;
  text-align: center;
  font-weight: 500;
`;

export const RemoveButton = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #999;
  font-size: 14px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #d63031;
  }
  
  @media screen and (max-width: 800px) {
    width: 10%;
  }
`;
