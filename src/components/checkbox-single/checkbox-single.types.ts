import { CheckboxGenreType, CheckboxProps } from '../../main'

export interface CheckboxSingleProps {
  checkbox?: CheckboxProps
  content?: React.ReactNode
  className?: string
  value?: boolean
  genre: CheckboxGenreType
  onChange?: (value: boolean) => void
}
