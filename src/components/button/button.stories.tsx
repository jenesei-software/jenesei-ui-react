import { Button } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const Product: Story = {
  args: {
    content: 'Click',
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

export const ProductWithIcon: Story = {
  args: {
    content: 'Click',
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

export const Icon: Story = {
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

export const Success: Story = {
  args: {
    content: 'Click',
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

export const Danger: Story = {
  args: {
    content: 'Click',
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
