import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ModuleResource } from '.'

const meta: Meta<typeof ModuleResource> = {
  component: ModuleResource,
  title: 'Module/Resource',
}

export default meta
type Story = StoryObj<typeof ModuleResource>

export const Resource: Story = {
  args: {},
}
