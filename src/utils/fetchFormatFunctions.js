import { urlFor } from 'client';

export const contactsFormattedFn = ({
  phone,
  socialMediaList,
  streetList,
  _id,
}) => {
  return {
    id: _id,
    phone: !!phone ? phone : null,
    socialMediaList: socialMediaList
      ? socialMediaList.map(({ socialMediaLink, socialMediaName, _key }) => {
          return {
            socialMediaLink: !!socialMediaLink ? socialMediaLink : null,
            socialMediaName: !!socialMediaName ? socialMediaName : null,
            id: _key,
          };
        })
      : null,
    streetList: streetList
      ? streetList.map(({ street, _key }) => {
          return {
            street: !!street ? street[0]?.children[0]?.text : null,
            id: _key,
          };
        })
      : null,
  };
};

export const postsFormattedFn = ({ postsLink, postsList, _id }) => {
  return {
    id: _id,
    postsLink: !!postsLink ? postsLink : null,
    postsList: postsList
      ? postsList.map(({ postImage, postDesc, postLink, _key }) => {
          return {
            postImage: postImage?.asset ? urlFor(postImage?.asset) : null,
            postDesc: !!postDesc ? postDesc : null,
            postLink: !!postLink ? postLink : null,
            id: _key,
          };
        })
      : null,
  };
};

export const reviewsFormattedFn = ({ reviewList, _id }) => {
  return {
    id: _id,
    reviewList: reviewList
      ? reviewList.map(({ reviewDesc, reviewImage, _key }) => {
          return {
            reviewImage: reviewImage?.asset ? urlFor(reviewImage?.asset) : null,
            reviewDesc: !!reviewDesc ? reviewDesc : null,
            id: _key,
          };
        })
      : null,
  };
};

export const statisticFormattedFn = ({ days, gridFootage, members, _id }) => {
  return {
    id: _id,
    days: !!days ? days : null,
    gridFootage: !!gridFootage ? gridFootage : null,
    members: !!members ? members : null,
  };
};

export const partnersFormattedFn = ({ partnersList, _id }) => {
  return {
    id: _id,
    partnersList: partnersList
      ? partnersList.map(({ partnerImage, partnerLink, _key }) => {
          return {
            partnerImage: partnerImage?.asset
              ? urlFor(partnerImage?.asset)
              : null,
            partnerLink: !!partnerLink ? partnerLink : null,
            id: _key,
          };
        })
      : null,
  };
};