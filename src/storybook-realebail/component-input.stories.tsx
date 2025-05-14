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
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
  width: '300px'
}

const InputStringWrapper: FC<InputProps> = props => {
  const [value, setValue] = useState<string>('')

  return <Input {...props} value={value} variety="standard" onChange={newValue => setValue(newValue)} />
}

export const Password: Story = {
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    onChange(value) {
      console.log(value)
    },
    variety: 'standard',
    type: 'password',
    error: {
      errorMessage: 'Пароль должен содержать не менее 8 символов, включая буквы и цифры',
      isError: true,
      isErrorAbsolute: true
    },
    placeholder: 'Пароль'
  }
}
