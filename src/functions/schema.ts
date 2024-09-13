import { userApi } from '@jenesei-software/jenesei-web-id-api'
import { AxiosInstance } from 'axios'
import moment from 'moment'
import * as yup from 'yup'

export const validationDateOfBirthday = (minAge: number) =>
  yup
    .number()
    .required('Date of birthday is required')
    .typeError('Date of birthday is required')
    .integer('Date of birthday is required')
    .test('valid-date', 'Date of birthday is required', (value) => {
      if (value === 0) {
        return false
      }
      // Проверка для остальных значений
      return value !== undefined && value !== null
    })
    .max(moment().subtract(minAge, 'years').valueOf(), `Date of birthday must be at least ${minAge} years ago`)
    .test('is-not-future', 'Date cannot be in the future', (value) => {
      if (!value) return false // Если значение не задано
      return value <= moment().valueOf()
    })

export const validationCountryCode = yup.string().trim().min(1, 'Country is required')

export const validationFirstName = yup
  .string()
  .trim()
  .required('First name is required')
  .min(2, 'First name must be at least 2 characters')
  .max(128, 'First name must be at most 128 characters')

export const validationUserAgreement = yup.boolean().isTrue('Required field')

export const validationPhone = (phoneLength: number) =>
  yup
    .string()
    .trim()
    .required('Phone number is required')
    .test(
      'is-correct-length',
      'The phone number is not according to your country standard',
      (val) => val?.length === phoneLength,
    )
    .test('no-spaces', 'No Spaces!', (val) => !val?.includes(' '))

export const validationLastName = yup
  .string()
  .trim()
  .required('Last name is required')
  .min(2, 'Last name must be at least 2 characters')
  .max(128, 'Last name must be at most 128 characters')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))

export const validationCode = yup
  .string()
  .trim()
  .required('Code is required')
  .min(5, 'Code must be at least 5 characters')
  .max(5, 'Code must be at most 5 characters')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))

export const validationNickName = yup
  .string()
  .trim()
  .required('Login is required')
  .min(2, 'Login must be at least 2 characters')
  .max(12, 'Login must be at most 12 characters')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))

export const validationNickNameWithCheck = (axiosInstance: AxiosInstance) =>
  yup
    .string()
    .trim()
    .required('Login is required')
    .min(2, 'Login must be at least 2 characters')
    .max(12, 'Login must be at most 12 characters')
    .test('no-spaces', 'No Spaces!', (v) => !v?.includes(' '))
    .test('login-check', 'Login is already taken', async function (v) {
      const { createError } = this

      if (!v) {
        return createError({ message: 'Login is required' })
      }

      if (v.length < 2) {
        return createError({ message: 'Login must be at least 2 characters' })
      }

      if (v.length > 12) {
        return createError({ message: 'Login must be at most 12 characters' })
      }

      if (v.includes(' ')) {
        return createError({ message: 'No Spaces allowed!' })
      }

      try {
        const response = await userApi(axiosInstance).getUserCheckNickname({ path: { nickname: v } })
        return !response.data.value
      } catch (error) {
        return createError({ message: 'Unable to validate nickname' })
      }
    })

export const validationEmail = yup
  .string()
  .trim()
  .required('Email is required')
  .email('Email is not valid')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))

export const validationEmailWithCheck = (axiosInstance: AxiosInstance) =>
  yup
    .string()
    .required('Email is required')
    .email('Email is not valid')
    .test('no-spaces', 'No Spaces allowed!', (value) => !value?.includes(' '))
    .trim()
    .test('email-check', 'Email is already taken', async function (value) {
      const { createError } = this

      if (!value) {
        return createError({ message: 'Email is required' })
      }

      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        return createError({ message: 'Email is not valid' })
      }

      if (value.includes(' ')) {
        return createError({ message: 'No Spaces allowed!' })
      }

      try {
        const response = await userApi(axiosInstance).getUserCheckEmail({
          path: { email: value },
        })
        return !response.data.value
      } catch (error) {
        return createError({ message: 'Unable to validate email' })
      }
    })

export const validationPassword = yup
  .string()
  .trim()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password must be at most 128 characters')
  .test('has-uppercase', 'Password must contain at least one uppercase letter', (password) =>
    /[A-Z]/.test(password || ''),
  )
  .test('has-lowercase', 'Password must contain at least one lowercase letter', (password) =>
    /[a-z]/.test(password || ''),
  )
  .test('has-number', 'Password must contain at least one number', (password) => /[0-9]/.test(password || ''))
  .test('has-special-char', 'Password must contain at least one unique character', (password) =>
    /[!()@#$%^&*_-]/.test(password || ''),
  )
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))
