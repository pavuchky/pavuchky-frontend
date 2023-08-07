import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import { Donation } from 'components/Donation/Donation';
import OurNeeds from 'components/OurNeeds/OurNeeds';
import Reviews from 'components/Reviews/Reviews';
import { Hero } from 'components/Hero/Hero';
import { Partners } from 'components/Partners/Partners';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Contribution />
      <OurNeeds />
      <Reviews />
      <Donation />
      <Partners />
      <Contacts />
    </>
  );
};

export default HomePage;
