import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Stack } from '@local/main'

import { PreviewProps } from '.'
import { Preview as PreviewComponent } from './preview'

const meta: Meta<typeof PreviewComponent> = {
  component: PreviewComponent,
  title: 'Area/Preview'
}

export default meta

type Story = StoryObj<typeof PreviewComponent>

export const PreviewMax: Story = {
  args: {
    visible: true,
    content: 'Content'
  }
}

const PreviewStackWrapper: FC<PreviewProps> = props => {
  return (
    <Stack style={{ position: 'relative' }} w="200px" h="200px" bg="blueFocus" br="8px">
      <PreviewComponent {...props} />
    </Stack>
  )
}

export const PreviewStack: Story = {
  render: args => <PreviewStackWrapper {...args} />,
  args: {
    time: 2000,
    content: 'Loading...'
  }
}
