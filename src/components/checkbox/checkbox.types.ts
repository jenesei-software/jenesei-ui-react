import { ChangeEvent } from 'react'

export interface CheckboxProps {
  checked?: boolean

  genre: CheckboxGenreType

  onChange?:
    | ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined
}

export type CheckboxGenreType = 'square' | 'square-color-border' | 'circle'
