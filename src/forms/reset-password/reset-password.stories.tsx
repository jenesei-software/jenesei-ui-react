import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormSignUp } from '.'

const meta: Meta<typeof FormSignUp> = {
  component: FormSignUp,
  title: 'Form/ResetPassword',
}

export default meta
type Story = StoryObj<typeof FormSignUp>

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
