import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import moment from 'moment'
import { useEffect, useState } from 'react'

import { Form } from '@forms/default'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Typography } from '@components/typography'

import { validationCode } from '@functions/schema'

import { FormCheckYourEmailProps } from '.'

function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@')

  const maskedLocalPart = localPart[0] + '*'.repeat(localPart.length - 2) + localPart[localPart.length - 1]

  const [domainName, domainExtension] = domain.split('.')
  const maskedDomain = domainName[0] + '*'.repeat(domainName.length - 2) + domainName[domainName.length - 1]

  return `${maskedLocalPart}@${maskedDomain}.${domainExtension}`
}

export const FormCheckYourEmail: React.FC<FormCheckYourEmailProps> = (props) => {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const endDate = moment(props.date).add(props.minutes, 'minutes')
    return endDate.diff(moment(), 'seconds')
  })

  useEffect(() => {
    if (timeLeft <= 0) {
      props.onComplete()
      return
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        const newTimeLeft = prev - 1
        if (newTimeLeft <= 0) {
          clearInterval(intervalId)
          props.onComplete()
        }
        return newTimeLeft
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft, props])

  const form = useForm({
    defaultValues: {
      code: '',
    },
    onSubmit: async ({ value }) => {
      const result = {
        code: value.code.trim(),
      }
      props.onSubmit(result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0],
    }),
  })

  const validationSchema = {
    code: validationCode,
  }

  const formatTimeLeft = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <Form width={props.width} handleSubmit={form.handleSubmit}>
      <Stack flexDirection="column" alignItems="stretch" gap="100px">
        <Stack flexDirection="column" gap="10px">
          <Typography weight={700} variant="h1" color="black100">
            Check your Email
          </Typography>
          <Typography weight={400} variant="h8" color="black100">
            We have sent an email with password reset information to {maskEmail(props.email)}.
          </Typography>
        </Stack>
        {!props.isError ? (
          <Stack flexDirection="column" alignItems="stretch" gap="20px">
            <form.Field
              name="code"
              validators={{
                onChange: validationSchema.code,
              }}
            >
              {(field) => (
                <Stack flexDirection="column" gap="6px">
                  <Input
                    autocomplete="one-time-code"
                    placeholder="Code from your email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre="blackBorder"
                    size="largeMedium"
                    format="# # # # #"
                    mask="_"
                    formatType="text"
                    isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
                </Stack>
              )}
            </form.Field>
            <Typography weight={700} variant="h7" color="black100">
              {'Time left: '}
              {formatTimeLeft(timeLeft)}
            </Typography>
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
                  <Typography variant="h7">Check</Typography>
                </Button>
              )}
            </form.Subscribe>
            <Typography weight={400} variant="h7" color={props.errorMessage ? 'red100' : 'black100'}>
              {props.errorMessage ? props.errorMessage : 'Didn’t receive the email? Check spam or promotion folder'}
            </Typography>
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
