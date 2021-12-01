import * as Yup from 'yup';
import { ERRORMESSAGES } from '../../theme';

export const ValidationForSignInForm = Yup.object({
  email: Yup.string()
    .email(ERRORMESSAGES.email)
    .required(ERRORMESSAGES.required),
  password: Yup.string()
    .min(4, ERRORMESSAGES.passwordMin)
    .required(ERRORMESSAGES.passwordMin),
});
