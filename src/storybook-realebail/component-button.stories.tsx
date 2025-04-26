import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '../components/button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'RealEbail/Button'
}

export default meta

type Story = StoryObj<typeof Button>

export const Product: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genre: 'realebail-product',
    size: 'medium',
    customFontWeight: 400
  }
}
export const Gray: Story = {
  args: {
    children: 'Click',
    width: 'auto',
    type: 'button',
    genre: 'realebail-gray',
    size: 'medium',
    customFontWeight: 400
  }
}
