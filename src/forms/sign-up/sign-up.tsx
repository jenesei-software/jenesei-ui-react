import { useAxiosWebId } from '@jenesei-software/jenesei-web-id-api'
import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import moment from 'moment'

import { Icon } from '@assets/library-icon'

import { Form } from '@forms/default'

import { Button } from '@components/button'
import { DatePicker } from '@components/date'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Toggle } from '@components/toggle'
import { Typography } from '@components/typography'

import {
  validationCountryCode,
  validationDateOfBirthday,
  validationEmailWithCheck,
  validationLoginWithCheck,
  validationPassword,
  validationPhone,
  validationUserAgreement,
} from '@functions/schema'

import { FormSignUpProps } from '.'

export const FormSignUp: React.FC<FormSignUpProps> = (props) => {
  const { axiosInstance } = useAxiosWebId()

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
    login: validationLoginWithCheck(axiosInstance),
    email: validationEmailWithCheck(axiosInstance),
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
      <>
        <Typography weight={600} variant="h4">
          Create an account
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
              <Stack flexDirection="column" gap="4px">
                <>
                  <Typography variant="h7">Date of Birthday</Typography>
                  <DatePicker
                    placeholder="Choice your date of birthday"
                    id={field.name}
                    name={field.name}
                    isOnClickClose
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
              </Stack>
            )
          }}
        </form.Field>
        <form.Field
          name="email"
          validators={{
            onBlurAsync: validationSchema.email,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <>
                <Typography variant="h7">Email</Typography>
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
              </>
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="login"
          validators={{
            onBlurAsync: validationSchema.login,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <>
                <Typography variant="h7">Login</Typography>
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
              </>
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="currentPassword"
          validators={{
            onChangeListenTo: ['confirmPassword'],
            onChange: validationSchema.currentPassword,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <>
                <Typography variant="h7">Current password</Typography>
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
              </>
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="confirmPassword"
          validators={{
            onChangeListenTo: ['currentPassword'],
            onBlurListenTo: ['currentPassword'],
            onChange: ({ value, fieldApi }) => {
              if (value !== fieldApi.form.getFieldValue('currentPassword')) {
                return 'Passwords do not match'
              }
              return undefined
            },
          }}
        >
          {(field) => {
            const currentPasswordInfo = field.form.getFieldMeta('currentPassword')
            return (
              <Stack flexDirection="column" gap="4px">
                <>
                  <Typography variant="h7">Confirm password</Typography>
                  <Input
                    autocomplete="new-password"
                    isDisabled={!currentPasswordInfo?.isTouched || !!currentPasswordInfo?.errors.length}
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
                </>
              </Stack>
            )
          }}
        </form.Field>
        <form.Field
          name="isUserAgreement"
          validators={{
            onChange: validationSchema.isUserAgreement,
          }}
        >
          {(field) => (
            <Stack alignItems="center">
              <>
                <Typography flex="1" variant="h7">
                  User agreement
                </Typography>
                <Toggle
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  value={field.state.value}
                  onChange={field.handleChange}
                  genre={'product'}
                  size={'small'}
                />
              </>
            </Stack>
          )}
        </form.Field>
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              width="100%"
              type="submit"
              isOnlyLoading
              isDisabled={!canSubmit || isSubmitting || props.isLoading}
              isLoading={isSubmitting || props.isLoading}
              genre={'greenTransparent'}
              size={defaultSize || 'medium'}
            >
              <Typography variant="h7">SignUp</Typography>
            </Button>
          )}
        </form.Subscribe>
        <form.Subscribe selector={(state) => [state.isSubmitting]}>
          {([isSubmitting]) => (
            <Stack alignItems="center">
              <Typography flex="1" weight={500} variant="h7">
                {'Already have an account?'}
              </Typography>
              <Button
                type="button"
                isDisabled={isSubmitting || props.isLoading}
                genre={defaultGenre || 'grayBorder'}
                size={defaultSize || 'medium'}
                onClick={() => {
                  props.onSignIn()
                }}
              >
                <Typography variant="h7">Sign in</Typography>
              </Button>
            </Stack>
          )}
        </form.Subscribe>
      </>
    </Form>
  )
}
