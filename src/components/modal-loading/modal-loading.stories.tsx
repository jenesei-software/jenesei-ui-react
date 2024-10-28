import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ModalLoading } from '.'

const meta: Meta<typeof ModalLoading> = {
  component: ModalLoading,
  title: 'Modal/Loading'
}

export default meta
type Story = StoryObj<typeof ModalLoading>

export const Default: Story = {
  args: {
    type: 'cubes',
    size: 'large',
    colorKey: 'blueRest'
  }
}
