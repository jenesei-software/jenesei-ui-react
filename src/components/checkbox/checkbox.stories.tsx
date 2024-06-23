import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Checkbox, CheckboxProps } from '.'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

const CheckboxWrapper: React.FC<CheckboxProps> = (props) => {
  const [value, setValue] = useState<boolean>(false)

  return (
    <Checkbox
      {...props}
      checked={value}
      onChange={(checked) => setValue(checked)}
    />
  )
}

export const Default: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    genre: 'gray',
    view: 'circle',
    checked: true,
    children: 'Zhopa',
    size: 'medium',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false,
    isActive: false,
  },
}
