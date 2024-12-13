import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { ProviderScreenWidth } from '@local/contexts/context-screen-width'

import { AuthLayout, AuthLayoutProps } from '.'

const meta: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  title: 'Layout/Auth'
}

export default meta
type Story = StoryObj<typeof AuthLayout>

const AuthWrapper: FC<AuthLayoutProps> = props => {
  return (
    <ProviderScreenWidth>
      <AuthLayout {...props} />
    </ProviderScreenWidth>
  )
}

export const Auth: Story = {
  render: args => <AuthWrapper {...args} />,
  args: {
    backUrl: 'https://id.jenesei.ru/pictures/auth-back-mountain.gif',
    backUrlWebp: 'https://id.jenesei.ru/pictures/auth-back-mountain.webp',
    children: <></>
  }
}
