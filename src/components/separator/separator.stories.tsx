import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Stack } from '@components/flex'

import { Separator, SeparatorProps } from '.'

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: 'Separator',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Separator>

const defaultArgs: Partial<SeparatorProps> = {}

const SeparatorWrapper: FC<SeparatorProps> = props => {
  return (
    <Stack h="100px" w="100px" p="10px">
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
