import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ModuleProfile } from '.'

const meta: Meta<typeof ModuleProfile> = {
  component: ModuleProfile,
  title: 'Module/Profile',
}

export default meta
type Story = StoryObj<typeof ModuleProfile>

export const Profile: Story = {
  args: {
    onDeleteProfile: () => console.log(),
  },
}
