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
export interface TJeneseiThemeGenreTypeRange {
  thumb: {
    background: {
      rest: string
      hover: string
    }
    border: {
      rest: string
      hover: string
    }
  }

  track: {
    background: {
      rest: string
    }
    gradient: {
      rest: string
    }
  }
}
export interface TJeneseiThemeGenreTypeSelect {
  background: {
    rest: string
    hover: string
    select: string
  }

  border: {
    rest: string
    hover: string
    select: string
  }

  color: {
    rest: string
    hover: string
    select: string
    placeholder: string
  }
}
export interface TJeneseiThemeGenreTypeImageSelect {
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
  active: {
    rest: {
      track: string
      thumb: string
      border: string
      thumbBoxShadow: string
    }
    hover: {
      track: string
      thumb: string
      border: string
      thumbBoxShadow: string
    }
  }

  unActive: {
    rest: {
      track: string
      thumb: string
      border: string
      thumbBoxShadow: string
    }
    hover: {
      track: string
      thumb: string
      border: string
      thumbBoxShadow: string
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
export interface TJeneseiThemeGenreTypeSonner {
  button: {
    genre: keyof TJeneseiThemeGenre
  }

  description: {
    color: string
  }

  icon: {
    color: string
  }

  title: {
    color: string
  }

  wrapper: {
    background: string
    borderColor: string
    boxShadow: string
    boxShadowHover: string
  }
}

export interface TJeneseiThemeGenreTypeForm {
  background: string

  border: string

  color: string
}

export type TJeneseiGenreName =
  | 'gray'
  | 'grayBorder'
  | 'black'
  | 'blackBorder'
  | 'product'
  | 'productBorder'
  | 'white'
  | 'greenTransparent'
  | 'redTransparent'
  | 'yellowTransparent'
  | 'realebail-product'
  | 'realebail-gray'
  | 'realebail-white'

export type TJeneseiThemeGenre = Record<
  Extract<
    TJeneseiGenreName,
    | 'gray'
    | 'grayBorder'
    | 'black'
    | 'blackBorder'
    | 'product'
    | 'productBorder'
    | 'white'
    | 'greenTransparent'
    | 'redTransparent'
    | 'yellowTransparent'
    | 'realebail-product'
    | 'realebail-gray'
    | 'realebail-white'
  >,
  TJeneseiThemeGenreType
>

export type TJeneseiThemeGenreToggle = Record<Extract<TJeneseiGenreName, 'product'>, TJeneseiThemeGenreTypeToggle>
export type TJeneseiThemeGenreSonner = Record<
  Extract<TJeneseiGenreName, 'black' | 'greenTransparent' | 'redTransparent' | 'yellowTransparent'>,
  TJeneseiThemeGenreTypeSonner
>
export type TJeneseiThemeGenreInput = Record<
  Extract<TJeneseiGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  TJeneseiThemeGenreType
>
export type TJeneseiThemeGenreRange = Record<
  Extract<TJeneseiGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  TJeneseiThemeGenreTypeRange
>
export type TJeneseiThemeGenreImageSelect = Record<
  Extract<TJeneseiGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  TJeneseiThemeGenreTypeImageSelect
>
export type TJeneseiThemeGenreSelect = Record<
  Extract<TJeneseiGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  TJeneseiThemeGenreTypeSelect
>
export type TJeneseiThemeGenreTextArea = Record<
  Extract<TJeneseiGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  TJeneseiThemeGenreType
>
export type TJeneseiThemeGenreDate = Record<
  Extract<TJeneseiGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  TJeneseiThemeGenreTypeDate
>

export interface IJeneseiThemeSize {
  font: number

  height: number

  heightIcon: number

  padding: number

  radius: number
}

export interface IJeneseiThemeSizeToggle {
  height: number

  padding: number

  thumb: number

  width: number
}

export type IJeneseiThemeScreens = Record<TJeneseiDevice, { width: number }>

export type TJeneseiThemeSize = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small'

export type TJeneseiFontFamily = 'Inter' | 'Roboto' | 'Work Sans'

export type TJeneseiTypographyHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'
export type TJeneseiTypographyWeight = 100 | 300 | 400 | 500 | 700 | 900
export type TJeneseiDevice = 'default' | 'tablet' | 'mobile'

export interface IJeneseiTheme {
  colors: {
    focus: string
    white: string
    danger: string
    range: TJeneseiThemeGenreRange
    date: TJeneseiThemeGenreDate
    button: TJeneseiThemeGenre
    toggle: TJeneseiThemeGenreToggle
    checkbox: TJeneseiThemeGenre
    input: TJeneseiThemeGenreInput
    imageSelect: TJeneseiThemeGenreImageSelect
    select: TJeneseiThemeGenreSelect
    sonner: TJeneseiThemeGenreSonner
  }

  effects: {
    input: string
    button: string
  }

  font: {
    family: TJeneseiFontFamily
    weight: TJeneseiTypographyWeight
    sizeDefault: Record<TJeneseiDevice, number>
    sizeHeading: Record<TJeneseiTypographyHeading, number>
    lineHeight: number
  }

  palette: Record<JeneseiPaletteKeys, string>

  screens: IJeneseiThemeScreens

  scrollbar: {
    width: number
    background: string
    thumb: string
    thumbBorder: string
  }

  transition: {
    duration: string
    timingFunction: string
    default: string
    icon: string
  }
}

export type JeneseiPaletteKeys =
  | 'transparent'
  | 'black100'
  | 'black80'
  | 'black60'
  | 'black50'
  | 'black40'
  | 'black10'
  | 'black05'
  | 'blackHelena'
  | 'grayJanice'
  | 'grayKaren'
  | 'grayMonica'
  | 'graySandra'
  | 'grayPatricia'
  | 'graySarah'
  | 'grayStassie'
  | 'grayAdriana'
  | 'greenGoogle'
  | 'grayBarbara'
  | 'green100'
  | 'green50'
  | 'green25'
  | 'green10'
  | 'green10Background'
  | 'whiteStandard'
  | 'whiteJanice'
  | 'yellowGoogle'
  | 'yellow100'
  | 'yellow50'
  | 'yellow25'
  | 'yellow10'
  | 'yellow10Background'
  | 'redGoogle'
  | 'red100'
  | 'red50'
  | 'red25'
  | 'red10'
  | 'red10Background'
  | 'blueGoogle'
  | 'blueRest'
  | 'blueActive'
  | 'blueHover'
  | 'blueFocus'
  | 'blueBr'
  | 'blueKaren'
  | 'blueMonica'
  | 'amnezia'
  | 'inherit'
  | 'currentColor'
