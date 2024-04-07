import { CheckboxGenreType } from '../../main'
import { FocusEventHandler } from 'react'
import { MenuPosition } from 'react-select'
import { Styles } from 'styled-components/dist/types'

export type TSelectGenre = 'user-min' | 'user' | 'service'

export type InputSelectOptionType = {
  value?: string | number
  label?: string
  content?: React.ReactNode
  isIconHidden?: boolean
  isContentHidden?: boolean
  isDisabled?: boolean
}

export interface InputSelectProps {
  selectOptionStyle?: Styles<object>
  isAlwaysPlaceholder?: boolean
  iconType?: CheckboxGenreType
  value?: InputSelectOptionType[] | InputSelectOptionType | null
  defaultValue?: InputSelectOptionType[] | InputSelectOptionType
  options?: InputSelectOptionType[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...event: any) => void
  onClick?: () => void
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined
  className?: string
  genre?: TSelectGenre
  placeholder?: React.ReactNode
  background?: string
  color?: string
  menuPosition?: MenuPosition
  isMulti?: boolean
  isSearchable?: boolean
  isOnlyDefaultValue?: boolean
  isMenuIsOpen?: boolean
  isHideIndicatorSeparator?: boolean
  isDisabled?: boolean
  isHideArrow?: boolean
  isCloseMenuOnSelect?: boolean
}
