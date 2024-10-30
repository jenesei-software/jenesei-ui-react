import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Button>

export const Text: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genre: 'gray',
    size: 'medium'
  }
}

export const Icon: Story = {
  args: {
    width: 'asHeight',
    type: 'button',
    iconName: 'Heart',
    genre: 'gray',
    size: 'medium'
  }
}
