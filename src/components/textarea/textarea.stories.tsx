import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { TextArea, TextAreaProps } from '.'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'TextArea',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TextArea>

const defaultArgs: Partial<TextAreaProps> = {
  genre: 'blackBorder',
  size: 'largeMedium',
  isError: false,
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isLoading: false,
  width: '300px'
}

const TextAreaStringWrapper: FC<TextAreaProps> = props => {
  const [value, setValue] = useState<string>('')

  return <TextArea {...props} value={value} onChange={newValue => setValue(newValue)} />
}

export const Default: Story = {
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Default'
  }
}
