import { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

import { CategoryItem } from '../../store/categories/category.types';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const ViewAllButton = styled.button`
  background: transparent;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  color: #333;
  
  &:hover {
    background: #f8f8f8;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  }
  
  &:after {
    content: '→';
    margin-left: 6px;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: translateX(4px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    margin: 0;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const ProductCount = styled.span`
  font-size: 0.9rem;
  color: #777;
  font-weight: 400;
  margin-left: 10px;
`;

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <CategoryPreviewContainer 
      ref={containerRef}
      className={isVisible ? 'visible' : ''}
    >
      <CategoryHeader>
        <h2>
          <Title to={title}>
            {title.charAt(0).toUpperCase() + title.slice(1)}
            <ProductCount>{products.length} items</ProductCount>
          </Title>
        </h2>
      </CategoryHeader>
      
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      
      <ViewAllButton onClick={() => window.location.href = `shop/${title}`}>
        View All {products.length} Items
      </ViewAllButton>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
