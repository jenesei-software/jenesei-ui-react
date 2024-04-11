import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Checkboxes } from '.'

const meta: Meta<typeof Checkboxes> = {
  component: Checkboxes,
  title: 'Checkbox/Checkboxes',
}

export default meta
type Story = StoryObj<typeof Checkboxes>

export const Product: Story = {
  args: {
    checkboxGenre: 'square',
    checkboxColor: 'product',
    checkboxSize: 'large',
    checkboxWidth: '100%',
    value: [{ value: 0, label: 'First' }],
    options: [
      { value: 0, label: 'First' },
      { value: 1, label: 'Second' },
    ],
    labelField: 'label',
    valueField: 'value',
    multiple: true,
    width: '300px',
  },
}

export const ProductChildren: Story = {
  args: {
    checkboxGenre: 'square',
    checkboxColor: 'product',
    checkboxSize: 'large',
    value: [{ value: 0, children: 'First' }],
    options: [
      { value: 0, children: 'First' },
      { value: 1, children: 'Second' },
    ],
    valueField: 'value',
    childrenField: 'children',
    multiple: true,
    width: '100%',
  },
}

export const ProductLabelWithChildren: Story = {
  args: {
    checkboxGenre: 'square',
    checkboxColor: 'product',
    checkboxSize: 'large',
    checkboxWidth: '140px',
    value: [{ value: 0, label: 'First' }],
    options: [
      { value: 0, label: 'First' },
      { value: 1, label: 'Second', children: '<LibraryIcon.Support />' },
    ],
    labelField: 'label',
    valueField: 'value',
    childrenField: 'children',
    multiple: true,
    width: '100%',
  },
}

export const Gray: Story = {
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
    width: '300px',
  },
}
