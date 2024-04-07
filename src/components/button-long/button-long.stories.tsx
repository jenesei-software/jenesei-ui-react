import { ButtonLong } from './'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof ButtonLong> = {
  component: ButtonLong,
  title: 'Button/Button',
}

export default meta
type Story = StoryObj<typeof ButtonLong>

export const SuccessWithIcon: Story = {
  args: {
    content: 'Click',
    width: '200px',
    isHidden: false,
    isLoading: false,
    isDisabled: false,
    type: 'button',
    color: 'success',
    genre: 'primary',
    size: 'medium',
    icon: 'Copy',
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
    size: 'medium',
  },
}

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
    size: 'medium',
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
    size: 'medium',
    icon: 'Copy',
  },
}
