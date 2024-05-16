import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Toggle } from '.'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    genre: 'product',
    genreType: 'primary',
    isDisabled: false,
    isError: false,
    value: true,
    size: 'large',
  },
}
