import { useNavigate } from 'react-router-dom';

const useHash = () => {
  const navigate = useNavigate();

  const handleHashScroll = (hashLink, hashTimer = 500) => {
    navigate(`/#${hashLink}`);
    setTimeout(() => {
      const element = document.getElementById(hashLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, hashTimer);
  };

  return {
    handleHashScroll,
  };
};

export default useHash;
