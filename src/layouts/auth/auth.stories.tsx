import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

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
    children: <></>
  }
}
