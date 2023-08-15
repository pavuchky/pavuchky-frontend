import axios from 'axios';

axios.defaults.baseURL = 'https://pavuchky-backend.onrender.com';

export const addPartner = async values => {
  try {
    const { data } = await axios.post('/partners', values);
    return data;
  } catch (error) {
    throw error;
  }
};

export const addOrder = async values => {
  try {
    const { data } = await axios.post('/order', values);
    return data;
  } catch (error) {
    throw error;
  }
};

export const addReview = async values => {
  try {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('comment', values.comment);
    formData.append('photo', values.photo);

    const { data } = await axios.post('/rewie', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
