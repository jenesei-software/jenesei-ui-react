import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { InputDefault } from '.'

const meta: Meta<typeof InputDefault> = {
  component: InputDefault,
  title: 'Input/Input Default',
}

export default meta
type Story = StoryObj<typeof InputDefault>

export const ProductPrimary: Story = {
  args: {
    genre: 'primary',
    size: 'large',
    color: 'product',
    value: 'Example Value',
    isError: false,
    isDisabled: false,
    isFocus: undefined,
    isRequired: false,
    isReadOnly: false,
    isHidden: false,
    isLoading: false,
    placeholder: 'White placeholder?',
    width: '300px',
  },
}

export const ProductSecondary: Story = {
  args: {
    genre: 'secondary',
    size: 'large',
    color: 'product',
    value: 'Example Value',
    isError: false,
    isDisabled: false,
    isFocus: undefined,
    isRequired: false,
    isReadOnly: false,
    isHidden: false,
    isLoading: false,
    placeholder: 'White placeholder?',
    width: '300px',
  },
}

export const GrayPrimary: Story = {
  args: {
    genre: 'primary',
    size: 'large',
    color: 'gray',
    value: 'Example Value',
    isError: false,
    isDisabled: false,
    isFocus: undefined,
    isRequired: false,
    isReadOnly: false,
    isHidden: false,
    isLoading: false,
    placeholder: 'White placeholder?',
    width: '300px',
  },
}

export const GraySecondary: Story = {
  args: {
    genre: 'secondary',
    size: 'large',
    color: 'gray',
    value: 'Example Value',
    isError: false,
    isDisabled: false,
    isFocus: undefined,
    isRequired: false,
    isReadOnly: false,
    isHidden: false,
    isLoading: false,
    placeholder: 'White placeholder?',
    width: '300px',
  },
}
