import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';

const ReviewPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer current={{ path: '/review', name: t('pages.feedback') }} />
    </>
  );
};

export default ReviewPage;
