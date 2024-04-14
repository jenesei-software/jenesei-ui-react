import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button/Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const ProductPrimary: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genreType: 'primary',
    genre: 'product',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
  },
}

export const ProductPrimaryIcon: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genreType: 'primary',
    genre: 'product',
    size: 'large',
    icon: 'Copy',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
  },
}

export const ProductSecondary: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genreType: 'secondary',
    genre: 'product',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
  },
}

export const ProductSecondaryIcon: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genreType: 'secondary',
    genre: 'product',
    size: 'large',
    icon: 'Copy',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
  },
}
