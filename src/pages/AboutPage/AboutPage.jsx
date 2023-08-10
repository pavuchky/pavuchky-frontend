import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer current={{ path: '/about', name: t('pages.about-us') }} />
    </>
  );
};

export default AboutPage;
