import { useNavigate } from 'react-router-dom';
import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import { Donation } from 'components/Donation/Donation';
import OurNeeds from 'components/OurNeeds/OurNeeds';
import Reviews from 'components/Reviews/Reviews';
import { Hero } from 'components/Hero/Hero';
import GallerySection from 'components/GallerySection/GallerySection';
import { Statistics } from 'components/Statistics/Statistics';
import { Partners } from 'components/Partners/Partners';
import { OurWork } from 'components/OurWork/OurWork';
import { useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.performance.navigation.type === 1) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Hero />
      <AboutUs />
      <OurWork />
      <Statistics />
      <Contribution />
      <OurNeeds />
      <GallerySection />
      <Reviews />
      <Donation />
      <Partners />
      <Contacts />
    </>
  );
};

export default HomePage;
