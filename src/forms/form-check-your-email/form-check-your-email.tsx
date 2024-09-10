import { Form } from '@forms/default'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Typography } from '@components/typography'

import { FormCheckYourEmailProps } from '.'

function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@')

  const maskedLocalPart = localPart[0] + '*'.repeat(localPart.length - 2) + localPart[localPart.length - 1]

  const [domainName, domainExtension] = domain.split('.')
  const maskedDomain = domainName[0] + '*'.repeat(domainName.length - 2) + domainName[domainName.length - 1]

  return `${maskedLocalPart}@${maskedDomain}.${domainExtension}`
}

export const FormCheckYourEmail: React.FC<FormCheckYourEmailProps> = (props) => {
  return (
    <Form width={props.width}>
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
            <Typography weight={400} variant="h7" color="black100">
              Didn’t receive the email? Check spam or promotion folder or
            </Typography>
            <Button
              width="100%"
              isOnlyLoading
              onClick={() => {
                props.onBack()
              }}
              isDisabled={props.isLoading}
              genre="blackBorder"
              size="largeMedium"
            >
              <Typography variant="h7">Back to Sign</Typography>
            </Button>
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
