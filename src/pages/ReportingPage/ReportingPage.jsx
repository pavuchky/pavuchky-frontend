import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';

const ReportingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer
        current={{ path: '/reporting', name: t('nav.reporting') }}
      />
    </>
  );
};

export default ReportingPage;
