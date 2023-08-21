import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useFetchPost } from 'hooks/useFetchPost';
import { reviewValidationSchema } from 'utils/validationSchema';
import { CustomInput } from 'components/CustomInput/CustomInput';
import svg from '../../assets/images/sprite.svg';
import { Loader } from 'components/Loader/Loader';
import {
  FormBtn,
  FormContainer,
  FormInfo,
  FormList,
  FormPhoto,
  FormSubList,
  FormTitle,
  PhotoContainer,
  PhotoText,
  PhotoTitle,
  TitleContainer,
} from './ReviewForm.styled';
import { Navigate } from 'react-router-dom';

export const ReviewForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const { t } = useTranslation();
  const { isLoading, fetchPost } = useFetchPost();

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      comment: '',
      photo: '',
    },
    validationSchema: reviewValidationSchema(t),
    onSubmit: async values => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('comment', values.comment);
        formData.append('photo', values.photo);

        await fetchPost('/rewie', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setSubmitted(true);
        toast.success(t('forms.success'));
      } catch (error) {
        setSubmitted(false);
        toast.error(t('forms.error'));
      }
    },
  });
  const { name, email, photo, comment } = formik.values;

  const handleDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    formik.setFieldValue('photo', file);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : submitted ? (
        <Navigate
          to="/gratitude"
          state={{
            title: `${t('feedback.thank')}`,
          }}
        />
      ) : (
        <FormContainer>
          <TitleContainer>
            <FormTitle>{t('feedback.write')}</FormTitle>
            {isTablet && <p>{t('feedback.titleThank')}</p>}
            {isDesktop && <p>{t('feedback.important')}</p>}
          </TitleContainer>

          <FormList onSubmit={formik.handleSubmit}>
            <FormSubList>
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
                  title={t('feedback.feedback')}
                  type="text"
                  name="comment"
                  placeholder={t('feedback.necessarily')}
                  autoComplete="off"
                  value={comment}
                  onChange={formik.handleChange}
                  hasValue={comment.length > 0}
                  touched={formik.touched.comment}
                  error={formik.errors.comment}
                />
              </label>
            </FormSubList>
            <FormPhoto>
              <div>
                <PhotoTitle>{t('feedback.photo')}</PhotoTitle>
                <PhotoText>
                  {t('feedback.drag')}
                  <span>{t('feedback.here')}</span>
                </PhotoText>
              </div>

              <PhotoContainer
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                isDragging={isDragging}
              >
                <input
                  type="file"
                  name="photo"
                  onChange={event => {
                    formik.setFieldValue('photo', event.target.files[0]);
                  }}
                />
                {photo ? (
                  <img src={URL.createObjectURL(photo)} alt="Обране фото" />
                ) : !isDesktop ? (
                  <svg>
                    <use href={svg + '#plus'}></use>
                  </svg>
                ) : (
                  <svg>
                    <use href={svg + '#plus-desk'}></use>
                  </svg>
                )}
              </PhotoContainer>
            </FormPhoto>
            <FormInfo>{t('forms.review')}</FormInfo>
            <FormBtn type="submit">{t('feedback.submit')}</FormBtn>
          </FormList>
        </FormContainer>
      )}
    </>
  );
};
