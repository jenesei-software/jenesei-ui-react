export type TJeneseiTheme = 'cloud'

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

export interface TJeneseiThemeGenreType {
  primary: TJeneseiThemeGenreTypeState
  secondary: TJeneseiThemeGenreTypeState
}

export interface TJeneseiThemeGenre {
  product: TJeneseiThemeGenreType
}

export interface IJeneseiThemeColorVariant {
  100: string
  10: string
}

export type TJeneseiThemeSize = 'large' | 'medium' | 'small'

export interface IJeneseiTheme {
  colors: {
    focus: string
    white: string
    button: TJeneseiThemeGenre
    checkbox: TJeneseiThemeGenre
  }
}
