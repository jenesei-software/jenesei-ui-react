import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Form } from '.'

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Form',
}

export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {},
}
