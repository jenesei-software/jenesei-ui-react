export type LibraryCheckboxesProps = {
  [icon in LibraryCheckboxesNameString]: (
    props: LibraryCheckboxesItemProps
  ) => JSX.Element
}

export interface LibraryCheckboxesItemProps {
  className?: string
}

export enum LibraryCheckboxesName {
  Radio,
  Square,
}

export type LibraryCheckboxesNameString = keyof typeof LibraryCheckboxesName
