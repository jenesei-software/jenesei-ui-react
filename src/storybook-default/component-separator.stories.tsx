import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Stack } from '@local/components/stack'

import { Separator, SeparatorProps } from '../components/separator'

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
