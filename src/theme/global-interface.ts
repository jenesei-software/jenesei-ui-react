export interface TJeneseiThemeGenreType {
  background: {
    rest: string
    hover: string
  }
  border: {
    rest: string
    hover: string
  }
  color: {
    rest: string
    hover: string
    placeholder: string
  }
}

export interface TJeneseiThemeGenre {
  gray: TJeneseiThemeGenreType
  grayBorder: TJeneseiThemeGenreType
  black: TJeneseiThemeGenreType
  blackBorder: TJeneseiThemeGenreType
  product: TJeneseiThemeGenreType
  productBorder: TJeneseiThemeGenreType
  white: TJeneseiThemeGenreType
  greenTransparent: TJeneseiThemeGenreType
  redTransparent: TJeneseiThemeGenreType
}

export interface IJeneseiThemeSize {
  height: number
  heightIcon: number
  radius: number
  padding: number
  font: number
}

export interface IJeneseiThemeScreens {
  mobile: { width: string }
  tablet: { width: string }
  other: boolean
}

export type TJeneseiThemeSize =
  | 'large'
  | 'largeMedium'
  | 'medium'
  | 'mediumSmall'
  | 'small'

export type TJeneseiFontFamily = 'Inter'

export interface IJeneseiTheme {
  transitionDuration: string
  transitionTimingFunction: string
  transition: string
  screens: IJeneseiThemeScreens
  fontFamily: TJeneseiFontFamily
  effects: {
    button: {
      playstation: string
    }
  }
  colors: {
    focus: string
    white: string
    danger: string
    button: TJeneseiThemeGenre
    toggle: TJeneseiThemeGenre
    checkbox: TJeneseiThemeGenre
    input: TJeneseiThemeGenre
  }
}

export type JeneseiThemeVariablesKeys =
  | 'transparent'
  | 'black100'
  | 'black80'
  | 'black60'
  | 'black50'
  | 'black40'
  | 'black10'
  | 'black05'
  | 'grayJanice'
  | 'grayKaren'
  | 'grayMonica'
  | 'graySandra'
  | 'grayPatricia'
  | 'graySarah'
  | 'greenGoogle'
  | 'green100'
  | 'green25'
  | 'green10'
  | 'whiteStandard'
  | 'yellowGoogle'
  | 'redGoogle'
  | 'red100'
  | 'red25'
  | 'red10'
  | 'blueGoogle'
  | 'blueRest'
  | 'blueActive'
  | 'blueHover'
  | 'blueFocus'
  | 'blueBr'
