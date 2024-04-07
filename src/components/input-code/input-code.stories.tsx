import { InputCode } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof InputCode> = {
  component: InputCode,
  title: 'Input/Input Code',
}

export default meta
type Story = StoryObj<typeof InputCode>

export const Default: Story = {
  args: {
    genre: 'auth',
    value: '',
    length: 4,
    errorMessage: 'Error',
    isError: undefined,
    isDisabled: false,
    isFocus: false,
    isOnlyText: false,
    isReadOnly: false,
  },
}
