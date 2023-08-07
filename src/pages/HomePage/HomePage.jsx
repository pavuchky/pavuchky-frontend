import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import { Donation } from 'components/Donation/Donation';
import OurNeeds from 'components/OurNeeds/OurNeeds';
import { Hero } from 'components/Hero/Hero';
import GallerySection from 'components/GallerySection/GallerySection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Contribution />
      <OurNeeds />
      <GallerySection />
      <Donation />
      <Contacts />
    </>
  );
};

export default HomePage;
