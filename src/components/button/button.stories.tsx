import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const ProductLabel: Story = {
  args: {
    children: 'Click',
    width: '200px',
    isHidden: false,
    isLoading: false,
    isDisabled: false,
    type: 'button',
    color: 'product',
    genre: 'primary',
    size: 'large',
  },
}

export const ProductLabelWithIcon: Story = {
  args: {
    children: 'Click',
    width: '200px',
    isHidden: false,
    isLoading: false,
    isDisabled: false,
    type: 'button',
    color: 'product',
    genre: 'primary',
    size: 'large',
    icon: 'Copy',
  },
}

export const ProductIcon: Story = {
  args: {
    width: 'auto',
    isHidden: false,
    isLoading: false,
    isDisabled: false,
    type: 'button',
    color: 'product',
    genre: 'primary',
    size: 'large',
    icon: 'Copy',
  },
}

export const SuccessLabel: Story = {
  args: {
    children: 'Click',
    width: '200px',
    isHidden: false,
    isLoading: false,
    isDisabled: false,
    type: 'button',
    color: 'success',
    genre: 'primary',
    size: 'large',
  },
}

export const DangerLabel: Story = {
  args: {
    children: 'Click',
    width: '200px',
    isHidden: false,
    isLoading: false,
    isDisabled: false,
    type: 'button',
    color: 'danger',
    genre: 'primary',
    size: 'large',
  },
}
