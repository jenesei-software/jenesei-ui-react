import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const CircleProductPrimary: Story = {
  tags: ['Product'],
  args: {
    genre: 'product',
    genreType: 'primary',
    view: 'circle',
    checked: true,
    children: 'Zhopa',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false,
  },
}

export const SquareProductPrimary: Story = {
  tags: ['Product'],
  args: {
    genre: 'product',
    genreType: 'primary',
    view: 'square',
    checked: true,
    children: 'Zhopa',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false,
  },
}

export const CircleProductSecondary: Story = {
  args: {
    genre: 'product',
    genreType: 'secondary',
    view: 'circle',
    checked: true,
    children: 'Zhopa',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false,
  },
}

export const SquareProductSecondary: Story = {
  args: {
    genre: 'product',
    genreType: 'secondary',
    view: 'square',
    checked: true,
    children: 'Zhopa',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false,
  },
}
