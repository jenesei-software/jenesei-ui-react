import { TJeneseiThemeSize } from '../../main'

export type LibraryCheckboxesProps = {
  [icon in LibraryCheckboxesNameString]: (
    props: LibraryCheckboxesItemProps,
  ) => JSX.Element
}

export interface LibraryCheckboxesItemProps {
  className?: string
  size: TJeneseiThemeSize
}

export interface StyledLibraryCheckboxesItemProps {
  $size: LibraryCheckboxesItemProps['size']
}

export enum LibraryCheckboxesName {
  Radio,
  Square,
}

export type LibraryCheckboxesNameString = keyof typeof LibraryCheckboxesName
