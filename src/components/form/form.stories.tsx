import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import moment from 'moment'
import { useEffect } from 'react'
import 'styled-components'
import * as yup from 'yup'

import { Icon } from '@assets/library-icon'

import { Button } from '@components/button'
import { DatePicker } from '@components/date'
import { Stack } from '@components/flex'
import { Input, InputPhone } from '@components/input'
import { SelectCountry } from '@components/select'
import { Toggle } from '@components/toggle'
import { Typography } from '@components/typography'

import {
  validationCountryCode,
  validationDateOfBirthday,
  validationEmail,
  validationFirstName,
  validationLastName,
  validationLogin,
  validationPassword,
  validationPhone,
  validationUserAgreement,
} from '@functions/schema'

import { Form, FormProps } from '.'

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Form/Default',
}

export default meta
type Story = StoryObj<typeof Form>

const FormWrapper: React.FC<FormProps> = (props) => {
  const defaultSize = props.size
  const defaultGenre = props.genre

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
      lengthNumberWithoutCountryDialCode: 0,
      numberWithoutCountryDialCode: '',
      dateOfBirthday: 0,
      isUserAgreement: false,
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
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0],
    }),
  })

  useEffect(() => {
    console.log('form', form)
  }, [form, form.state])

  const validationSchema = {
    dateOfBirthday: validationDateOfBirthday(18),
    countryCode: validationCountryCode,
    isUserAgreement: validationUserAgreement,
    firstName: validationFirstName,
    lastName: validationLastName,
    login: validationLogin,
    email: validationEmail,
    currentPassword: validationPassword,
    phone: (phoneLength: number) => validationPhone(phoneLength),
  }

  return (
    <Form
      {...props}
      genre={defaultGenre || 'grayBorder'}
      size={defaultSize || 'medium'}
      handleSubmit={form.handleSubmit}
    >
      <Stack gap="6px" flexDirection="column" w="100%">
        <>
          <Typography variant="h7">Date of Birthday</Typography>
          <form.Field
            name="dateOfBirthday"
            validators={{
              onBlur: validationSchema.dateOfBirthday,
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
                    genre={defaultGenre || 'grayBorder'}
                    startDate={startDate}
                    endDate={endDate}
                    size={defaultSize || 'medium'}
                    inputProps={{
                      isError: !!field.state.meta.errors.length,
                      errorMessage: field.state.meta.errors?.[0]?.toString(),
                    }}
                  />
                </>
              )
            }}
          </form.Field>
          <Typography variant="h7">Country</Typography>
          <form.Field
            name="countryCode"
            validators={{
              onChange: validationSchema.countryCode,
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
                  onChange={(countryCode, countryDialCode, lengthNumberWithoutCountryDialCode) => {
                    field.handleChange(countryCode)
                    field.form.setFieldValue('countryDialCode', countryDialCode)
                    field.form.setFieldValue('lengthNumberWithoutCountryDialCode', lengthNumberWithoutCountryDialCode)
                  }}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  inputProps={{
                    isError: !!field.state.meta.errors.length,
                    errorMessage: field.state.meta.errors?.[0]?.toString(),
                  }}
                />
              </>
            )}
          </form.Field>
          <Typography variant="h7">Phone</Typography>
          <form.Field
            name="phone"
            validators={{
              onChangeListenTo: ['countryDialCode', 'countryCode', 'lengthNumberWithoutCountryDialCode'],
              onBlurListenTo: ['countryDialCode', 'countryCode', 'lengthNumberWithoutCountryDialCode'],
              onChange: (value) => {
                const lengthNumberWithoutCountryDialCode = value.fieldApi.form.getFieldValue(
                  'lengthNumberWithoutCountryDialCode',
                )
                if (!lengthNumberWithoutCountryDialCode) return
                const schema = validationSchema.phone(lengthNumberWithoutCountryDialCode)
                try {
                  schema.validateSync(value.value)

                  return undefined
                } catch (error) {
                  if (error instanceof yup.ValidationError) {
                    return error.message
                  }

                  return 'Validation error'
                }
              },
            }}
          >
            {(field) => {
              const countryCode = field.form.getFieldValue('countryCode')
              const countryDialCode = field.form.getFieldValue('countryDialCode')
              return (
                <>
                  <InputPhone
                    countryDialCode={countryDialCode}
                    countryCode={countryCode}
                    placeholder="Write the phone"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre={defaultGenre || 'grayBorder'}
                    size={defaultSize || 'medium'}
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
          <Typography variant="h7">First name</Typography>
          <form.Field
            name="firstName"
            validators={{
              onChange: validationSchema.firstName,
            }}
          >
            {(field) => (
              <>
                <Input
                  autocomplete="given-name"
                  placeholder="Write the first name"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                />
              </>
            )}
          </form.Field>
          <Typography variant="h7">Last name</Typography>
          <form.Field
            name="lastName"
            validators={{
              onChange: validationSchema.lastName,
            }}
          >
            {(field) => {
              return (
                <Input
                  autocomplete="family-name"
                  placeholder="Write the last name"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                />
              )
            }}
          </form.Field>
          <Typography variant="h7">Email</Typography>
          <form.Field
            name="email"
            validators={{
              onChange: validationSchema.email,
            }}
          >
            {(field) => (
              <Input
                autocomplete="email"
                placeholder="Write the Email"
                type="email"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                genre={defaultGenre || 'grayBorder'}
                size={defaultSize || 'medium'}
                isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                errorMessage={field.state.meta.errors?.[0]?.toString()}
              />
            )}
          </form.Field>
          <Typography variant="h7">Login</Typography>
          <form.Field
            name="login"
            validators={{
              onChange: validationSchema.login,
            }}
          >
            {(field) => (
              <Input
                autocomplete="username"
                placeholder="Write the login"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                genre={defaultGenre || 'grayBorder'}
                size={defaultSize || 'medium'}
                isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                errorMessage={field.state.meta.errors?.[0]?.toString()}
              />
            )}
          </form.Field>
          <Typography variant="h7">Current password</Typography>
          <form.Field
            name="currentPassword"
            validators={{
              onChangeListenTo: ['confirmPassword'],
              onChange: validationSchema.currentPassword,
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
                genre={defaultGenre || 'grayBorder'}
                size={defaultSize || 'medium'}
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
          <Typography variant="h7">Confirm password</Typography>
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
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
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
          <Typography variant="h7">User agreement</Typography>
          <form.Field
            name="isUserAgreement"
            validators={{
              onChange: validationSchema.isUserAgreement,
            }}
          >
            {(field) => (
              <Toggle
                isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                value={field.state.value}
                onChange={field.handleChange}
                genre={'product'}
                size={'small'}
              />
            )}
          </form.Field>
          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Stack flexDirection="row" gap="6px">
                <>
                  <Button
                    width="fit-content"
                    type="submit"
                    isDisabled={!canSubmit}
                    genre={'greenTransparent'}
                    size={defaultSize || 'medium'}
                  >
                    {isSubmitting ? '...' : 'Submit'}
                  </Button>
                  <Button
                    type="reset"
                    width="fit-content"
                    genre={defaultGenre || 'grayBorder'}
                    size={defaultSize || 'medium'}
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                </>
              </Stack>
            )}
          </form.Subscribe>
        </>
      </Stack>
    </Form>
  )
}

export const Default: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    genre: 'gray',
    size: 'medium',
    width: '500px',
  },
}
