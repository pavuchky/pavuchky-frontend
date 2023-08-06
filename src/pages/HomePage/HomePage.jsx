import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import { Donation } from 'components/Donation/Donation';
import OurNeeds from 'components/OurNeeds/OurNeeds';
import { Hero } from 'components/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Contribution />
      <OurNeeds />
      <Donation />
      <Contacts />
    </>
  );
};

export default HomePage;
