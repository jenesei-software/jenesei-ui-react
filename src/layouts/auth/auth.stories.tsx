import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormSignIn } from '@forms/sign-in'

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
    backUrlWebp: 'https://id.jenesei.ru/pictures/auth-back.webp',
    children: (
      <FormSignIn
        onForgot={() => {}}
        isIncorrect={false}
        onSignUp={() => {}}
        width="500px"
        onRestore={() => {}}
        isLoadingAuthApp={false}
        isLoadingBiometry={false}
        isLoadingLogin={false}
        isLoadingPasskey={false}
        isLoadingQR={false}
        isError={false}
        onSubmit={() => {}}
      />
    )
  }
}
