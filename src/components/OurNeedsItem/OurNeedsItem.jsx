import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import {
  ContactContainer,
  Location,
  LocationAndNeedTypeContainer,
  NeedType,
  NeedsItemContact,
  // NeedsItemContactPerson,
  NeedsItemDeccription,
  NeedsItemTitel,
  OurNeedsItemLi,
} from './OurNeedsItem.styled';

const OurNeedsItem = ({ location, needType, titel, description, contact }) => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesctopScreen = useMediaQuery({ minWidth: 1440 });

  return (
    <OurNeedsItemLi>
      <LocationAndNeedTypeContainer>
        <Location>{location}</Location>
        {!isTabletScreen && <NeedType>{needType.trim()}</NeedType>}
      </LocationAndNeedTypeContainer>

      <NeedsItemTitel>{titel}</NeedsItemTitel>
      <NeedsItemDeccription>{description}</NeedsItemDeccription>

      {(!isTabletScreen || isDesctopScreen) && (
        <ContactContainer>
          <NeedsItemContact href="#contacts">{contact}</NeedsItemContact>

          {/* <NeedsItemContactPerson>{contact}</NeedsItemContactPerson> */}
        </ContactContainer>
      )}
    </OurNeedsItemLi>
  );
};

export default OurNeedsItem;

OurNeedsItem.propTypes = {
  location: PropTypes.string,
  needType: PropTypes.string,
  titel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contact: PropTypes.string,
};
