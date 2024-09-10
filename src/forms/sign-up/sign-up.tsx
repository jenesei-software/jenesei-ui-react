import { useAxiosWebId } from '@jenesei-software/jenesei-web-id-api'
import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import moment from 'moment'

import { Form } from '@forms/default'

import { Button } from '@components/button'
import { DatePicker } from '@components/date'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Toggle } from '@components/toggle'
import { Typography } from '@components/typography'

import {
  validationDateOfBirthday,
  validationEmailWithCheck,
  validationNickNameWithCheck,
  validationPassword,
  validationUserAgreement,
} from '@functions/schema'

import { FormSignUpProps } from '.'

export const FormSignUp: React.FC<FormSignUpProps> = (props) => {
  const { axiosInstance } = useAxiosWebId()

  const form = useForm({
    defaultValues: {
      nickname: '',
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
        nickname: value.nickname.trim(),
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
    isUserAgreement: validationUserAgreement,
    nickname: validationNickNameWithCheck(axiosInstance),
    email: validationEmailWithCheck(axiosInstance),
    currentPassword: validationPassword,
  }

  return (
    <Form width={props.width} handleSubmit={form.handleSubmit}>
      <Stack flexDirection="column" alignItems="stretch" gap="100px">
        <Stack flexDirection="column" gap="10px">
          <Typography weight={700} variant="h1" color="black100">
            Create account
          </Typography>
          <Typography weight={400} variant="h8" color="black100">
            {'Already have an account? '}
            <Typography
              onClick={() => {
                props.onSignIn()
              }}
              cursor="pointer"
              weight={400}
              variant="h8"
              color="blueRest"
            >
              Sign In
            </Typography>
          </Typography>
        </Stack>
        {!props.isError ? (
          <Stack flexDirection="column" alignItems="stretch" gap="20px">
            <form.Field
              name="dateOfBirthday"
              validators={{
                onBlur: validationSchema.dateOfBirthday,
              }}
            >
              {(field) => {
                const startDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
                const endDate = moment.utc().add(1, 'year').startOf('year').valueOf()
                return (
                  <Stack flexDirection="column" gap="6px">
                    <DatePicker
                      placeholder="Date of Birth"
                      id={field.name}
                      name={field.name}
                      isOnClickClose
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={field.handleChange}
                      genre="blackBorder"
                      startDate={startDate}
                      endDate={endDate}
                      size="largeMedium"
                      inputProps={{
                        isError: !!field.state.meta.errors.length,
                        errorMessage: field.state.meta.errors?.[0]?.toString(),
                      }}
                    />
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
                <Stack flexDirection="column" gap="6px">
                  <Input
                    autocomplete="email"
                    placeholder="Email"
                    type="email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre="blackBorder"
                    size="largeMedium"
                    isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
                </Stack>
              )}
            </form.Field>
            <form.Field
              name="nickname"
              validators={{
                onBlurAsync: validationSchema.nickname,
              }}
            >
              {(field) => (
                <Stack flexDirection="column" gap="6px">
                  <Input
                    autocomplete="username"
                    placeholder="Login"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre="blackBorder"
                    size="largeMedium"
                    isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
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
                <Stack flexDirection="column" gap="6px">
                  <Input
                    autocomplete="new-password"
                    type="password"
                    placeholder="Password"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre="blackBorder"
                    size="largeMedium"
                    isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
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
                  <Stack flexDirection="column" gap="6px">
                    <Input
                      autocomplete="new-password"
                      isDisabled={!currentPasswordInfo?.isTouched || !!currentPasswordInfo?.errors.length}
                      type="password"
                      placeholder="Repeat password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={field.handleChange}
                      genre="blackBorder"
                      size="largeMedium"
                      isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                      errorMessage={field.state.meta.errors?.[0]?.toString()}
                    />
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
                <Stack alignItems="center" gap="15px">
                  <Toggle
                    isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                    value={field.state.value}
                    onChange={field.handleChange}
                    genre={'product'}
                    size={'small'}
                  />
                  <Typography flex="1" weight={400} variant="h7">
                    I agree to Jenesei
                    <Typography
                      onClick={() => {
                        props.onTermOfService()
                      }}
                      cursor="pointer"
                      weight={400}
                      variant="h7"
                      color="blueRest"
                    >
                      {' Terms of service '}
                    </Typography>
                    and
                    <Typography
                      onClick={() => {
                        props.onPrivacyPolicy()
                      }}
                      cursor="pointer"
                      weight={400}
                      variant="h7"
                      color="blueRest"
                    >
                      {' Privacy policy'}
                    </Typography>
                  </Typography>
                </Stack>
              )}
            </form.Field>

            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <Button
                  width="100%"
                  type="submit"
                  isLoading={isSubmitting || props.isLoading}
                  isOnlyLoading
                  isDisabled={!canSubmit || isSubmitting || props.isLoading}
                  genre="product"
                  size="largeMedium"
                >
                  <Typography variant="h7">Create an account</Typography>
                </Button>
              )}
            </form.Subscribe>
          </Stack>
        ) : (
          <Stack flexDirection="column" alignItems="stretch" gap="30px">
            <Typography cursor="pointer" weight={400} variant="h7" color="black100" textAlign="center">
              An unexpected error occurred
            </Typography>
            <Button
              width="100%"
              type="reset"
              isOnlyLoading
              genre="black"
              size="largeMedium"
              onClick={() => {
                form.reset()
                props.onRestore()
              }}
            >
              <Typography variant="h7">Restore</Typography>
            </Button>
          </Stack>
        )}
      </Stack>
    </Form>
  )
}
