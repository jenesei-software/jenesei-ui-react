import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Loading as LoadingComponent } from '.'

const meta: Meta<typeof LoadingComponent> = {
  component: LoadingComponent,
  title: 'Component/Loading'
}

export default meta
type Story = StoryObj<typeof LoadingComponent>

export const Loading: Story = {
  args: {
    type: 'cubes',
    size: 'large',
    colorKey: 'blueRest'
  }
}
