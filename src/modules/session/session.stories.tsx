import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ModuleSession } from '.'

const meta: Meta<typeof ModuleSession> = {
  component: ModuleSession,
  title: 'Module/Session',
}

export default meta
type Story = StoryObj<typeof ModuleSession>

export const Session: Story = {
  args: {
    onDeleteSession: (props) => console.log(props),
  },
}
