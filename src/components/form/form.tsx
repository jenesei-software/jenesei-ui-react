import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { getExample } from 'awesome-phonenumber'
import moment from 'moment'
import { z } from 'zod'

import { Icon } from '@assets/library-icon'

import { Button } from '@components/button'
import { DatePicker } from '@components/date'
import { Stack } from '@components/flex'
import { Input, InputPhone } from '@components/input'
import { SelectCountry } from '@components/select'
import { Typography } from '@components/typography'

const validationSchema = z.object({
  dateOfBirthday: z
    .number()
    .int()
    .min(1, 'Date of birthday is required')
    .max(moment().subtract(18, 'years').valueOf(), 'Date of birthday must be at least 18 years ago')
    .refine((value) => value <= moment().valueOf(), 'Date cannot be in the future'),
  countryCode: z.string().trim().min(1, 'Country is required'),
  firstName: z
    .string()
    .trim()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(128, 'First name must be at most 128 characters')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  lastName: z
    .string()
    .trim()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(128, 'Last name must be at most 128 characters')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  login: z
    .string()
    .trim()
    .min(1, 'Login is required')
    .min(2, 'Login must be at least 1 characters')
    .max(12, 'Login must be at most 12 characters')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email('Email is not valid')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  currentPassword: z
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
    .refine((value) => !value.includes(' '), 'No Spaces!'),
})

export const Form = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      currentPassword: '',
      confirmPassword: '',
      phone: '',
      countryCode: '',
      countryDialCode: '',
      dateOfBirthday: 0,
    },
    onSubmit: async ({ value }) => {
      const result = {
        firstName: value.firstName.trim(),
        lastName: value.lastName.trim(),
        login: value.login.trim(),
        email: value.email.trim(),
        currentPassword: value.currentPassword.trim(),
        confirmPassword: value.confirmPassword.trim(),
        phone: value.phone.trim(),
        country: value.countryCode.trim(),
        countryDialCode: value.countryDialCode.trim(),
      }
      console.log(result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: zodValidator(),
  })
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <Stack gap="6px" flexDirection="column" w="100%" maxW="500px">
        <>
          <Typography color="black100" variant="h5">
            Date of Birthday
          </Typography>
          <form.Field
            name="dateOfBirthday"
            validators={{
              onBlur: validationSchema.shape.dateOfBirthday,
            }}
          >
            {(field) => {
              const startDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
              const endDate = moment.utc().startOf('year').valueOf()
              return (
                <>
                  <DatePicker
                    placeholder="Choice your date of birthday"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre={'grayBorder'}
                    startDate={startDate}
                    endDate={endDate}
                    size={'medium'}
                    inputProps={{
                      isError: !!field.state.meta.errors.length,
                      errorMessage: field.state.meta.errors?.[0]?.toString(),
                    }}
                  />
                </>
              )
            }}
          </form.Field>
          <Typography color="black100" variant="h5">
            Country
          </Typography>
          <form.Field
            name="countryCode"
            validators={{
              onChange: validationSchema.shape.countryCode,
            }}
          >
            {(field) => (
              <>
                <SelectCountry
                  placeholder="Choice your country"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(countryCode, countryDialCode) => {
                    field.handleChange(countryCode)
                    field.form.setFieldValue('countryDialCode', countryDialCode)
                  }}
                  genre={'grayBorder'}
                  size={'medium'}
                  inputProps={{
                    isError: !!field.state.meta.errors.length,
                    errorMessage: field.state.meta.errors?.[0]?.toString(),
                  }}
                />
              </>
            )}
          </form.Field>
          <Typography color="black100" variant="h5">
            Phone
          </Typography>
          <form.Field
            name="phone"
            validators={{
              onChangeListenTo: ['countryDialCode', 'countryCode'],
              onBlurListenTo: ['countryDialCode', 'countryCode'],
              onChange: (value) => {
                const countryCode = value.fieldApi.form.getFieldValue('countryCode')
                const countryDialCode = value.fieldApi.form.getFieldValue('countryDialCode')

                const data = countryCode ? getExample(countryCode) : null

                const numberWithoutDialCode = (data?.number?.e164.replace(countryDialCode, '').trim() ?? '').replace(
                  ' ',
                  '',
                )

                const schema = z
                  .string()
                  .trim()
                  .min(1, 'Phone number is required')
                  .refine(
                    (val) => val.length == numberWithoutDialCode.length,
                    'The phone number is not according to your country standard',
                  )
                  .refine((val) => !val.includes(' '), 'No Spaces!')

                const validationResult = schema.safeParse(value.value)

                if (!validationResult.success) {
                  return validationResult.error.errors[0].message
                }
              },
            }}
          >
            {(field) => {
              const countryCode = field.form.getFieldValue('countryCode')
              const countryDialCode = field.form.getFieldValue('countryDialCode')
              return (
                <>
                  {field.state.value}
                  <InputPhone
                    countryDialCode={countryDialCode}
                    countryCode={countryCode}
                    placeholder="Write the phone"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre={'grayBorder'}
                    size={'medium'}
                    isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                    postfixChildren={{
                      width: '32px',
                      left: '4px',
                      right: '0px',
                      children: (
                        <Stack
                          alignItems={'center'}
                          justifyContent={'center'}
                          p={'2px'}
                          style={{ borderRadius: '0px 6px 6px 0px' }}
                          bg={'black60'}
                          minH={'100%'}
                          h={'100%'}
                        >
                          <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Call'} />
                        </Stack>
                      ),
                    }}
                  />
                </>
              )
            }}
          </form.Field>
          <Typography color="black100" variant="h5">
            First name
          </Typography>
          <form.Field
            name="firstName"
            validators={{
              onChange: validationSchema.shape.firstName,
            }}
          >
            {(field) => (
              <>
                <Input
                  placeholder="Write the first name"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={'grayBorder'}
                  size={'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                />
              </>
            )}
          </form.Field>
          <Typography color="black100" variant="h5">
            Last name
          </Typography>
          <form.Field
            name="lastName"
            validators={{
              onChange: validationSchema.shape.lastName,
            }}
          >
            {(field) => {
              return (
                <Input
                  placeholder="Write the last name"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={'grayBorder'}
                  size={'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                />
              )
            }}
          </form.Field>
          <Typography color="black100" variant="h5">
            Email
          </Typography>
          <form.Field
            name="email"
            validators={{
              onChange: validationSchema.shape.email,
            }}
          >
            {(field) => (
              <Input
                placeholder="Write the Email"
                type="email"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                genre={'grayBorder'}
                size={'medium'}
                isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                errorMessage={field.state.meta.errors?.[0]?.toString()}
              />
            )}
          </form.Field>
          <Typography color="black100" variant="h5">
            Login
          </Typography>
          <form.Field
            name="login"
            validators={{
              onChange: validationSchema.shape.login,
            }}
          >
            {(field) => (
              <Input
                placeholder="Write the login"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                genre={'grayBorder'}
                size={'medium'}
                isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                errorMessage={field.state.meta.errors?.[0]?.toString()}
              />
            )}
          </form.Field>
          <Typography color="black100" variant="h5">
            Current password
          </Typography>
          <form.Field
            name="currentPassword"
            validators={{
              onChangeListenTo: ['confirmPassword'],
              onChange: validationSchema.shape.currentPassword,
            }}
          >
            {(field) => (
              <Input
                autocomplete="new-password"
                type="password"
                placeholder="Write the current password"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                genre={'grayBorder'}
                size={'medium'}
                isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                errorMessage={field.state.meta.errors?.[0]?.toString()}
                postfixChildren={{
                  width: '32px',
                  left: '4px',
                  right: '0px',
                  children: (
                    <Stack
                      alignItems={'center'}
                      justifyContent={'center'}
                      p={'2px'}
                      style={{ borderRadius: '0px 6px 6px 0px' }}
                      bg={'black60'}
                      minH={'100%'}
                      h={'100%'}
                    >
                      <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Password'} />
                    </Stack>
                  ),
                }}
              />
            )}
          </form.Field>
          <Typography color="black100" variant="h5">
            Confirm password
          </Typography>
          <form.Field
            name="confirmPassword"
            validators={{
              onChangeListenTo: ['currentPassword'],
              onChange: ({ value, fieldApi }) => {
                if (value !== fieldApi.form.getFieldValue('currentPassword')) {
                  return 'Passwords do not match'
                }
                return undefined
              },
            }}
          >
            {(field) => {
              const currentPassword = field.form.getFieldValue('currentPassword')
              return (
                <Input
                  autocomplete="new-password"
                  isDisabled={!currentPassword}
                  type="password"
                  placeholder="Write the confirm password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={'grayBorder'}
                  size={'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                  postfixChildren={{
                    width: '32px',
                    left: '4px',
                    right: '0px',
                    children: (
                      <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        p={'2px'}
                        style={{ borderRadius: '0px 6px 6px 0px' }}
                        bg={'black60'}
                        minH={'100%'}
                        h={'100%'}
                      >
                        <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Password'} />
                      </Stack>
                    ),
                  }}
                />
              )
            }}
          </form.Field>
          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <>
                <Button width="100%" type="submit" isDisabled={!canSubmit} genre={'greenTransparent'} size={'small'}>
                  {isSubmitting ? '...' : 'Submit'}
                </Button>
                <Button type="reset" width="100%" genre={'grayBorder'} size={'small'} onClick={() => form.reset()}>
                  Reset
                </Button>
              </>
            )}
          </form.Subscribe>
        </>
      </Stack>
    </form>
  )
}
