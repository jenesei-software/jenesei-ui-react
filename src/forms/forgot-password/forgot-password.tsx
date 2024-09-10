import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'

import { Form } from '@forms/default'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Typography } from '@components/typography'

import { validationPassword } from '@functions/schema'

import { FormForgotPasswordProps } from '.'

export const FormForgotPassword: React.FC<FormForgotPasswordProps> = (props) => {
  const form = useForm({
    defaultValues: {
      currentPassword: '',
      confirmPassword: '',
    },
    onSubmit: async ({ value }) => {
      const result = {
        currentPassword: value.currentPassword.trim(),
        confirmPassword: value.confirmPassword.trim(),
      }
      props.onSubmit(result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0],
    }),
  })

  const validationSchema = {
    currentPassword: validationPassword,
  }

  return (
    <Form width={props.width} handleSubmit={form.handleSubmit}>
      <Stack flexDirection="column" alignItems="stretch" gap="100px">
        <Stack flexDirection="column" gap="10px">
          <Typography weight={700} variant="h1" color="black100">
            Forgot Password
          </Typography>
          <Typography weight={400} variant="h8" color="black100">
            Enter the email you used to create your account so we can send you instructions on how to reset your
            password.
          </Typography>
        </Stack>
        {!props.isError ? (
          <Stack flexDirection="column" alignItems="stretch" gap="20px">
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
                    placeholder="New password"
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
                      placeholder="Repeat new password"
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

            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <>
                  <Button
                    width="100%"
                    type="submit"
                    isLoading={isSubmitting || props.isLoading}
                    isOnlyLoading
                    isDisabled={!canSubmit || isSubmitting || props.isLoading}
                    genre="product"
                    size="largeMedium"
                  >
                    <Typography variant="h7">Reset password</Typography>
                  </Button>
                  <Button
                    width="100%"
                    isOnlyLoading
                    onClick={() => {
                      form.reset()
                      props.onBack()
                    }}
                    isDisabled={isSubmitting || props.isLoading}
                    genre="blackBorder"
                    size="largeMedium"
                  >
                    <Typography variant="h7">Back to Sign</Typography>
                  </Button>
                </>
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
