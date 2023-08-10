import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';
import { Gratitude } from 'components/Gratitude/Gratitude';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer current={{ path: '/about', name: t('pages.about-us') }} />
      <Gratitude />
    </>
  );
};

export default AboutPage;
