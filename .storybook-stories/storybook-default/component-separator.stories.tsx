import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC } from 'react'
import 'styled-components'

import { Separator, SeparatorProps } from '@local/components/separator'
import { Stack } from '@local/components/stack'

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: 'Component/Separator'
}

export default meta
type Story = StoryObj<typeof Separator>

const defaultArgs: Partial<SeparatorProps> = {}

const SeparatorWrapper: FC<SeparatorProps> = props => {
  return (
    <Stack
      sx={{
        default: {
          width: '100%',
          height: '100%',
          padding: '10px'
        }
      }}
    >
      <Separator {...props} />
    </Stack>
  )
}

export const Horizontal: Story = {
  render: args => <SeparatorWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'horizontal'
  }
}

export const Vertical: Story = {
  render: args => <SeparatorWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'vertical'
  }
}
