import * as yup from 'yup'
import { VALIDATE_STRING_VN } from '../Regex/regex'

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Họ và tên không được để trống')
    .max(50, 'Họ và tên bao gồm chữ, space và min là 3 ký tự, max là 50 ký tự')
    .min(3, 'Họ và tên bao gồm chữ, space tối thiểu 3 ký tự, tối đa 50 ký tự')
    .matches(VALIDATE_STRING_VN, 'registerSchema.Họ và tên bao gồm chữ, space và min là 3 ký tự, max là 50 ký tự'),

  username: yup
    .string()
    .required('Tên tài khoản không được để trống')
    .min(8, 'Tên tài khoản bao gồm chữ, số và min là 8 ký tự, max là 50 ký tự.')
    .max(50, 'Tên tài khoản bao gồm chữ, số và min là 8 ký tự, max là 50 ký tự')
    .matches(/^[a-zA-Z0-9]+$/, 'Tên tài khoản bao gồm chữ, số và min là 8 ký tự, max là 50 ký tự.'),
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Email không được để trống')
    .max(40, 'Email tối đa 40 ký tựx')
    .min(8, 'Email tối thiểu 8 ký tự')
    .matches(/^[\w\.]+@([\w]+\.)+[\w]{2,4}$/g, 'Email không hợp lệ'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu tối thiểu 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt, min là 8, max là 20 ký tự')
    .max(20, 'Mật khẩu tối thiểu 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt, min là 8, max là 20 ký tự')
    .matches(
      /^(?!.* )(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,20}$/,
      'Mật khẩu tối thiểu 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt, min là 8, max là 20 ký tự'
    ),
  confirmPassword: yup
    .string()
    .required('Xác nhận mật khẩu không được để trống')
    .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
})
