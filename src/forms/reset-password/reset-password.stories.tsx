import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormResetPassword } from '.'

const meta: Meta<typeof FormResetPassword> = {
  component: FormResetPassword,
  title: 'Form/Reset Password',
}

export default meta
type Story = StoryObj<typeof FormResetPassword>

export const Reset_Password: Story = {
  args: {
    isLoading: false,
    width: '540px',
    onSubmit(field) {
      console.log(field)
    },
  },
}
