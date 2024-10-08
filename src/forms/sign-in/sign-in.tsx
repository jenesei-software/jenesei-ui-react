import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Icon } from '@components/icon'
import { Input } from '@components/input'
import { Typography } from '@components/typography'

import { Form } from '@forms/default'

import { validationNickName, validationPassword } from '@functions/schema'

import { usePermission } from '@providers/provider-permission'

import { FormSignInProps } from '.'

export const FormSignIn: React.FC<FormSignInProps> = (props) => {
  const { isBiometricSupported } = usePermission()

  const form = useForm({
    defaultValues: {
      nickname: '',
      password: ''
    },
    onSubmit: async ({ value }) => {
      const result = {
        nickname: value.nickname.trim(),
        password: value.password.trim()
      }
      props.onSubmit(result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0]
    })
  })

  const validationSchema = {
    nickname: validationNickName,
    password: validationPassword
  }

  const isLoading =
    props.isLoadingAuthApp ||
    props.isLoadingBiometry ||
    props.isLoadingLogin ||
    props.isLoadingPasskey
  return (
    <Form handleSubmit={form.handleSubmit} width={props.width}>
      <Stack flexDirection="column" alignItems="stretch" gap="100px">
        <Stack flexDirection="column" gap="10px">
          <Typography weight={700} variant="h1" color="black100">
            Welcome Back
          </Typography>
          <Typography weight={400} variant="h8" color="black100">
            {'Don’t have an account? '}
            <Typography
              onClick={() => {
                props.onSignUp()
              }}
              cursor="pointer"
              weight={400}
              variant="h8"
              color="blueRest"
            >
              Sign Up
            </Typography>
          </Typography>
        </Stack>
        {!props.isError ? (
          <Stack flexDirection="column" alignItems="stretch" gap="20px">
            <form.Field
              name="nickname"
              validators={{
                onChange: validationSchema.nickname
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
                    isNoSpaces
                    isError={
                      !!field.state.meta.isTouched &&
                      !!field.state.meta.errors.length
                    }
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
                </Stack>
              )}
            </form.Field>
            <form.Field
              name="password"
              validators={{
                onChangeListenTo: ['password'],
                onChange: validationSchema.password
              }}
            >
              {(field) => (
                <Stack flexDirection="column" gap="6px">
                  <Input
                    autocomplete="current-password"
                    type="password"
                    placeholder="Password"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre="blackBorder"
                    size="largeMedium"
                    isNoSpaces
                    isError={
                      !!field.state.meta.isTouched &&
                      !!field.state.meta.errors.length
                    }
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
                </Stack>
              )}
            </form.Field>
            <Stack justifyContent="space-between" alignItems="center">
              {props.isIncorrect && (
                <Typography
                  onClick={() => {
                    props.onForgot()
                  }}
                  cursor="pointer"
                  weight={400}
                  variant="h7"
                  color="red100"
                  textAlign="left"
                >
                  Incorrect login or password
                </Typography>
              )}{' '}
              <Typography
                onClick={() => props.onForgot()}
                cursor="pointer"
                weight={400}
                variant="h7"
                color="blueRest"
                textAlign="right"
                style={{ marginLeft: 'auto' }}
              >
                Forgot Password
              </Typography>
            </Stack>
            <form.Subscribe>
              {(state) => (
                <Stack flexDirection="column" alignItems="stretch" gap="20px">
                  <Button
                    width="100%"
                    type="submit"
                    isLoading={state.isSubmitting || props.isLoadingLogin}
                    isOnlyLoading
                    isDisabled={
                      !state.canSubmit || state.isSubmitting || isLoading
                    }
                    genre="product"
                    size="largeMedium"
                  >
                    <Typography variant="h7">Sign In</Typography>
                  </Button>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="8px"
                  >
                    <Stack flexGrow={1} h="2px" bg="black80" />
                    <Typography
                      cursor="pointer"
                      weight={400}
                      variant="h7"
                      color="black80"
                      textAlign="center"
                    >
                      Or
                    </Typography>
                    <Stack flexGrow={1} h="2px" bg="black80" />
                  </Stack>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    gap="8px"
                  >
                    <Button
                      onClick={() => props.onQR && props.onQR()}
                      flex="1"
                      type="button"
                      isLoading={props.isLoadingQR}
                      isOnlyLoading
                      isDisabled={isLoading}
                      genre="blackBorder"
                      size="medium"
                    >
                      <Icon type="curved" name="QR" size="medium" />
                    </Button>
                    {isBiometricSupported && (
                      <Button
                        onClick={() => props.onBiometry && props.onBiometry()}
                        flex="1"
                        type="button"
                        isLoading={props.isLoadingBiometry}
                        isOnlyLoading
                        isDisabled={isLoading}
                        genre="blackBorder"
                        size="medium"
                      >
                        <Icon type="curved" name="Biometry" size="medium" />
                      </Button>
                    )}
                    <Button
                      onClick={() => props.onPasskey && props.onPasskey()}
                      flex="1"
                      type="button"
                      isLoading={props.isLoadingPasskey}
                      isOnlyLoading
                      isDisabled={isLoading}
                      genre="blackBorder"
                      size="medium"
                    >
                      <Typography variant="h8">Passkey</Typography>
                    </Button>
                    <Button
                      onClick={() => props.onAuthApp && props.onAuthApp()}
                      flex="1"
                      type="button"
                      isLoading={props.isLoadingAuthApp}
                      isOnlyLoading
                      isDisabled={isLoading}
                      genre="blackBorder"
                      size="medium"
                    >
                      <Typography variant="h8">Auth App</Typography>
                    </Button>
                  </Stack>
                </Stack>
              )}
            </form.Subscribe>
          </Stack>
        ) : (
          <Stack flexDirection="column" alignItems="stretch" gap="20px">
            <Typography
              onClick={() => {
                props.onForgot()
              }}
              cursor="pointer"
              weight={400}
              variant="h7"
              color="black100"
              textAlign="center"
            >
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
