import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC, useEffect, useState } from 'react'
import 'styled-components'

import { Toggle as ToggleComponent, ToggleProps } from '@local/components/toggle'

const meta: Meta<typeof ToggleComponent> = {
  component: ToggleComponent,
  title: 'Component/Toggle'
}

export default meta

type Story = StoryObj<typeof ToggleComponent>

const ToggleWrapper: FC<ToggleProps> = props => {
  const [value, setValue] = useState<boolean>(false)

  useEffect(() => {
    setValue(props.value ?? false)
  }, [props.value])

  return <ToggleComponent {...props} value={value} onChange={checked => setValue(checked)} />
}

export const Toggle: Story = {
  render: args => <ToggleWrapper {...args} />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small'
  }
}
