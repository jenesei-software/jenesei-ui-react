import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormSignUp } from '.'

const meta: Meta<typeof FormSignUp> = {
  component: FormSignUp,
  title: 'Form/SignUp',
}

export default meta
type Story = StoryObj<typeof FormSignUp>

export const SignUp: Story = {
  args: {
    genre: 'grayBorder',
    size: 'medium',
    isLoading: false,
    variant: 'sign',
    width: '540px',
    onSubmit(field) {
      console.log(field)
    },
    onSignIn() {},
  },
}