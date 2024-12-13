import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Input, InputProps } from '.'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Component/Input'
}

export default meta
type Story = StoryObj<typeof Input>

const defaultArgs: Partial<InputProps> = {
  genre: 'blackBorder',
  size: 'largeMedium',
  isError: false,
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
  width: '300px'
}

const InputStringWrapper: FC<InputProps> = props => {
  const [value, setValue] = useState<string>('')

  return <Input {...props} value={value} onChange={newValue => setValue(newValue)} />
}

export const Password: Story = {
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'password',
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Password'
  }
}

export const Phone: Story = {
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    format: '+7 (9##) ###-##-##',
    mask: '_',
    formatType: 'tel',
    placeholder: 'Phone'
  }
}

export const INN: Story = {
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: 'INN',
    mask: '',
    formatType: 'text'
  }
}

export const Code: Story = {
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: 'Code',
    mask: '_',
    formatType: 'text'
  }
}
