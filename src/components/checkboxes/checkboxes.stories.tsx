import { Checkboxes } from '.'
import { LibraryIcon } from '../../main'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof Checkboxes> = {
  component: Checkboxes,
  title: 'Checkbox/Checkboxes',
}

export default meta
type Story = StoryObj<typeof Checkboxes>

export const Default: Story = {
  args: {
    genre: 'agreements',
    checkboxGenre: 'square',
    value: [{ value: 0, label: 'First' }],
    options: [
      { value: 0, label: 'First' },
      { value: 1, label: 'Second' },
    ],
    labelField: 'label',
    valueField: 'value',
    multiple: true,
  },
}

export const Content: Story = {
  args: {
    genre: 'agreements',
    checkboxGenre: 'square',
    value: [{ value: 0, label: 'First' }],
    options: [
      { value: 0, label: 'First' },
      { value: 1, label: 'Second', content: <LibraryIcon.Coffee /> },
    ],
    labelField: 'label',
    valueField: 'value',
    contentField: 'content',
    multiple: true,
  },
}
