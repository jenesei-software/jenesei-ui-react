import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { InputDefault, InputDefaultProps } from '.'

const meta: Meta<typeof InputDefault> = {
  component: InputDefault,
  title: 'Input',
}

export default meta
type Story = StoryObj<typeof InputDefault>

const defaultArgs: Partial<InputDefaultProps> = {
  genre: 'product',
  genreType: 'secondary',
  size: 'large',
  isError: false,
  isDisabled: false,
  isActive: undefined,
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
  placeholder: 'White placeholder?',
  width: '300px',
}

export const String: Story = {
  args: {
    ...defaultArgs,
  },
}

export const FormatPhone: Story = {
  args: {
    ...defaultArgs,
    isBold: true,
    format: '+7 (9##) ###-##-##',
    placeholder: '+7 (900) 000-00-00',
    mask: '_',
    formatType: 'tel',
  },
}

export const FormatINN: Story = {
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: '000 000 000 000',
    mask: '',
    formatType: 'text',
  },
}

export const FormatCode: Story = {
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: '0 0 0 0',
    mask: '_',
    formatType: 'text',
  },
}
