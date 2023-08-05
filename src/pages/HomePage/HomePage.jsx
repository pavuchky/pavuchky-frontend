import { Contribution } from 'components/Contribution/Contribution';
import { Donation } from 'components/Donation/Donation';
import OurNeeds from 'components/OurNeeds/OurNeeds';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>

      <Contribution />
      <Donation />
      <OurNeeds />
    </>
  );
};

export default HomePage;
