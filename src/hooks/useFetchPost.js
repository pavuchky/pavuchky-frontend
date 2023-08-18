import axios from 'axios';
import useLoader from './useLoader';

axios.defaults.baseURL = 'https://pavuchky-backend.onrender.com';

export const useFetchPost = () => {
  const { isLoading, setLoading } = useLoader();

  const fetchPost = async (url, data) => {
    setLoading(true);

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, fetchPost };
};
