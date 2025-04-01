import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

export const HeroSection = styled.section`
  height: 80vh;
  min-height: 600px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

export const HeroContent = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: black;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #333;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FeaturedSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const PromoSection = styled.section`
  padding: 5rem 2rem;
  background-color: #2d2d2d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const PromoContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

export const PromoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PromoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const PromoButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const NewsletterSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  max-width: 600px;
  margin: 2rem auto 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 50px 0 0 50px;
  outline: none;
  
  @media (max-width: 768px) {
    border-radius: 50px;
    margin-bottom: 1rem;
  }
`;

export const NewsletterButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
  }
  
  @media (max-width: 768px) {
    border-radius: 50px;
  }
`;
