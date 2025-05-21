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
export interface TJeneseiThemeGenreTypeSelectImage {
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
  wrapper: {
    background: string
    borderColor: string
    boxShadow: string
    boxShadowHover: string
  }
  icon: {
    color: string
  }
  title: {
    color: string
  }
  description: {
    color: string
  }
}

export interface TJeneseiThemeGenreTypeForm {
  background: string
  border: string
  color: string
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
  yellowTransparent: TJeneseiThemeGenreType
  'realebail-product': TJeneseiThemeGenreType
  'realebail-gray': TJeneseiThemeGenreType
  'realebail-white': TJeneseiThemeGenreType
}

export interface TJeneseiThemeGenreToggle {
  product: TJeneseiThemeGenreTypeToggle
}
export interface TJeneseiThemeGenreSonner {
  black: TJeneseiThemeGenreTypeSonner
  greenTransparent: TJeneseiThemeGenreTypeSonner
  redTransparent: TJeneseiThemeGenreTypeSonner
  yellowTransparent: TJeneseiThemeGenreTypeSonner
}
export interface TJeneseiThemeGenreInput {
  gray: TJeneseiThemeGenreType
  grayBorder: TJeneseiThemeGenreType
  blackBorder: TJeneseiThemeGenreType
  'realebail-white': TJeneseiThemeGenreType
}
export interface TJeneseiThemeGenreSelectImage {
  gray: TJeneseiThemeGenreTypeSelectImage
  grayBorder: TJeneseiThemeGenreTypeSelectImage
  blackBorder: TJeneseiThemeGenreTypeSelectImage
  'realebail-white': TJeneseiThemeGenreTypeSelectImage
}
export interface TJeneseiThemeGenreSelect {
  gray: TJeneseiThemeGenreTypeSelect
  grayBorder: TJeneseiThemeGenreTypeSelect
  blackBorder: TJeneseiThemeGenreTypeSelect
  'realebail-white': TJeneseiThemeGenreTypeSelect
}
export interface TJeneseiThemeGenreTextArea {
  gray: TJeneseiThemeGenreType
  grayBorder: TJeneseiThemeGenreType
  blackBorder: TJeneseiThemeGenreType
  'realebail-white': TJeneseiThemeGenreType
}
export interface TJeneseiThemeGenreDate {
  gray: TJeneseiThemeGenreTypeDate
  grayBorder: TJeneseiThemeGenreTypeDate
  blackBorder: TJeneseiThemeGenreTypeDate
  'realebail-white': TJeneseiThemeGenreTypeDate
}
export interface TJeneseiThemeGenreForm {
  gray: TJeneseiThemeGenreTypeForm
  grayBorder: TJeneseiThemeGenreTypeForm
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

export type IJeneseiThemeScreens = Record<TJeneseiDevice, { width: number }>

export type TJeneseiThemeSize = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small'

export type TJeneseiFontFamily = 'Inter' | 'Roboto' | 'Work Sans'

export type TJeneseiTypographyHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'
export type TJeneseiTypographyWeight = 100 | 300 | 400 | 500 | 700 | 900
export type TJeneseiDevice = 'default' | 'tablet' | 'mobile'

export interface IJeneseiTheme {
  screens: IJeneseiThemeScreens
  transition: {
    duration: string
    timingFunction: string
    default: string
    icon: string
  }
  scrollbar: {
    width: number
    background: string
    thumb: string
    thumbBorder: string
  }
  font: {
    family: TJeneseiFontFamily
    weight: TJeneseiTypographyWeight
    sizeDefault: Record<TJeneseiDevice, number>
    sizeHeading: Record<TJeneseiTypographyHeading, number>
    lineHeight: number
  }
  effects: {
    input: string
    button: string
  }
  palette: Record<JeneseiPaletteKeys, string>
  colors: {
    focus: string
    white: string
    danger: string
    date: TJeneseiThemeGenreDate
    button: TJeneseiThemeGenre
    toggle: TJeneseiThemeGenreToggle
    checkbox: TJeneseiThemeGenre
    form: TJeneseiThemeGenreForm
    input: TJeneseiThemeGenreInput
    selectImage: TJeneseiThemeGenreSelectImage
    select: TJeneseiThemeGenreSelect
    sonner: TJeneseiThemeGenreSonner
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
