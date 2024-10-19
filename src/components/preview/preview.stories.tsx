import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Preview } from '.'

const meta: Meta<typeof Preview> = {
  component: Preview,
  title: 'Preview'
}

export default meta

type Story = StoryObj<typeof Preview>

export const Default: Story = {
  args: {
    isShow: true
  }
}
