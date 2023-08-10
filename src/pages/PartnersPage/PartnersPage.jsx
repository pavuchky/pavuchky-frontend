import { PartnersForm } from 'components/PartnersForm/PartnersForm';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';
import { useTranslation } from 'react-i18next';

const PartnersPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer
        current={{ path: '/partners', name: t('pages.partnership') }}
      />
      <PartnersForm />
    </>
  );
};

export default PartnersPage;
