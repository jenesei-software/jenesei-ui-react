import { TInputGenre } from '../../main'
import { FocusEventHandler, HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputDefaultProps {
  icon?: {
    value: () => JSX.Element
    onCLick: () => void
  }
  prefixContent?: {
    content: React.ReactNode
    left: string
    right: string
    width: string
  }
  anotherContent?: {
    content: React.ReactNode
  }
  className?: string
  errorMessage?: string
  defaultValue?: string
  id?: string
  value?: string
  placeholder?: string
  step?: string | number
  minLength?: number
  maxLength?: number
  genre: TInputGenre
  register?: UseFormRegisterReturn
  type?: HTMLInputTypeAttribute
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onChange?: (value: string) => void
  isFocus?: boolean
  isOnlyText?: boolean
  isError?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isRequired?: boolean
}
