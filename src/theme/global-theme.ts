export interface TJeneseiThemeGenreType {
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

export interface TJeneseiThemeGenre {
  product: TJeneseiThemeGenreType
  gray: TJeneseiThemeGenreType
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
    input: TJeneseiThemeGenre
  }
}

export const JeneseiThemeVariables = {
  white: '#fff',
  black: '#000',
  black01: '#0000001A',
  transparent: 'transparent',
  danger: 'red',
  focus: '#1565C01A',
  productRest: '#4195D2FF',
  productHover: '#3585bfFF',
  productActive: '#1769A5FF',
  productFocus: '#4195D2FF',
  grayRest: '#f6f8fa',
  grayHover: '#f3f4f6',
  grayActive: '#ebecf0',
  grayFocus: '#f6f8fa',
}

export type JeneseiThemeVariablesKeys = keyof typeof JeneseiThemeVariables

const DefaultJeneseiThemeGenre = {
  product: {
    background: {
      rest: JeneseiThemeVariables.productRest,
      hover: JeneseiThemeVariables.productHover,
      active: JeneseiThemeVariables.productActive,
      focus: JeneseiThemeVariables.productFocus,
    },
    color: {
      rest: JeneseiThemeVariables.white,
      hover: JeneseiThemeVariables.white,
      active: JeneseiThemeVariables.white,
      focus: JeneseiThemeVariables.white,
      placeholder: JeneseiThemeVariables.white,
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
      active: JeneseiThemeVariables.transparent,
      focus: JeneseiThemeVariables.white,
    },
  },
  gray: {
    background: {
      rest: JeneseiThemeVariables.grayRest,
      hover: JeneseiThemeVariables.grayHover,
      active: JeneseiThemeVariables.grayActive,
      focus: JeneseiThemeVariables.grayFocus,
    },
    color: {
      rest: JeneseiThemeVariables.black,
      hover: JeneseiThemeVariables.black,
      active: JeneseiThemeVariables.black,
      focus: JeneseiThemeVariables.black,
      placeholder: JeneseiThemeVariables.grayActive,
    },
    border: {
      rest: JeneseiThemeVariables.black01,
      hover: JeneseiThemeVariables.black01,
      active: JeneseiThemeVariables.black01,
      focus: JeneseiThemeVariables.black01,
    },
  },
}

const DefaultJeneseiThemeGenreToggle = {
  product: {
    background: {
      rest: JeneseiThemeVariables.productRest,
      hover: JeneseiThemeVariables.productHover,
      active: JeneseiThemeVariables.productActive,
      focus: JeneseiThemeVariables.productFocus,
    },
    color: {
      rest: JeneseiThemeVariables.white,
      hover: JeneseiThemeVariables.white,
      active: JeneseiThemeVariables.white,
      focus: JeneseiThemeVariables.white,
      placeholder: JeneseiThemeVariables.white,
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
      active: JeneseiThemeVariables.transparent,
      focus: JeneseiThemeVariables.white,
    },
  },
  gray: {
    background: {
      rest: JeneseiThemeVariables.grayFocus,
      hover: JeneseiThemeVariables.grayHover,
      active: JeneseiThemeVariables.grayActive,
      focus: JeneseiThemeVariables.grayFocus,
    },
    color: {
      rest: JeneseiThemeVariables.white,
      hover: JeneseiThemeVariables.white,
      active: JeneseiThemeVariables.black,
      focus: JeneseiThemeVariables.white,
      placeholder: JeneseiThemeVariables.grayActive,
    },
    border: {
      rest: JeneseiThemeVariables.black01,
      hover: JeneseiThemeVariables.black01,
      active: JeneseiThemeVariables.black01,
      focus: JeneseiThemeVariables.black01,
    },
  },
}
export const JeneseiTheme: IJeneseiTheme = {
  fontFamily: 'Inter',
  colors: {
    white: JeneseiThemeVariables.white,
    focus: JeneseiThemeVariables.focus,
    danger: JeneseiThemeVariables.danger,
    button: DefaultJeneseiThemeGenre,
    toggle: DefaultJeneseiThemeGenreToggle,
    checkbox: DefaultJeneseiThemeGenre,
    input: DefaultJeneseiThemeGenre,
  },
}

export const KEY_SIZE_DATA: Record<TJeneseiThemeSize, IJeneseiThemeSizeData> = {
  large: {
    height: 56,
    heightIcon: 18,
    radius: 16,
    padding: 18,
    font: 18,
  },
  largeMedium: {
    height: 49,
    heightIcon: 16,
    radius: 14,
    padding: 16,
    font: 16,
  },
  medium: {
    height: 42,
    heightIcon: 14,
    radius: 12,
    padding: 12,
    font: 14,
  },
  mediumSmall: {
    height: 35,
    heightIcon: 12,
    radius: 10,
    padding: 10,
    font: 12,
  },
  small: {
    height: 28,
    heightIcon: 10,
    radius: 8,
    padding: 6,
    font: 10,
  },
}
