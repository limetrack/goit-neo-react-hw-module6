import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(3, 'Must be 3 characters or more')
    .max(50, 'Must be 50 characters or less'),
  number: Yup.string()
    .required('Required')
    .min(3, 'Must be 3 characters or more')
    .max(50, 'Must be 50 characters or less'),
});
