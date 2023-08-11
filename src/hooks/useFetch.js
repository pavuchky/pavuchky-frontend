/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { client } from '../client';
import useLoader from './useLoader';
import {
  contactsFormattedFn,
  postsFormattedFn,
  reviewsFormattedFn,
  statisticFormattedFn,
  partnersFormattedFn,
  aboutFormattedFn,
  galleryPhotoFormattedFn,
} from '../utils/fetchFormatFunctions';

// available props
const objectOfPropsAndRoutes = {
  about: 'about',
  posts: 'posts',
  contacts: 'contacts',
  reviews: 'reviews',
  statistic: 'statistic',
  partners: 'partners',
  galleryPhoto: 'galleryPhoto',
};

// usage
// const {isLoading, data} = useFetch("contacts")

const useFetch = (type = 'posts') => {
  const [data, setData] = useState(null);
  const { isLoading, setLoading } = useLoader();

  const fnsForFormat = {
    contacts: contactsFormattedFn,
    posts: postsFormattedFn,
    about: aboutFormattedFn,
    galleryPhoto: galleryPhotoFormattedFn,
    reviews: reviewsFormattedFn,
    statistic: statisticFormattedFn,
    partners: partnersFormattedFn,
  }[type];

  const errorMessage = `Invalid prop ${type} passed to useFetch. Expected a valid type and name of param. You can pass only ${JSON.stringify(
    Object.keys(objectOfPropsAndRoutes)
  )}`;

  useEffect(() => {
    const query = `*[_type == "${type}"]`;

    setLoading(true);

    async function fetchData() {
      try {
        if (
          !Object.keys(objectOfPropsAndRoutes).some(el => el === type) ||
          !(typeof type === 'string')
        ) {
          throw new TypeError(errorMessage);
        }

        const data = await client.fetch(query);
        const formattedData = data.map(fnsForFormat);
        setData(formattedData[0]);
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { isLoading, data };
};

export default useFetch;
