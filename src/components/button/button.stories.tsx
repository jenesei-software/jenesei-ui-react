import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genre: 'gray',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isActive: false,
  },
}
