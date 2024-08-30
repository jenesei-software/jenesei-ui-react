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

export interface TJeneseiThemeGenreTypeToggle {
  track: {
    rest: {
      active: string
      unActive: string
    }
    hover: {
      active: string
      unActive: string
    }
  }
  thumb: {
    rest: {
      active: string
      unActive: string
    }
    hover: {
      active: string
      unActive: string
    }
  }
  border: {
    rest: {
      active: string
      unActive: string
    }
    hover: {
      active: string
      unActive: string
    }
  }
}

export interface TJeneseiThemeGenreTypeDate {
  background: {
    rest: string
    hover: string
    today: string
    weekend: string
    choice: string
    line: string
  }
  border: {
    rest: string
    hover: string
    today: string
    weekend: string
    choice: string
    line: string
  }
  color: {
    rest: string
    hover: string
    placeholder: string
    today: string
    weekend: string
    choice: string
    line: string
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

export interface TJeneseiThemeGenreToggle {
  product: TJeneseiThemeGenreTypeToggle
}
export interface TJeneseiThemeGenreInput {
  gray: TJeneseiThemeGenreType
  grayBorder: TJeneseiThemeGenreType
}
export interface TJeneseiThemeGenreDate {
  gray: TJeneseiThemeGenreTypeDate
  grayBorder: TJeneseiThemeGenreTypeDate
}
export interface IJeneseiThemeSize {
  height: number
  heightIcon: number
  radius: number
  padding: number
  font: number
}

export interface IJeneseiThemeSizeToggle {
  height: number
  width: number
  padding: number
  thumb: number
}

export interface IJeneseiThemeScreens {
  mobile: { width: string }
  tablet: { width: string }
  other: boolean
}

export type TJeneseiThemeSize = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small'

export type TJeneseiFontFamily = 'Inter' | 'Roboto'

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
    toggle: {
      rest: string
      hover: string
      active: string
    }
  }
  palette: Record<JeneseiThemeVariablesKeys, string>
  colors: {
    focus: string
    white: string
    danger: string
    date: TJeneseiThemeGenreDate
    button: TJeneseiThemeGenre
    toggle: TJeneseiThemeGenreToggle
    checkbox: TJeneseiThemeGenre
    input: TJeneseiThemeGenreInput
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
