import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormForgotPassword } from '.'

const meta: Meta<typeof FormForgotPassword> = {
  component: FormForgotPassword,
  title: 'Form/Forgot Password',
}

export default meta
type Story = StoryObj<typeof FormForgotPassword>

export const Forgot_Password: Story = {
  args: {
    isLoading: false,
    width: '540px',
    onSubmit(field) {
      console.log(field)
    },
  },
}
