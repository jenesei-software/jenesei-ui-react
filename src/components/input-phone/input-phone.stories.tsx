import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { InputPhone } from '.'

const meta: Meta<typeof InputPhone> = {
  component: InputPhone,
  title: 'Input Phone',
}

export default meta
type Story = StoryObj<typeof InputPhone>

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
    placeholder: 'White placeholder?',
    width: '300px',
    isBold: true,
  },
}
