import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormSignIn } from '.'

const meta: Meta<typeof FormSignIn> = {
  component: FormSignIn,
  title: 'Form/SignIn',
}

export default meta
type Story = StoryObj<typeof FormSignIn>

export const SignIn: Story = {
  args: {
    genre: 'grayBorder',
    size: 'medium',
    isPadding: true,
    isBorder: true,
    width: '540px',
    onSubmit(field) {
      console.log(field)
    },
  },
}
