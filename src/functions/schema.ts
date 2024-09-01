import { userApi } from '@jenesei-software/jenesei-web-id-api'
import moment from 'moment'
import * as yup from 'yup'

export const validationDateOfBirthday = (minAge: number) =>
  yup
    .number()
    .typeError('Date of birthday is required')
    .integer('Date of birthday is required')
    .min(1, 'Date of birthday is required')
    .max(moment().subtract(minAge, 'years').valueOf(), `Date of birthday must be at least ${minAge} years ago`)
    .test('is-not-future', 'Date cannot be in the future', (value) => {
      if (!value) return false // Если значение не задано
      return value <= moment().valueOf()
    })

export const validationCountryCode = yup.string().trim().min(1, 'Country is required')

export const validationFirstName = yup
  .string()
  .trim()
  .min(1, 'First name is required')
  .min(2, 'First name must be at least 2 characters')
  .max(128, 'First name must be at most 128 characters')

export const validationUserAgreement = yup.boolean().isTrue('Required field')

export const validationPhone = (phoneLength: number) =>
  yup
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .test(
      'is-correct-length',
      'The phone number is not according to your country standard',
      (val) => val?.length === phoneLength,
    )
    .test('no-spaces', 'No Spaces!', (val) => !val?.includes(' '))

export const validationLastName = yup
  .string()
  .trim()
  .min(1, 'Last name is required')
  .min(2, 'Last name must be at least 2 characters')
  .max(128, 'Last name must be at most 128 characters')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))

export const validationLogin = yup
  .string()
  .trim()
  .min(1, 'Login is required')
  .min(2, 'Login must be at least 2 characters')
  .max(12, 'Login must be at most 12 characters')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))

export const validationLoginWithCheck = yup
  .string()
  .trim()
  .min(1, 'Login is required')
  .min(2, 'Login must be at least 2 characters')
  .max(12, 'Login must be at most 12 characters')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))
  .test('login-check', 'Login is already taken', async (value) => {
    if (!value) return true
    try {
      const response = await userApi.getUserCheckNickname({ path: { nickname: value } })
      return response.data.value
    } catch (error) {
      return false
    }
  })

export const validationEmail = yup
  .string()
  .trim()
  .min(1, 'Email is required')
  .email('Email is not valid')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))

export const validationEmailWithCheck = yup
  .string()
  .trim()
  .min(1, 'Email is required')
  .email('Email is not valid')
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))
  .test('email-check', 'Email is already taken', async (value) => {
    if (!value) return true
    try {
      const response = await userApi.getUserCheckEmail({ path: { email: value } })
      return response.data.value
    } catch (error) {
      return false
    }
  })

export const validationPassword = yup
  .string()
  .trim()
  .min(1, 'Current password is required')
  .min(8, 'Current password must be at least 8 characters')
  .max(128, 'Current password must be at most 128 characters')
  .test('has-uppercase', 'Current password must contain at least one uppercase letter', (password) =>
    /[A-Z]/.test(password || ''),
  )
  .test('has-lowercase', 'Current password must contain at least one lowercase letter', (password) =>
    /[a-z]/.test(password || ''),
  )
  .test('has-number', 'Current password must contain at least one number', (password) => /[0-9]/.test(password || ''))
  .test('has-special-char', 'Current password must contain at least one unique character', (password) =>
    /[!@#$%^&*_-]/.test(password || ''),
  )
  .test('no-spaces', 'No Spaces!', (value) => !value?.includes(' '))
