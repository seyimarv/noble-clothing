import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 1rem;
  animation: ${fadeIn} 0.5s ease-out;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5rem;
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  max-width: 1400px;
  padding: 0 1rem;
  margin: 0 auto 2rem;
  margin-top: 2rem;
  
  .back-link {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    transition: color 0.2s ease;
    
    &:hover {
      color: #000;
    }
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0.5rem 0;
  position: relative;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const ProductCount = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  
  &:before {
    content: 'Sort by:';
    font-size: 0.85rem;
    color: #666;
    margin-right: 0.25rem;
  }
`;

export const SortSelect = styled.select`
  padding: 0.6rem 2rem 0.6rem 1rem;
  border: none;
  border-bottom: 2px solid #eee;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6"><path fill="%23333" d="M0 0l6 6 6-6z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  
  &:hover, &:focus {
    border-color: #333;
    outline: none;
  }
  
  option {
    font-weight: normal;
    padding: 0.5rem;
  }
  
  /* Remove default focus outline in Firefox */
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  
  /* Custom styling for different browsers */
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    padding-right: 2rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 100%;
`;

export const EmptyStateContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 600px;
  animation: ${slideUp} 0.5s ease-out;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  .browse-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #333;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: #000;
    }
  }
`;
