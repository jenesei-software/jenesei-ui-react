import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { CustomSelect } from '.'

const meta: Meta<typeof CustomSelect> = {
  component: CustomSelect,
  title: 'Select',
}

export default meta

type Story = StoryObj<typeof CustomSelect>

export const Default: Story = {
  args: {
    options: [
      {
        value: 'Zhopa',
        label: 'hui',
        iconGenre: 'gray',
        iconView: 'square',
        iconSize: 'medium',
      },
      {
        value: 'Zhopa2',
        label: 'hui',
        iconGenre: 'gray',
        iconView: 'square',
        iconSize: 'medium',
      },
    ],
    value: [
      {
        value: 'Zhopa',
        label: 'hui',
        iconGenre: 'product',
        iconView: 'square',
        iconSize: 'medium',
      },
    ],
    genre: 'gray',
    size: 'large',
    isCloseMenuOnSelect: false,
  },
}
