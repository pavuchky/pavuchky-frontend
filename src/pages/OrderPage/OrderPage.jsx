import { useTranslation } from 'react-i18next';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';

const OrderPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PathDisplayer current={{ path: '/order', name: t('pages.ordering') }} />
      <OrderForm />
    </>
  );
};

export default OrderPage;
