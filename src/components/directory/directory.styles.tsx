import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

export const CategoryDescription = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  padding: 0 1rem;
`;
