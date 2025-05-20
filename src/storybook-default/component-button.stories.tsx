import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '../components/button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Component/Button'
}

export default meta

type Story = StoryObj<typeof Button>

export const Text: Story = {
  args: {
    children: 'Click',
    type: 'button',
    genre: 'gray',
    size: 'medium'
  }
}

export const Icon: Story = {
  args: {
    isWidthAsHeight: true,
    type: 'button',
    icons: [
      {
        type: 'checkbox',
        name: 'Heart',
        order: -1
      }
    ],
    genre: 'gray',
    size: 'medium'
  }
}
