import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';
import { ReviewForm } from 'components/ReviewForm/ReviewForm';

const ReviewPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer current={{ path: '/review', name: t('pages.feedback') }} />
      <ReviewForm />
    </>
  );
};

export default ReviewPage;
