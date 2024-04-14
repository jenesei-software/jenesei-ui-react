import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Checkboxes } from '.'

const meta: Meta<typeof Checkboxes> = {
  component: Checkboxes,
  title: 'Checkbox/Checkboxes',
}

export default meta
type Story = StoryObj<typeof Checkboxes>

export const CircleProductSecondary: Story = {
  args: {
    checkboxGenre: 'product',
    checkboxGenreType: 'secondary',
    checkBoxView: 'circle',
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
    checkboxIsHiddenBorder: false,
  },
}

export const CircleProductSecondaryChildren: Story = {
  args: {
    checkboxGenre: 'product',
    checkboxGenreType: 'secondary',
    checkBoxView: 'circle',
    checkboxSize: 'large',
    value: [{ value: 0, children: 'First' }],
    options: [
      { value: 0, children: 'First' },
      { value: 1, children: 'Second' },
      { value: 3, label: 'Thirst', children: '<LibraryIcon.Support />' },
    ],
    labelField: 'label',
    valueField: 'value',
    childrenField: 'children',
    multiple: true,
    width: '100%',
    checkboxIsHiddenBorder: true,
  },
}

export const CircleProductPrimary: Story = {
  args: {
    checkboxGenre: 'product',
    checkboxGenreType: 'primary',
    checkBoxView: 'circle',
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
    checkboxIsHiddenBorder: true,
  },
}

export const CircleProductPrimaryChildren: Story = {
  args: {
    checkboxGenre: 'product',
    checkboxGenreType: 'primary',
    checkBoxView: 'circle',
    checkboxSize: 'large',
    value: [{ value: 0, children: 'First' }],
    options: [
      { value: 0, children: 'First' },
      { value: 1, children: 'Second' },
      { value: 3, label: 'Thirst', children: '<LibraryIcon.Support />' },
    ],
    labelField: 'label',
    valueField: 'value',
    childrenField: 'children',
    multiple: true,
    width: '100%',
    checkboxIsHiddenBorder: true,
  },
}
