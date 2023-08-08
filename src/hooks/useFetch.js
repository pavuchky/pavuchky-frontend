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
} from '../utils/fetchFormatFunctions';

// перелік доступних пропсів
const objectOfPropsAndRoutes = {
  posts: 'posts',
  contacts: 'contacts',
  reviews: 'reviews',
  statistic: 'statistic',
  partners: 'partners',
};

const useFetch = (type = 'history') => {
  const [data, setData] = useState(null);
  const { isLoading, setLoading } = useLoader();

  const fnsForFormat = {
    contacts: contactsFormattedFn,
    posts: postsFormattedFn,
    reviews: reviewsFormattedFn,
    statistic: statisticFormattedFn,
    partners: partnersFormattedFn,
  }[type];

  useEffect(() => {
    const query = `*[_type == "${type}"]`;

    setLoading(true);

    client
      .fetch(query)
      .then(data => {
        const formattedData = data.map(fnsForFormat);
        setData(formattedData[0]);
      })
      .catch(error => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (
    !Object.keys(objectOfPropsAndRoutes).some(el => el === type) &&
    typeof type !== 'string'
  ) {
    return new Error(
      `Invalid prop ${type} passed to useFetch. Expected a valid type and name of param. You can pass only ['history', 'band', 'contacts', 'music', 'releases', 'video']`
    );
  }

  return { isLoading, data };
};

export default useFetch;
