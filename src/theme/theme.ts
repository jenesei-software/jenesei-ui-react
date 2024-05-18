import { IJeneseiTheme, IJeneseiThemeSizeData, TJeneseiThemeSize } from '.'

const JeneseiThemeVariables = {
  white: '#fff',
  black: '#000',
  black01: '#0000001A',
  transparent: 'transparent',
  danger: 'red',
  focus: '#1565C01A',
  product: {
    rest: '#4195D2FF',
    hover: '#3585bfFF',
    active: '#1769A5FF',
    focus: '#4195D2FF',
  },
  gray: {
    rest: '#f6f8fa',
    hover: '#f3f4f6',
    active: '#ebecf0',
    focus: '#f6f8fa',
  },
}
const DefaultJeneseiThemeGenre = {
  product: {
    background: {
      rest: JeneseiThemeVariables.product.rest,
      hover: JeneseiThemeVariables.product.hover,
      active: JeneseiThemeVariables.product.active,
      focus: JeneseiThemeVariables.product.focus,
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
      rest: JeneseiThemeVariables.gray.rest,
      hover: JeneseiThemeVariables.gray.hover,
      active: JeneseiThemeVariables.gray.active,
      focus: JeneseiThemeVariables.gray.focus,
    },
    color: {
      rest: JeneseiThemeVariables.black,
      hover: JeneseiThemeVariables.black,
      active: JeneseiThemeVariables.black,
      focus: JeneseiThemeVariables.black,
      placeholder: JeneseiThemeVariables.gray.active,
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
    toggle: DefaultJeneseiThemeGenre,
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
