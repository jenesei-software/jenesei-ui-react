import {
  IJeneseiTheme,
  IJeneseiThemeSize,
  JeneseiThemeVariablesKeys,
  TJeneseiThemeSize,
} from '.'

export const JeneseiThemeVariables: Record<JeneseiThemeVariablesKeys, string> =
  {
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
  transition: '0.3s ease',
  transitionDuration: '0.3s',
  transitionTimingFunction: 'ease',
  screens: {
    mobile: { width: '850px' },
    tablet: { width: '1290px' },
    other: true,
  },
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

export const KEY_SIZE_DATA: Record<TJeneseiThemeSize, IJeneseiThemeSize> = {
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
