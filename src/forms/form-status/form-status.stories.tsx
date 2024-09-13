import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { FormStatus } from '.'

const meta: Meta<typeof FormStatus> = {
  component: FormStatus,
  title: 'Form/Status',
}

export default meta
type Story = StoryObj<typeof FormStatus>

export const Status: Story = {
  args: {
    width: '540px',
    status: 'success',
  },
}
