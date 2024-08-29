import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { Icon } from '@assets/library-icon'

import { Stack } from '@components/flex'

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
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
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

export const Password: Story = {
  render: (args) => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'password',
    placeholder: 'Password',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: (
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          p={'2px'}
          style={{ borderRadius: '0px 6px 6px 0px' }}
          bg={'black60'}
          minH={'100%'}
          h={'100%'}
        >
          <Icon
            size={'largeMedium'}
            primaryColor={'grayJanice'}
            type={'curved'}
            name={'Password'}
          />
        </Stack>
      ),
    },
  },
}

export const Phone: Story = {
  render: (args) => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    format: '+7 (9##) ###-##-##',
    mask: '_',
    formatType: 'tel',
    placeholder: 'Phone',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: (
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          p={'2px'}
          style={{ borderRadius: '0px 6px 6px 0px' }}
          bg={'black60'}
          minH={'100%'}
          h={'100%'}
        >
          <Icon
            size={'largeMedium'}
            primaryColor={'grayJanice'}
            type={'curved'}
            name={'Call'}
          />
        </Stack>
      ),
    },
  },
}

export const INN: Story = {
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: 'INN',
    mask: '',
    formatType: 'text',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: (
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          p={'2px'}
          style={{ borderRadius: '0px 6px 6px 0px' }}
          bg={'black60'}
          minH={'100%'}
          h={'100%'}
        >
          <Icon
            size={'largeMedium'}
            primaryColor={'grayJanice'}
            type={'curved'}
            name={'ShieldDone'}
          />
        </Stack>
      ),
    },
  },
}

export const Code: Story = {
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: 'Code',
    mask: '_',
    formatType: 'text',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: (
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          p={'2px'}
          style={{ borderRadius: '0px 6px 6px 0px' }}
          bg={'black60'}
          minH={'100%'}
          h={'100%'}
        >
          <Icon
            size={'largeMedium'}
            primaryColor={'grayJanice'}
            type={'curved'}
            name={'Chat'}
          />
        </Stack>
      ),
    },
  },
}
