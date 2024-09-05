import type { Meta, StoryObj } from '@storybook/react'
import axios from 'axios'
import 'styled-components'

import { FormSignUp } from '.'

const meta: Meta<typeof FormSignUp> = {
  component: FormSignUp,
  title: 'Form/SignUp',
}

export default meta
type Story = StoryObj<typeof FormSignUp>

const baseURL = import.meta.env.VITE_BASE_URL || ''
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const SignUp: Story = {
  args: {
    genre: 'grayBorder',
    size: 'medium',
    variant: 'sign',
    axiosInstance: instance,
    width: '540px',
    onSubmit(field) {
      console.log(field)
    },
    onBack() {},
  },
}
