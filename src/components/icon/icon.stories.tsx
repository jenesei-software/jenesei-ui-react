import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Icon } from '.'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Icon',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Icon>

export const Curved: Story = {
  args: {
    primaryColor: 'blueGoogle',
    name: 'Folder',
    size: 'large',
    type: 'curved'
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
