import { TJeneseiTheme } from '../../main'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Styles } from 'styled-components/dist/types'

export interface InputStringProps {
  theme?: TJeneseiTheme
  css?: Styles<object>
  register?: UseFormRegisterReturn
  value?: string
  onChange?: (value: string) => void
  className?: string
  prefixContent?: {
    css?: Styles<object>
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
  postfixContent?: {
    css?: Styles<object>
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
  defaultValue?: string
  readOnly?: boolean
  disabled?: boolean
  placeholder?: string
}
