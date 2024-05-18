import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    genre: 'product',
    view: 'circle',
    checked: true,
    children: 'Zhopa',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false,
    isActive: false,
  },
}
