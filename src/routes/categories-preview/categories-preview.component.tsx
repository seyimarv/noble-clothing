import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const PreviewContainer = styled.div`
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: #333;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  gap: 2rem;
  animation: fadeIn 0.5s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  & > * {
    opacity: 0;
    animation: slideIn 0.5s ease-out forwards;
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  ${Array.from({ length: 10 }).map((_, i) => `
    & > *:nth-child(${i + 1}) { 
      animation-delay: ${0.1 * (i + 1)}s; 
    }
  `).join('')}
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 2rem 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  p {
    color: #666;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay to make the animations more noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const categoryTitles = Object.keys(categoriesMap);
  const hasCategories = categoryTitles.length > 0;

  return (
    <PreviewContainer style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease' }}>
      <PageTitle>Our Collections</PageTitle>
      
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : !hasCategories ? (
        <EmptyState>
          <h3>No Collections Found</h3>
          <p>We're currently updating our collections. Please check back soon for new arrivals.</p>
        </EmptyState>
      ) : (
        <CategoriesGrid>
          {categoryTitles.map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview 
                key={title} 
                title={title} 
                products={products} 
              />
            );
          })}
        </CategoriesGrid>
      )}
    </PreviewContainer>
  );
};

export default CategoriesPreview;
