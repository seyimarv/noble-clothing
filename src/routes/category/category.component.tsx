import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import {
  CategoryContainer,
  CategoryHeader,
  Title,
  CategoryInfo,
  ProductCount,
  SortSelect,
  FilterContainer,
  EmptyStateContainer,
  LoadingContainer
} from './category.styles';

type CategoryRouteParams = {
  category: string;
};

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest';

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category] || []);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set products from category map
    if (categoriesMap[category]) {
      let sortedProducts = [...categoriesMap[category]];
      
      // Apply sorting
      switch (sortBy) {
        case 'price-low':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // Assuming newer products have higher IDs
          sortedProducts.sort((a, b) => b.id - a.id);
          break;
        default:
          // 'featured' - no sorting needed
          break;
      }
      
      setProducts(sortedProducts);
    } else {
      setProducts([]);
    }
  }, [category, categoriesMap, sortBy]);
  
  useEffect(() => {
    // Animation effect when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
  };
  
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className={`category-page ${isVisible ? 'visible' : ''}`}>
      <CategoryHeader>
        <div>
          <Link to="/shop" className="back-link">
            ← All Collections
          </Link>
          <Title>{formattedCategory}</Title>
        </div>
        
        <CategoryInfo>
          <ProductCount>{products?.length || 0} Products</ProductCount>
          
          <FilterContainer>
            <SortSelect value={sortBy} onChange={handleSortChange}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </SortSelect>
          </FilterContainer>
        </CategoryInfo>
      </CategoryHeader>
      
      {isLoading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : products && products.length > 0 ? (
        <CategoryContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CategoryContainer>
      ) : (
        <EmptyStateContainer>
          <h3>No products found</h3>
          <p>We couldn't find any products in this category. Please check back later or browse other categories.</p>
          <Link to="/shop" className="browse-link">Browse All Collections</Link>
        </EmptyStateContainer>
      )}
    </div>
  );
};

export default Category;
