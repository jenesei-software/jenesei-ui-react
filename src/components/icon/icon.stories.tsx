import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Icon } from '.'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Component/Icon'
}

export default meta

type Story = StoryObj<typeof Icon>

export const Id: Story = {
  args: {
    primaryColor: 'blueGoogle',
    name: 'Folder',
    size: 'large',
    type: 'id'
  }
}

export const Checkbox: Story = {
  args: {
    primaryColor: 'blueGoogle',
    size: 'large',
    type: 'checkbox',
    name: 'Radio'
  }
}

export const Loading: Story = {
  args: {
    primaryColor: 'blueGoogle',
    size: 'large',
    type: 'loading',
    name: 'Circle'
  }
}
