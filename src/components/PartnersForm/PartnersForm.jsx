import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useFetchPost } from 'hooks/useFetchPost';
import { partnerValidationSchema } from '../../utils/validationSchema';
import { Gratitude } from 'components/Gratitude/Gratitude';
import { CustomInput } from 'components/CustomInput/CustomInput';
import heart from '../../assets/images/gratitude/gratitude_tablet.svg';
import {
  FormBtn,
  FormContainer,
  FormInfo,
  FormList,
  FormTitle,
  SupportImg,
} from './PartnersForm.styled';

export const PartnersForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const { t } = useTranslation();
  const { isLoading, fetchPost } = useFetchPost();

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      comment: '',
    },
    validationSchema: partnerValidationSchema,
    onSubmit: async values => {
      try {
        await fetchPost('/partners', values);
        setSubmitted(true);
        toast.success(t('forms.success'));
      } catch (error) {
        setSubmitted(false);
        toast.error(t('forms.error'));
      }
    },
  });
  const { name, company, email, phone, comment } = formik.values;

  return (
    <>
      {isLoading ? (
        <div style={{ height: '300px' }}>Loading...</div>
      ) : submitted ? (
        <Gratitude
          title={t('partnerForm.thank')}
          text={t('forms.contact')}
          variant="primary"
        />
      ) : (
        <FormContainer>
          <div>
            <FormTitle>{t('forms.data')}</FormTitle>
            <FormList onSubmit={formik.handleSubmit}>
              <label>
                <CustomInput
                  title={t('forms.name')}
                  type="text"
                  name="name"
                  placeholder={t('forms.namePl')}
                  autoComplete="username"
                  value={name}
                  onChange={formik.handleChange}
                  hasValue={name.length > 0}
                  touched={formik.touched.name}
                  error={formik.errors.name}
                />
              </label>
              <label>
                <CustomInput
                  title={t('partnerForm.activity')}
                  type="text"
                  name="company"
                  placeholder={t('partnerForm.activityPl')}
                  autoComplete="off"
                  value={company}
                  onChange={formik.handleChange}
                  hasValue={company.length > 0}
                  touched={formik.touched.company}
                  error={formik.errors.company}
                />
              </label>
              <label>
                <CustomInput
                  title="E-mail"
                  type="email"
                  name="email"
                  placeholder="ukrain@gmail.com"
                  autoComplete="username"
                  value={email}
                  onChange={formik.handleChange}
                  hasValue={email.length > 0}
                  touched={formik.touched.email}
                  error={formik.errors.email}
                />
              </label>
              <label>
                <CustomInput
                  title={t('forms.number')}
                  type="text"
                  name="phone"
                  placeholder={t('forms.numberPl')}
                  autoComplete="tel"
                  value={phone}
                  onChange={formik.handleChange}
                  hasValue={phone.length > 0}
                  touched={formik.touched.phone}
                  error={formik.errors.phone}
                />
              </label>
              <label>
                <CustomInput
                  title={t('forms.comments')}
                  type="text"
                  name="comment"
                  placeholder={t('forms.commentsPl')}
                  autoComplete="off"
                  value={comment}
                  onChange={formik.handleChange}
                  hasValue={comment.length > 0}
                />
              </label>
              <FormInfo>{t('forms.info')}</FormInfo>
              <FormBtn type="submit">{t('forms.submit')}</FormBtn>
            </FormList>
          </div>
          {isDesktop && <SupportImg src={heart} alt="support" />}
        </FormContainer>
      )}
    </>
  );
};
