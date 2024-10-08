import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import 'styled-components'

import { FormCheckYourEmail } from '.'

const meta: Meta<typeof FormCheckYourEmail> = {
  component: FormCheckYourEmail,
  title: 'Form/Check Your Email',
}

export default meta
type Story = StoryObj<typeof FormCheckYourEmail>

export const Check_Your_Email: Story = {
  args: {
    isLoading: false,
    width: '540px',
    email: 'test@test.test',
    onSubmit(field) {
      console.log('field', field)
    },
    onComplete: () => {
      console.log('Complete')
    },
    date: moment(),
    minutes: 1,
    attemptNumber: 1,
  },
}
