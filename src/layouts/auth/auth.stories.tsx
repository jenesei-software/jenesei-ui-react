import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormSignUp } from '@forms/sign-up'

import { AuthLayout } from '.'

const meta: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  title: 'Layout/Auth'
}

export default meta
type Story = StoryObj<typeof AuthLayout>

export const Auth: Story = {
  args: {
    backUrl: 'https://id.jenesei.ru/pictures/auth-back.gif',
    children: (
      <FormSignUp
        width="500px"
        onRestore={() => {}}
        onSignIn={() => {}}
        isLoading={false}
        isError={false}
        onTermOfService={() => {}}
        onPrivacyPolicy={() => {}}
        onSubmit={() => {}}
      />
    )
  }
}
