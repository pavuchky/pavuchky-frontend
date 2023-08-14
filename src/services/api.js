import axios from 'axios';

axios.defaults.baseURL = 'https://pavuchky-backend.onrender.com';

export const addPartner = async values => {
  try {
    const { data } = await axios.post('/partners', values);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addOrder = async values => {
  try {
    const { data } = await axios.post('/order', values);
    return data;
  } catch (error) {
    console.error(error);
  }
};
