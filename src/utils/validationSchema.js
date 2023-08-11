import * as Yup from 'yup';

export const partnerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name.'),
  company: Yup.string().required('Please enter your company.'),
  email: Yup.string()
    .email('Incorrect email address.')
    .required('Please enter your email.'),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .matches(/^\+?[\d\s-]+$/, 'Invalid phone number'),
});

export const orderValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name.'),
  position: Yup.string().required('Please enter your position.'),
  militaryUnit: Yup.string().required('Please enter your military unit.'),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .matches(/^\+?[\d\s-]+$/, 'Invalid phone number'),
  gridSize: Yup.string().required('Please enter grid size.'),
  typeBase: Yup.string().required('Please enter type base.'),
  material: Yup.string().required('Please enter material.'),
  color: Yup.string().required('Please enter color.'),
  loops: Yup.string().required('Please enter loops.'),
});
