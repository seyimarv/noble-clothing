import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import { 
  HomeContainer, 
  HeroSection, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle,
  HeroButton,
  SectionTitle,
  FeaturedSection,
  PromoSection,
  PromoContent,
  PromoTitle,
  PromoText,
  PromoButton,
  NewsletterSection,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton
} from './home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Spring Collection 2025</HeroTitle>
          <HeroSubtitle>Discover the latest trends in fashion</HeroSubtitle>
          <HeroButton to='/shop'>Shop Now</HeroButton>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Shop Categories</SectionTitle>
        <Directory />
      </FeaturedSection>

      <PromoSection>
        <PromoContent>
          <PromoTitle>Special Offer</PromoTitle>
          <PromoText>Get 20% off on all new arrivals with code: SPRING25</PromoText>
          <PromoButton to='/shop'>View Collection</PromoButton>
        </PromoContent>
      </PromoSection>

      <NewsletterSection>
        <SectionTitle>Join Our Newsletter</SectionTitle>
        <PromoText>Subscribe to receive updates on new arrivals and special offers</PromoText>
        <NewsletterForm>
          <NewsletterInput type="email" placeholder="Your email address" />
          <NewsletterButton>Subscribe</NewsletterButton>
        </NewsletterForm>
      </NewsletterSection>
      
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
