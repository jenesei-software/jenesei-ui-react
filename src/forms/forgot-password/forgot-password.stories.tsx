import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormForgotPassword } from '.'

const meta: Meta<typeof FormForgotPassword> = {
  component: FormForgotPassword,
  title: 'Form/ResetPassword',
}

export default meta
type Story = StoryObj<typeof FormForgotPassword>

export const ResetPassword: Story = {
  args: {
    isLoading: false,
    width: '540px',
    onSubmit(field) {
      console.log(field)
    },
    onSignIn() {},
  },
}
