import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer, CategoryDescription } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
  description?: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
    description: 'Complete your look with our stylish hat collection',
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
    description: 'Stay warm and trendy with premium jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
    description: 'Step up your footwear game with the latest sneakers',
  },
  {
    id: 4,
    title: 'Women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
    description: 'Discover our women\'s collection for every occasion',
  },
  {
    id: 5,
    title: 'Men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
    description: 'Explore our men\'s collection for modern style',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <div key={category.id}>
          <DirectoryItem category={category} />
          {category.description && (
            <CategoryDescription>{category.description}</CategoryDescription>
          )}
        </div>
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
