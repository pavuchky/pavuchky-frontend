import { urlFor } from 'client';
import {
  formatTextSanity,
  formatFileSanity,
  formatMediaLinkSanity,
} from './sanityHelpers';

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
      ? streetList.map(({ streetEn, streetUa, _key }) => {
          return {
            street:
              !!streetEn && !!streetUa
                ? {
                    en: !!streetEn ? formatTextSanity(streetEn) : null,
                    ua: !!streetUa ? formatTextSanity(streetUa) : null,
                  }
                : null,

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
            // reviewImage: reviewImage?.asset ? urlFor(reviewImage?.asset) : null,
            reviewImage: !!reviewImage
              ? formatMediaLinkSanity(reviewImage)
              : null,
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
      ? partnersList.map(
          ({
            partnerImageMobile,
            partnerImageTablet,
            partnerImageDesktop,
            partnerLink,
            _key,
          }) => {
            const defaultImage = [
              partnerImageDesktop,
              partnerImageTablet,
              partnerImageMobile,
            ];

            return {
              partnerImageMobile: partnerImageMobile?.asset
                ? urlFor(partnerImageMobile?.asset)
                : null,
              partnerImageTablet: partnerImageTablet?.asset
                ? urlFor(partnerImageTablet?.asset)
                : null,
              partnerImageDesktop: partnerImageDesktop?.asset
                ? urlFor(partnerImageDesktop?.asset)
                : null,
              defaultImage: defaultImage.some(el => el)
                ? defaultImage.find(el => !!el)
                : null,
              partnerLink: !!partnerLink ? partnerLink : null,
              id: _key,
            };
          }
        )
      : null,
  };
};

export const aboutFormattedFn = ({
  aboutShortEn,
  aboutShortUa,
  aboutFullEn,
  aboutFullUa,
  _id,
}) => {
  return {
    id: _id,
    aboutShort:
      !!aboutShortEn && !!aboutShortUa
        ? {
            en: !!aboutShortEn ? formatTextSanity(aboutShortEn) : null,
            ua: !!aboutShortUa ? formatTextSanity(aboutShortUa) : null,
          }
        : null,

    aboutFull:
      !!aboutFullEn && !!aboutFullUa
        ? {
            en: !!aboutFullEn ? formatTextSanity(aboutFullEn) : null,
            ua: !!aboutFullUa ? formatTextSanity(aboutFullUa) : null,
          }
        : null,
  };
};

export const galleryPhotoFormattedFn = ({ galleryPhotoList, _id }) => {
  return {
    id: _id,
    galleryPhotoList: galleryPhotoList
      ? galleryPhotoList.map(({ photoLink, _key }) => {
          return {
            id: _key,
            photoLink: !!photoLink ? formatMediaLinkSanity(photoLink) : null,
          };
        })
      : null,
  };
};

export const galleryVideoFormattedFn = ({ galleryVideoList, _id }) => {
  return {
    id: _id,
    galleryVideoList: galleryVideoList
      ? galleryVideoList.map(({ videoLink, _key }) => {
          const currentVideoLink = videoLink.includes('youtube')
            ? videoLink
            : formatMediaLinkSanity(videoLink);

          return {
            id: _key,
            videoLink: !!videoLink ? currentVideoLink : null,
          };
        })
      : null,
  };
};

export const reportingFormattedFn = ({ reportingList, _id }) => {
  return {
    id: _id,
    reportingList: reportingList
      ? reportingList.map(
          ({ reportingMonth, financialReport, resultsReport, _key }) => {
            return {
              id: _key,
              reportingMonth: !!reportingMonth
                ? { en: reportingMonth.en, ua: reportingMonth.ua }
                : null,
              financialReport: !!financialReport
                ? formatFileSanity(financialReport)
                : null,
              resultsReport: !!resultsReport
                ? formatFileSanity(resultsReport)
                : null,
            };
          }
        )
      : null,
  };
};
