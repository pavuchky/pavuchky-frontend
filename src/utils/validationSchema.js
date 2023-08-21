import * as Yup from 'yup';

const PHONE_REGEXP = /^\+380\d{9}$|^\+380\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

const PHONE_REGEXP_PARTNER =
  /^\+\d{1,3}\s?\d{2,3}\s?\d{3}\s?\d{2}\s?\d{2}$|^\+\d{10,12}$/;

const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const partnerValidationSchema = t =>
  Yup.object().shape({
    name: Yup.string()
      .required(t('validation.name'))
      .matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, t('validation.containName'))
      .test('is-not-empty', t('validation.empty'), value => {
        return !/^\s+$/.test(value);
      }),
    company: Yup.string()
      .min(3, t('validation.atLeast'))
      .required(t('validation.fill'))
      .test('is-not-empty', t('validation.empty'), value => {
        return !/^\s+$/.test(value);
      }),
    email: Yup.string()
      .matches(EMAIL_REGEXP, t('validation.incorrectEmail'))
      .required(t('validation.email')),
    phone: Yup.string()
      .required(t('validation.phone'))
      .matches(PHONE_REGEXP_PARTNER, t('validation.invalidPhonePartner')),
  });

export const orderValidationSchema = t =>
  Yup.object().shape({
    name: Yup.string()
      .required(t('validation.name'))
      .matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, t('validation.containName'))
      .test('is-not-empty', t('validation.empty'), value => {
        return !/^\s+$/.test(value);
      }),
    phone: Yup.string()
      .required(t('validation.phone'))
      .matches(PHONE_REGEXP, t('validation.invalidPhone')),
    gridSize: Yup.string()
      .required(t('validation.fill'))
      .test('is-not-empty', t('validation.empty'), value => {
        return !/^\s+$/.test(value);
      }),
    typeBase: Yup.string().required(t('validation.fill')),
    material: Yup.string().required(t('validation.fill')),
    color: Yup.string()
      .required(t('validation.fill'))
      .test('is-color-valid', t('validation.color'), value => {
        if (/^\d+%?$/.test(value) || /^\s+$/.test(value)) {
          return false;
        }
        return true;
      }),
    loops: Yup.string().required(t('validation.fill')),
  });

export const reviewValidationSchema = t =>
  Yup.object().shape({
    name: Yup.string()
      .required(t('validation.name'))
      .matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, t('validation.containName'))
      .test('is-not-empty', t('validation.empty'), value => {
        return !/^\s+$/.test(value);
      }),
    email: Yup.string()
      .matches(EMAIL_REGEXP, t('validation.incorrectEmail'))
      .required(t('validation.email')),
    comment: Yup.string()
      .required(t('validation.review'))
      .test('is-not-empty', t('validation.reviewEmpty'), value => {
        return !/^\s+$/.test(value);
      }),
  });
