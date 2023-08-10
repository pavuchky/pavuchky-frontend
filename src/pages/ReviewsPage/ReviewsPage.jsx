import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';

const ReviewsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer current={{ path: '/reviews', name: t('pages.reviews') }} />
    </>
  );
};

export default ReviewsPage;
