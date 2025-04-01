import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DirectoryCategory } from '../directory/directory.component';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  ShopButton,
  ItemCount
} from './directory-item.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category.title.toLowerCase()] || []);

  const onNavigateHandler = () => navigate(route);
  
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <ItemCount>{products.length} items</ItemCount>
      <Body>
        <h2>{title}</h2>
        <ShopButton>Shop Now</ShopButton>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
