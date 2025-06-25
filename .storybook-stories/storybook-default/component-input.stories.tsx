import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC, useState } from 'react'
import 'styled-components'

import { Input, InputProps } from '@local/components/input'
import { Stack } from '@local/components/stack'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Component/Input'
}

export default meta
type Story = StoryObj<typeof Input>

const defaultArgs: Partial<InputProps> = {
  genre: 'blackBorder',
  size: 'largeMedium',
  error: {
    errorMessage: 'Большая страшная ошибка на много строк',
    isError: true,
    isErrorAbsolute: true
  },
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
  sx: {
    default: {
      width: '300px'
    }
  }
}

const InputStringWrapper: FC<InputProps> = props => {
  const [value, setValue] = useState<string>('')

  return (
    <Stack sx={{ default: { position: 'relative', height: 'fit-content' } }}>
      <Input {...props} value={value} variety="standard" onChange={newValue => setValue(newValue)} />
    </Stack>
  )
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
    placeholder: 'Password'
  }
}

export const Phone: Story = {
  args: {
    ...defaultArgs,
    onChange(value) {
      console.log(value)
    },
    variety: 'pattern',
    propsPattern: {
      format: '+7 (9##) ###-##-##',
      mask: '_',
      type: 'tel'
    },
    placeholder: 'Phone'
  }
}

export const INN: Story = {
  args: {
    ...defaultArgs,
    variety: 'pattern',
    onChange(value) {
      console.log(value)
    },
    propsPattern: {
      format: '### ### ### ###',
      mask: '',
      type: 'text'
    },
    placeholder: 'INN'
  }
}

export const Code: Story = {
  args: {
    ...defaultArgs,
    onChange(value) {
      console.log(value)
    },
    placeholder: 'Code',
    variety: 'pattern',
    propsPattern: {
      format: '# # # #',
      mask: '_',
      type: 'text'
    }
  }
}

export const Cost: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'Cost',
    variety: 'numeric',
    onChange(value) {
      console.log(value)
    },
    propsNumeric: {
      allowLeadingZeros: false,
      thousandSeparator: ' ',
      allowNegative: false,
      allowedDecimalSeparators: ['.'],
      decimalScale: 2,
      decimalSeparator: ',',
      fixedDecimalScale: true,
      prefix: '$',
      suffix: ' USD',
      thousandsGroupStyle: 'thousand',
      isAllowed: values => {
        const { floatValue } = values
        return (floatValue ?? 0) >= 0 && (floatValue ?? 0) <= 10000
      }
    }
  }
}
