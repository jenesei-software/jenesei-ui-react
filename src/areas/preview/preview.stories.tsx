import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Preview as PreviewComponent } from './preview'

const meta: Meta<typeof PreviewComponent> = {
  component: PreviewComponent,
  title: 'Area/Preview'
}

export default meta

type Story = StoryObj<typeof PreviewComponent>

export const Preview: Story = {
  args: {
    visible: true
  }
}
