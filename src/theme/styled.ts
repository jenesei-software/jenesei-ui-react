export interface TJeneseiThemeGenreTypeState {
  background: {
    rest: string
    hover: string
    focus: string
    active: string
  }
  border: {
    rest: string
    hover: string
    focus: string
    active: string
  }
  color: {
    rest: string
    hover: string
    focus: string
    active: string
  }
}

export interface TJeneseiThemeGenreTypeInputState {
  background: {
    rest: string
    hover: string
    focus: string
    active: string
  }
  border: {
    rest: string
    hover: string
    focus: string
    active: string
  }
  color: {
    rest: string
    hover: string
    focus: string
    active: string
    placeholder: string
  }
}

export interface TJeneseiThemeGenreType {
  primary: TJeneseiThemeGenreTypeState
  secondary: TJeneseiThemeGenreTypeState
}

export interface TJeneseiThemeGenreInputType {
  primary: TJeneseiThemeGenreTypeInputState
  secondary: TJeneseiThemeGenreTypeInputState
}

export interface TJeneseiThemeGenre {
  product: TJeneseiThemeGenreType
  gray: TJeneseiThemeGenreType
}

export interface TJeneseiThemeInputGenre {
  product: TJeneseiThemeGenreInputType
  gray: TJeneseiThemeGenreInputType
}

export interface IJeneseiThemeColorVariant {
  100: string
  10: string
}

export interface IJeneseiThemeSizeData {
  height: number
  heightIcon: number
  radius: number
  padding: number
  font: number
}

export type TJeneseiThemeSize =
  | 'large'
  | 'largeMedium'
  | 'medium'
  | 'mediumSmall'
  | 'small'

export type TJeneseiFontFamily = 'Inter'

export interface IJeneseiTheme {
  fontFamily: TJeneseiFontFamily
  colors: {
    focus: string
    white: string
    danger: string
    button: TJeneseiThemeGenre
    toggle: TJeneseiThemeGenre
    checkbox: TJeneseiThemeGenre
    input: TJeneseiThemeInputGenre
  }
}
