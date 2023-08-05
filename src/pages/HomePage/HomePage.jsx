import Contacts from 'components/Contacts/Contacts';
import { Contribution } from 'components/Contribution/Contribution';
import OurNeeds from 'components/OurNeeds/OurNeeds';
import Footer from "../../components/Footer/Footer"


const HomePage = () => {
  return (
    <>
      <div>HomePage</div>

      <Contribution />
      <OurNeeds />
      <Contacts />
      <Footer/>
    </>
  );
};

export default HomePage;
