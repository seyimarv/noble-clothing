import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';


const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  
  /* Center the View All button */
  & > button {
    align-self: center;
    margin-top: 1.5rem;
  }
  
  @media screen and (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const Title = styled(Link)`
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-left: 0.75rem;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  
  &:hover {
    color: #000;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0.75rem;
    width: 0;
    height: 2px;
    background-color: #000;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: calc(100% - 0.75rem);
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  
  .product-card-wrapper {
    transition: opacity 0.5s ease, transform 0.5s ease;
    position: relative;
    overflow: hidden;
  }
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
  
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }
`;
