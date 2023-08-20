import * as Yup from 'yup';

const PHONE_REGEXP = /^\+380\d{9}$|^\+380\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

const PHONE_REGEXP_PARTNER =
  /^\+\d{1,3}\s?\d{2,3}\s?\d{3}\s?\d{2}\s?\d{2}$|^\+\d{10,12}$/;

const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const partnerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name.')
    .matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, 'Name can only contain letters.')
    .test('is-not-empty', 'Name cannot be empty.', value => {
      return !/^\s+$/.test(value);
    }),
  company: Yup.string()
    .min(3, 'Field must be at least 3 characters.')
    .required('Please enter your company.')
    .test('is-not-empty', 'The field cannot be empty.', value => {
      return !/^\s+$/.test(value);
    }),
  email: Yup.string()
    .matches(EMAIL_REGEXP, 'Incorrect email address.')
    .required('Please enter your email.'),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .matches(
      PHONE_REGEXP_PARTNER,
      'Invalid phone number. Please use the format +XXXXXXXXXXXX or +XXX XX XXX XX XX.'
    ),
});

export const orderValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name.')
    .matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, 'Name can only contain letters.')
    .test('is-not-empty', 'Name cannot be empty.', value => {
      return !/^\s+$/.test(value);
    }),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .matches(
      PHONE_REGEXP,
      'Invalid phone number. Please use the format +380XXXXXXXXX.'
    ),
  gridSize: Yup.string()
    .required('Please enter grid size.')
    .test('is-not-empty', 'Grid size cannot be empty.', value => {
      return !/^\s+$/.test(value);
    }),
  typeBase: Yup.string().required('Please enter type base.'),
  material: Yup.string().required('Please enter material.'),
  color: Yup.string()
    .required('Please enter color.')
    .test('is-color-valid', 'Invalid color.', value => {
      if (/^\d+%?$/.test(value) || /^\s+$/.test(value)) {
        return false;
      }
      return true;
    }),
  loops: Yup.string().required('Please enter loops.'),
});

export const reviewValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name.')
    .matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, 'Name can only contain letters.')
    .test('is-not-empty', 'Name cannot be empty.', value => {
      return !/^\s+$/.test(value);
    }),
  email: Yup.string()
    .matches(EMAIL_REGEXP, 'Incorrect email address.')
    .required('Please enter your email.'),
  comment: Yup.string()
    .required('Please enter your comment.')
    .test('is-not-empty', 'Your review cannot be empty.', value => {
      return !/^\s+$/.test(value);
    }),
});
