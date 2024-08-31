import moment from 'moment'
import { z } from 'zod'

export const validationDateOfBirthday = (minAge: number) =>
  z
    .number()
    .int()
    .min(1, 'Date of birthday is required')
    .max(moment().subtract(minAge, 'years').valueOf(), 'Date of birthday must be at least 18 years ago')
    .refine((value) => value <= moment().valueOf(), 'Date cannot be in the future')

export const validationCountryCode = z.string().trim().min(1, 'Country is required')

export const validationFirstName = z
  .string()
  .trim()
  .min(1, 'First name is required')
  .min(2, 'First name must be at least 2 characters')
  .max(128, 'First name must be at most 128 characters')

export const validationLastName = z
  .string()
  .trim()
  .min(1, 'Last name is required')
  .min(2, 'Last name must be at least 2 characters')
  .max(128, 'Last name must be at most 128 characters')
  .refine((value) => !value.includes(' '), 'No Spaces!')

export const validationLogin = z
  .string()
  .trim()
  .min(1, 'Login is required')
  .min(2, 'Login must be at least 1 characters')
  .max(12, 'Login must be at most 12 characters')
  .refine((value) => !value.includes(' '), 'No Spaces!')

export const validationEmail = z
  .string()
  .trim()
  .min(1, { message: 'Email is required' })
  .email('Email is not valid')
  .refine((value) => !value.includes(' '), 'No Spaces!')

export const validationPassword = z
  .string()
  .trim()
  .min(1, 'Current password is required')
  .min(8, { message: 'Current password must be at least 8 characters' })
  .max(128, {
    message: 'Current password must be at most 128 characters',
  })
  .refine((password) => /[A-Z]/.test(password), {
    message: 'Current password must be at high case',
  })
  .refine((password) => /[a-z]/.test(password), {
    message: 'Current password must be at low case',
  })
  .refine((password) => /[0-9]/.test(password), {
    message: 'Current password must be at contain numbers',
  })
  .refine((password) => /[!@#$%^&*_-]/.test(password), {
    message: 'Current password must be at contain unique characters',
  })
  .refine((value) => !value.includes(' '), 'No Spaces!')
