import { InputPhone } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof InputPhone> = {
  component: InputPhone,
  title: 'Input/Input Phone',
}

export default meta
type Story = StoryObj<typeof InputPhone>

export const Default: Story = {
  args: {
    genre: 'auth',
    value: '',
    isError: false,
    isDisabled: false,
    isFocus: undefined,
    isOnlyText: false,
    isReadOnly: false,
  },
}
