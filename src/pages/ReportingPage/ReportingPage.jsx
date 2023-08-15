import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';

import Reports from 'components/Reports/Reports';

const ReportingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer
        current={{ path: '/reporting', name: t('nav.reporting') }}
      />
      <Reports />
    </>
  );
};

export default ReportingPage;
