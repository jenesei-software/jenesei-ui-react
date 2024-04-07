import { Checkboxes } from '.'
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
    checkboxGenre: 'square',
    checkboxColor: 'gray',
    checkboxSize: 'large',
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
    checkboxGenre: 'square',
    checkboxColor: 'product',
    checkboxSize: 'large',
    value: [{ value: 0, label: 'First' }],
    options: [
      { value: 0, label: 'First' },
      { value: 1, label: 'Second', content: '<LibraryIcon.Support />' },
    ],
    labelField: 'label',
    valueField: 'value',
    contentField: 'content',
    multiple: true,
  },
}

export const CheckboxLabel: Story = {
  args: {
    checkboxGenre: 'square',
    checkboxColor: 'product',
    checkboxSize: 'large',
    checkboxWidth: '100%',
    value: [{ value: 0, label: 'First', checkboxLabel: 'Popa' }],
    options: [
      { value: 0, label: 'First', checkboxLabel: 'Popa' },
      {
        value: 1,
        label: 'Second',
        checkboxLabel: 'Pisya Kaka',
      },
    ],
    valueField: 'value',
    checkboxLabelField: 'checkboxLabel',
    multiple: true,
  },
}
