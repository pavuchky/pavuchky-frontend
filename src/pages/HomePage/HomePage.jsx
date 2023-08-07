import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import { Donation } from 'components/Donation/Donation';
import OurNeeds from 'components/OurNeeds/OurNeeds';
import Footer from "../../components/Footer/Footer"

import Reviews from 'components/Reviews/Reviews';
import { Hero } from 'components/Hero/Hero';
import { Statistics } from 'components/Statistics/Statistics';
import { Partners } from 'components/Partners/Partners';

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
      <Partners />
      <Contacts />
      <Footer/>
    </>
  );
};

export default HomePage;
