import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { InputOTP, InputOTPProps } from '../components/input-otp'

const meta: Meta<typeof InputOTP> = {
  component: InputOTP,
  title: 'Component/InputOTP'
}

export default meta
type Story = StoryObj<typeof InputOTP>

const defaultArgs: Partial<InputOTPProps> = {
  genre: 'blackBorder',
  size: 'largeMedium'
}

export const Default: Story = {
  args: {
    ...defaultArgs,
    length: 6,
    sx: {
      default: {
        width: '320px'
      }
    },
    onComplete(otp) {
      console.log('onComplete', otp)
    },
    onBlur(e) {
      console.log('onBlur', e)
    },
    onChange(value) {
      console.log('onChange', value)
    }
  }
}
