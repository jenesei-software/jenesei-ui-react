import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Typography } from '.'

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    variant: 'h1',
    children: 'Hello, World!'
  }
}
