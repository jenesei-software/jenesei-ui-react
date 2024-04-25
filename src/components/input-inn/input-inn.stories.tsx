import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { InputINN } from '.'

const meta: Meta<typeof InputINN> = {
  component: InputINN,
  title: 'Input INN',
}

export default meta
type Story = StoryObj<typeof InputINN>

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
  },
}
