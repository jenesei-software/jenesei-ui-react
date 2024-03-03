import { TJeneseiTheme } from '../../main'
import { UseFormRegisterReturn } from 'react-hook-form'
import { RuleSet } from 'styled-components/dist/types'

export interface InputStringProps {
  theme?: TJeneseiTheme
  register?: UseFormRegisterReturn
  value?: string
  onChange?: (value: string) => void
  className?: string
  prefixContent?: {
    css?: RuleSet
    width: string
    height: string
    content: React.ReactNode
    left: string
    right: string
    onClick?: () => void
  }
  postfixContent?: {
    css?: RuleSet
    width: string
    height: string
    content: React.ReactNode
    left: string
    right: string
    onClick?: () => void
  }
  input?: {
    css?: RuleSet
    width: string
    height: string
    content: React.ReactNode
    left: string
    right: string
  }
  defaultValue?: string
  readOnly?: boolean
  disabled?: boolean
  placeholder?: string
  type?: 'email' | 'password' | 'text'
}
