import type { Meta, StoryObj } from '@storybook/react-vite'
import 'styled-components'

import { Typography as TypographyComponent } from '@local/components/typography'

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Component/Typography'
}

export default meta

type Story = StoryObj<typeof TypographyComponent>

export const Typography: Story = {
  args: {
    sx: {
      default: {
        variant: 'h1'
      }
    },
    children: 'Hello, World!'
  }
}
