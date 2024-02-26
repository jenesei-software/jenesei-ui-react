import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputDefaultProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
  value?: string
  readOnly?: boolean
  disabled?: boolean
  icon?: {
    value: () => JSX.Element
    onCLick: () => void
  }
  className?: string
  isError?: boolean
  errorMessage?: string
  prefixContent?: {
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
}
