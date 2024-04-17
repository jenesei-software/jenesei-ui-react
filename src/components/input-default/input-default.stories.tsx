import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { InputDefault } from '.'

const meta: Meta<typeof InputDefault> = {
  component: InputDefault,
  title: 'Input Default',
}

export default meta
type Story = StoryObj<typeof InputDefault>

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
