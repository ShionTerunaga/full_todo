import * as yup from 'yup';
import ja from './ja';
// 新規登録のバリデーションチェック
export const signupValidation = yup.object({
    name: yup.string().required(ja.signup.validationCheck.required),
    email: yup
        .string()
        .required(ja.signup.validationCheck.required)
        .email(ja.signup.validationCheck.email),
    password: yup
        .string()
        .required(ja.signup.validationCheck.required)
        .min(8, ja.signup.validationCheck.password)
});
// ログインのバリデーションチェック
export const loginValidation = yup.object({
    email: yup
        .string()
        .required(ja.signup.validationCheck.required)
        .email(ja.signup.validationCheck.email),
    password: yup
        .string()
        .required(ja.signup.validationCheck.required)
        .min(8, ja.signup.validationCheck.password)
});