import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { Input, InputProps } from '.'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
}

export default meta
type Story = StoryObj<typeof Input>

const defaultArgs: Partial<InputProps> = {
  genre: 'gray',
  size: 'medium',
  isError: false,
  isDisabled: false,
  isActive: undefined,
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
  placeholder: 'White placeholder?',
  width: '300px',
}

const InputStringWrapper: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState<string>('')

  return (
    <Input
      {...props}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

export const String: Story = {
  render: (args) => <InputStringWrapper {...args} />,
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
