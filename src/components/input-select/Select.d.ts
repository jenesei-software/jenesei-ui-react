import { InputSelectOptionType } from '.'
import { CheckboxGenreType } from '@components/checkbox'
import { GroupBase } from 'react-select'
import type {} from 'react-select/base'
import { Styles } from 'styled-components/dist/types'

declare module 'react-select/base' {
  export interface Props<
    Option extends InputSelectOptionType,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Group extends GroupBase<Option>,
  > {
    iconType?: CheckboxGenreType
    isAlwaysPlaceholder?: boolean
    selectOptionStyle?: Styles<object>
    customNoOptionsMessage?: React.ReactNode
  }
}
