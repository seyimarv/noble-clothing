import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ShopButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background-color: #2d2d2d;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ItemCount = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: #2d2d2d;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Body = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  h2 {
    font-weight: 600;
    margin: 0;
    font-size: 1.5rem;
    color: #2d2d2d;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;


export const DirectoryItemContainer = styled.div`
  aspect-ratio: 4/5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

    ${BackgroundImage} {
      transform: scale(1.1);
    }

    ${Body} {
      background: rgba(255, 255, 255, 0.98);
      transform: translateX(-50%) translateY(-5px);

      p:after {
        width: 100%;
      }
    }
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
    }
  }
`;
