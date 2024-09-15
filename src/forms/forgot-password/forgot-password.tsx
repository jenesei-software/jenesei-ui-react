import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'

import { Form } from '@forms/default'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Typography } from '@components/typography'

import { validationEmail } from '@functions/schema'

import { FormForgotPasswordProps } from '.'

export const FormForgotPassword: React.FC<FormForgotPasswordProps> = (
  props,
) => {
  const form = useForm({
    defaultValues: {
      email: '',
    },
    onSubmit: async ({ value }) => {
      const result = {
        email: value.email.trim(),
      }
      props.onSubmit(result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0],
    }),
  })

  const validationSchema = {
    email: validationEmail,
  }

  return (
    <Form width={props.width} handleSubmit={form.handleSubmit}>
      <Stack flexDirection="column" alignItems="stretch" gap="100px">
        <Stack flexDirection="column" gap="10px">
          <Typography weight={700} variant="h1" color="black100">
            Forgot Password
          </Typography>
          <Typography weight={400} variant="h8" color="black100">
            Enter the email you used to create your account so we can send you
            instructions on how to reset your password.
          </Typography>
        </Stack>
        {!props.isError ? (
          <Stack flexDirection="column" alignItems="stretch" gap="20px">
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

            <form.Subscribe>
              {(state) => (
                <>
                  <Button
                    width="100%"
                    type="submit"
                    isLoading={state.isSubmitting || props.isLoading}
                    isOnlyLoading
                    isDisabled={
                      !state.canSubmit || state.isSubmitting || props.isLoading
                    }
                    genre="product"
                    size="largeMedium"
                  >
                    <Typography variant="h7">Send</Typography>
                  </Button>
                  <Button
                    width="100%"
                    isOnlyLoading
                    onClick={() => {
                      form.reset()
                      props.onBack()
                    }}
                    isDisabled={state.isSubmitting || props.isLoading}
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
            <Typography
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
