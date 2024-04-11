import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Product: Story = {
  args: {
    genre: 'circle',
    checked: true,
    color: 'product',
    children: 'Zhopa',
    size: 'large',
  },
}

export const Gray: Story = {
  args: {
    genre: 'circle',
    checked: true,
    color: 'gray',
    children: 'Zhopa',
    size: 'large',
  },
}
