import { Form } from '@forms/default'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Typography } from '@components/typography'

import { FormStatusIconValidateFalse, FormStatusIconValidateTrue, FormStatusProps } from '.'

export const FormStatus: React.FC<FormStatusProps> = (props) => {
  return (
    <Form width={props.width}>
      <Stack flexDirection="column" alignItems="stretch" gap="100px">
        {!props.isError ? (
          <Stack flexDirection="column" alignItems="stretch" gap="30px">
            <Stack justifyContent="center">
              {props.status === 'fail' ? <FormStatusIconValidateFalse /> : <FormStatusIconValidateTrue />}
            </Stack>
            <Typography weight={400} variant="h7" textAlign="center" color="black100">
              {props.status === 'fail' ? 'Failed to change password' : 'Password reset successfully'}
            </Typography>
            <Button
              width="100%"
              isOnlyLoading
              onClick={() => {
                props.onBack()
              }}
              genre={props.status === 'fail' ? 'blackBorder' : 'product'}
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
