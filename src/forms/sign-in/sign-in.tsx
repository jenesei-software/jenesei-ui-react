import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'

import { Icon } from '@assets/library-icon'

import { Form } from '@forms/default'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Typography } from '@components/typography'

import { validationLogin, validationPassword } from '@functions/schema'

import { FormSignInProps } from '.'

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
      <>
        <Typography weight={600} variant="h4">
          Login to your account
        </Typography>
        <form.Field
          name="nickname"
          validators={{
            onChange: validationSchema.nickname,
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
          name="password"
          validators={{
            onChangeListenTo: ['password'],
            onChange: validationSchema.password,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <>
                <Typography variant="h7">Password</Typography>
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
              </>
            </Stack>
          )}
        </form.Field>
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Stack flexDirection="column" gap="6px">
              <>
                <Button
                  width="100%"
                  type="submit"
                  isLoading={isSubmitting || props.isLoading}
                  isOnlyLoading
                  isDisabled={!canSubmit || isSubmitting || props.isLoading}
                  genre={'greenTransparent'}
                  size={defaultSize || 'medium'}
                >
                  <Typography variant="h7">Sign In</Typography>
                </Button>
              </>
            </Stack>
          )}
        </form.Subscribe>
        <form.Subscribe selector={(state) => [state.isSubmitting]}>
          {([isSubmitting]) => (
            <>
              <Stack alignItems="center">
                <Typography weight={500} variant="h7">
                  {"Don't have an account ?"}
                </Typography>
                <Button
                  type="button"
                  isDisabled={isSubmitting || props.isLoading}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  onClick={() => {
                    props.onSignUp()
                  }}
                >
                  <Typography variant="h7">Sign up</Typography>
                </Button>
              </Stack>
              <Stack alignItems="center">
                <Typography weight={500} variant="h7">
                  {'Forgot your password?'}
                </Typography>
                <Button
                  type="button"
                  isDisabled={isSubmitting || props.isLoading}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  onClick={() => {
                    props.onForgot()
                  }}
                >
                  <Typography variant="h7">Restore</Typography>
                </Button>
              </Stack>
            </>
          )}
        </form.Subscribe>
      </>
    </Form>
  )
}
