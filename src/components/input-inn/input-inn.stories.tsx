import { InputINN } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof InputINN> = {
  component: InputINN,
  title: 'Input/Input INN',
}

export default meta
type Story = StoryObj<typeof InputINN>

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
