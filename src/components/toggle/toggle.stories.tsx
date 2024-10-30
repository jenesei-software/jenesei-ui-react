import type { Meta, StoryObj } from '@storybook/react'
import { FC, useEffect, useState } from 'react'
import 'styled-components'

import { Toggle, ToggleProps } from '.'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Toggle>

const ToggleWrapper: FC<ToggleProps> = props => {
  const [value, setValue] = useState<boolean>(false)

  useEffect(() => {
    setValue(props.value ?? false)
  }, [props.value])

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
