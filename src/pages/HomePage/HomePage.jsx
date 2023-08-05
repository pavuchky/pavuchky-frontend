import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import OurNeeds from 'components/OurNeeds/OurNeeds';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <AboutUs />
      <Contribution />
      <OurNeeds />
      <Contacts />
    </>
  );
};

export default HomePage;
