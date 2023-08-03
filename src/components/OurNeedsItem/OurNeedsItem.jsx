import {
  ContactContainer,
  Location,
  LocationAndNeedTypeContainer,
  NeedType,
  NeedsItemContact,
  NeedsItemContactPerson,
  NeedsItemDeccription,
  NeedsItemTitel,
  OurNeedsItemLi,
} from './OurNeedsItem.styled';

const OurNeedsItem = ({ location, needType, titel, description, contact }) => {
  return (
    <OurNeedsItemLi>
      <LocationAndNeedTypeContainer>
        <Location>{location}</Location>
        <NeedType>{needType.trim() + ' потреби'}</NeedType>
      </LocationAndNeedTypeContainer>

      <NeedsItemTitel>{titel}</NeedsItemTitel>
      <NeedsItemDeccription>{description}</NeedsItemDeccription>

      <ContactContainer>
        <NeedsItemContact>Контакти</NeedsItemContact>
        <NeedsItemContactPerson>{contact}</NeedsItemContactPerson>
      </ContactContainer>
    </OurNeedsItemLi>
  );
};

export default OurNeedsItem;
