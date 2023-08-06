import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import { Donation } from 'components/Donation/Donation';
import OurNeeds from 'components/OurNeeds/OurNeeds';
import Reviews from 'components/Reviews/Reviews';
import { Hero } from 'components/Hero/Hero';
import { Statistics } from 'components/Statistics/Statistics';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Statistics />
      <Contribution />
      <OurNeeds />
      <Reviews />
      <Donation />
      <Contacts />
    </>
  );
};

export default HomePage;
