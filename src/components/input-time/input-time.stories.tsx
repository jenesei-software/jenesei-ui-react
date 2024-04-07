import { InputTime } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof InputTime> = {
  component: InputTime,
  title: 'Input/Input Time',
}

export default meta
type Story = StoryObj<typeof InputTime>

export const Default: Story = {
  args: {
    input: {
      genre: 'user',
      placeholder: 'Время',
      value: '',
    },
  },
}
