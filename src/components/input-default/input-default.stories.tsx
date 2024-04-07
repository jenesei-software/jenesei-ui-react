import { InputDefault } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof InputDefault> = {
  component: InputDefault,
  title: 'Input/Input Default',
}

export default meta
type Story = StoryObj<typeof InputDefault>

export const Default: Story = {
  args: {
    genre: 'auth',
    value: '',
    isError: false,
    isDisabled: false,
    isFocus: undefined,
    isOnlyText: false,
    isReadOnly: false,
    placeholder: 'Placeholder',
  },
}
