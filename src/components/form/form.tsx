import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import moment from 'moment'
import { FC } from 'react'

import { Icon } from '@assets/library-icon'

import { Button } from '@components/button'
import { DatePicker } from '@components/date'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Toggle } from '@components/toggle'
import { Typography } from '@components/typography'

import {
  validationCountryCode,
  validationDateOfBirthday,
  validationEmail,
  validationLogin,
  validationPassword,
  validationPhone,
  validationUserAgreement,
} from '@functions/schema'

import { FormProps, FormSignInProps, FormSignUpProps, WrapperForm } from '.'

export const Form: FC<FormProps> = (props) => {
  const defaultSize = props.size
  const defaultGenre = props.genre

  return (
    <WrapperForm
      $width={props.width}
      $isPadding={props.isPadding}
      $isBorder={props.isBorder}
      $size={defaultSize}
      $genre={defaultGenre}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (props.handleSubmit) props.handleSubmit()
      }}
    >
      {props.children}
    </WrapperForm>
  )
}

export const FormSignIn: React.FC<FormSignInProps> = (props) => {
  const defaultSize = props.size
  const defaultGenre = props.genre

  const form = useForm({
    defaultValues: {
      nickname: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      const result = {
        nickname: value.nickname.trim(),
        password: value.password.trim(),
      }
      props.onSubmit(result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0],
    }),
  })

  const validationSchema = {
    nickname: validationLogin,
    password: validationPassword,
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
          <Typography color="black100" variant="h5">
            Login
          </Typography>
          <form.Field
            name="nickname"
            validators={{
              onChange: validationSchema.nickname,
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
          <Typography color="black100" variant="h5">
            Password
          </Typography>
          <form.Field
            name="password"
            validators={{
              onChangeListenTo: ['password'],
              onChange: validationSchema.password,
            }}
          >
            {(field) => (
              <Input
                autocomplete="current-password"
                type="password"
                placeholder="Write the password"
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
          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Stack flexDirection="column" gap="6px">
                <>
                  <Button
                    width="100%"
                    type="submit"
                    isDisabled={!canSubmit}
                    genre={'greenTransparent'}
                    size={defaultSize || 'medium'}
                  >
                    {isSubmitting ? '...' : 'Sign In'}
                  </Button>
                  <Button
                    type="reset"
                    width="100%"
                    genre={defaultGenre || 'grayBorder'}
                    size={defaultSize || 'medium'}
                    onClick={() => {
                      form.reset()
                      props.onBack()
                    }}
                  >
                    Back
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

export const FormSignUp: React.FC<FormSignUpProps> = (props) => {
  const defaultSize = props.size
  const defaultGenre = props.genre

  const form = useForm({
    defaultValues: {
      login: '',
      email: '',
      currentPassword: '',
      confirmPassword: '',
      lengthNumberWithoutCountryDialCode: 0,
      numberWithoutCountryDialCode: '',
      dateOfBirthday: 0,
      isUserAgreement: false,
    },
    onSubmit: async ({ value }) => {
      const result = {
        login: value.login.trim(),
        email: value.email.trim(),
        currentPassword: value.currentPassword.trim(),
        confirmPassword: value.confirmPassword.trim(),
        dateOfBirthday: value.dateOfBirthday,
      }
      props.onSubmit(result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0],
    }),
  })

  const validationSchema = {
    dateOfBirthday: validationDateOfBirthday(18),
    countryCode: validationCountryCode,
    isUserAgreement: validationUserAgreement,
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
          <Typography color="black100" variant="h5">
            Date of Birthday
          </Typography>
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
          <Typography color="black100" variant="h5">
            Email
          </Typography>
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
          <Typography color="black100" variant="h5">
            Login
          </Typography>
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
          <Typography color="black100" variant="h5">
            Current password
          </Typography>
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
          <Typography color="black100" variant="h5">
            User agreement
          </Typography>
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
              <Stack flexDirection="column" gap="6px">
                <>
                  <Button
                    width="100%"
                    type="submit"
                    isDisabled={!canSubmit}
                    genre={'greenTransparent'}
                    size={defaultSize || 'medium'}
                  >
                    {isSubmitting ? '...' : 'Submit'}
                  </Button>
                  <Button
                    width="100%"
                    type="reset"
                    genre={defaultGenre || 'grayBorder'}
                    size={defaultSize || 'medium'}
                    onClick={() => {
                      form.reset()
                      props.onBack()
                    }}
                  >
                    Back
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
