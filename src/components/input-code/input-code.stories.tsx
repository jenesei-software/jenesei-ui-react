import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { InputCode } from '.'

const meta: Meta<typeof InputCode> = {
  component: InputCode,
  title: 'Input Code',
}

export default meta
type Story = StoryObj<typeof InputCode>

export const Default: Story = {
  args: {
    genre: 'product',
    genreType: 'primary',
    size: 'large',
    isError: false,
    isDisabled: false,
    isFocus: undefined,
    isRequired: false,
    isReadOnly: false,
    isLoading: false,
    value: 'Value',
    placeholder: 'White placeholder?',
    width: '300px',
    length: 6,
  },
}
