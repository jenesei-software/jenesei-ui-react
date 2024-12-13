import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Typography as TypographyComponent } from '.'

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Component/Typography'
}

export default meta

type Story = StoryObj<typeof TypographyComponent>

export const Typography: Story = {
  args: {
    variant: 'h1',
    children: 'Hello, World!'
  }
}
