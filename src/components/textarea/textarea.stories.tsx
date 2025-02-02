import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { TextArea, TextAreaProps } from '.'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Component/TextArea'
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
  isAutoHeight: true,
  width: '300px',
  maxRows: 8
}

const TextAreaStringWrapper: FC<TextAreaProps> = props => {
  const [value, setValue] = useState<string>('')

  return <TextArea {...props} value={value} onChange={newValue => setValue(newValue)} />
}

export const Default: Story = {
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    ErrorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Default'
  }
}
