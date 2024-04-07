import { Checkbox } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Gray: Story = {
  args: {
    genre: 'circle',
    checked: true,
    color: 'gray',
    content: 'Zhopa',
    size: 'large',
  },
}

export const Product: Story = {
  args: {
    genre: 'circle',
    checked: true,
    color: 'product',
    content: 'Zhopa',
    size: 'large',
  },
}
