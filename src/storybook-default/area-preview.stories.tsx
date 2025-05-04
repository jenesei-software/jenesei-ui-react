import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Stack } from '@local/components/stack'

import { PreviewProps } from '../areas/preview'
import { Preview as PreviewComponent } from '../areas/preview/area'

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
    <Stack
      sx={theme => ({
        default: {
          position: 'relative',
          width: '200px',
          height: '200px',
          backgroundColor: theme.palette.blueFocus,
          borderRadius: '8px'
        }
      })}
    >
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
