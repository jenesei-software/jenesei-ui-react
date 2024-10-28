import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { Toggle, ToggleProps } from '.'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle'
}

export default meta

type Story = StoryObj<typeof Toggle>

const ToggleWrapper: React.FC<ToggleProps> = props => {
  const [value, setValue] = useState<boolean>(false)

  return <Toggle {...props} value={value} onChange={checked => setValue(checked)} />
}

export const Default: Story = {
  render: args => <ToggleWrapper {...args} />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small'
  }
}
