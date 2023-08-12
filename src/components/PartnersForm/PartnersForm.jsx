import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';
import { addPartner } from 'services/api';
import { partnerValidationSchema } from '../../utils/validationSchema';
import { Gratitude } from 'components/Gratitude/Gratitude';
import heart from '../../assets/images/heart.png';
import {
  FormBtn,
  FormContainer,
  FormInput,
  FormList,
  FormText,
  FormTitle,
  FormValidation,
  SupportImg,
} from './PartnersForm.styled';

export const PartnersForm = () => {
  const [submitted, setSubmitted] = useState(false);
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
        await addPartner(values);
        setSubmitted(true);
        toast.success('Дані успішно відправлені!');
      } catch (error) {
        setSubmitted(false);
        toast.error(
          'Виникла помилка під час відправки форми. Спробуйте ще раз.'
        );
      }
    },
  });
  const { name, company, email, phone, comment } = formik.values;

  return (
    <>
      {submitted ? (
        <Gratitude
          title="Дякуємо за підтримку!"
          text="Ми зв’яжемось з вами у найближчий час"
          variant="primary"
        />
      ) : (
        <FormContainer>
          <div>
            <FormTitle>Вкажіть ваші дані</FormTitle>
            <FormList onSubmit={formik.handleSubmit}>
              <div>
                <FormText>ПІБ</FormText>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Іващук Іван Петрович"
                  autoComplete="username"
                  value={name}
                  onChange={formik.handleChange}
                  hasValue={name.length > 0}
                />
                {formik.touched.name && formik.errors.name ? (
                  <FormValidation>{formik.errors.name}</FormValidation>
                ) : null}
              </div>
              <div>
                <FormText>Чим ви займаєтесь</FormText>
                <FormInput
                  type="text"
                  name="company"
                  placeholder="В мене будівельна компанія"
                  value={company}
                  onChange={formik.handleChange}
                  hasValue={company.length > 0}
                />
                {formik.touched.company && formik.errors.company ? (
                  <FormValidation>{formik.errors.company}</FormValidation>
                ) : null}
              </div>
              <div>
                <FormText>E-mail</FormText>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="ukrain@gmail.com"
                  autoComplete="username"
                  value={email}
                  onChange={formik.handleChange}
                  hasValue={email.length > 0}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormValidation>{formik.errors.email}</FormValidation>
                ) : null}
              </div>
              <div>
                <FormText>Ваш номер телефону</FormText>
                <FormInput
                  type="text"
                  name="phone"
                  placeholder="+380 98 200 77 49"
                  autoComplete="tel"
                  value={phone}
                  onChange={formik.handleChange}
                  hasValue={phone.length > 0}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <FormValidation>{formik.errors.phone}</FormValidation>
                ) : null}
              </div>
              <div>
                <FormText>Додаткові коментарі</FormText>
                <FormInput
                  type="text"
                  name="comment"
                  placeholder="Якщо потрібно"
                  autoComplete="off"
                  value={comment}
                  onChange={formik.handleChange}
                  hasValue={comment.length > 0}
                />
              </div>
              <FormBtn type="submit">Подати заявку</FormBtn>
            </FormList>
          </div>
          {isDesktop && <SupportImg src={heart} alt="support" />}
        </FormContainer>
      )}
    </>
  );
};
