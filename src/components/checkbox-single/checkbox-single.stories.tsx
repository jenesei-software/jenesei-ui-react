import { CheckboxSingle } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof CheckboxSingle> = {
  component: CheckboxSingle,
  title: 'Checkbox/Checkbox Single',
}

export default meta
type Story = StoryObj<typeof CheckboxSingle>

export const Default: Story = {
  args: {
    genre: 'circle',
    content: 'Checkbox',
    value: true,
  },
}
