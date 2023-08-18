import * as Yup from 'yup';

const PHONE_REGEXP = /^\+380\d{9}$|^\+380\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

const PHONE_REGEXP_PARTNER =
  /^\+\d{1,3}\s?\d{2,3}\s?\d{3}\s?\d{2}\s?\d{2}$|^\+\d{10,12}$/;

const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const partnerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name.'),
  company: Yup.string()
    .min(3, 'Field must be at least 3 characters.')
    .required('Please enter your company.'),
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
  name: Yup.string().required('Please enter your name.'),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .matches(
      PHONE_REGEXP,
      'Invalid phone number. Please use the format +380XXXXXXXXX.'
    ),
  gridSize: Yup.string().required('Please enter grid size.'),
  typeBase: Yup.string().required('Please enter type base.'),
  material: Yup.string().required('Please enter material.'),
  color: Yup.string().required('Please enter color.'),
  loops: Yup.string().required('Please enter loops.'),
});

export const reviewValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name.'),
  email: Yup.string()
    .matches(EMAIL_REGEXP, 'Incorrect email address.')
    .required('Please enter your email.'),
  comment: Yup.string().required('Please enter your comment.'),
});
