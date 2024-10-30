import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ModalLoading as ModalLoadingComponent } from '.'

const meta: Meta<typeof ModalLoadingComponent> = {
  component: ModalLoadingComponent,
  title: 'Modal/Loading',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ModalLoadingComponent>

export const Loading: Story = {
  args: {
    type: 'cubes',
    size: 'large',
    colorKey: 'blueRest'
  }
}
