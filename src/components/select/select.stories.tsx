import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Select, SelectProps } from '.'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
}

export default meta
type Story = StoryObj<typeof Select>

const defaultArgs: Partial<SelectProps> = {
  inputProps: {
    genre: 'gray',
    size: 'large',
    isError: false,
    isDisabled: false,
    isActive: undefined,
    isRequired: false,
    isReadOnly: false,
    isLoading: false,
    placeholder: 'White placeholder?',
    width: '300px',
  },
}

export const String: Story = {
  args: {
    ...defaultArgs,
  },
}
