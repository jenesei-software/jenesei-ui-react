import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Input, InputProps } from '../components/input'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'RealEbail/Input'
}

export default meta
type Story = StoryObj<typeof Input>

const defaultArgs: Partial<InputProps> = {
  genre: 'realebail-white',
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
    placeholder: 'Пароль'
  }
}
