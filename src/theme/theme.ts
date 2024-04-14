import { IJeneseiTheme } from '.'

const JeneseiThemeVariables = {
  white: '#fff',
  transparent: 'transparent',
  focus: '#1565C01A',
  product: {
    rest: '#4195D2FF',
    active: ' #4195D21A',
    hover: '#1769A5FF',
    focus: '#1769A5FF',
  },
}
export const JeneseiTheme: IJeneseiTheme = {
  colors: {
    white: JeneseiThemeVariables.white,
    focus: JeneseiThemeVariables.focus,
    button: {
      product: {
        primary: {
          background: {
            rest: JeneseiThemeVariables.product.rest,
            hover: JeneseiThemeVariables.product.hover,
            active: JeneseiThemeVariables.product.rest,
            focus: JeneseiThemeVariables.product.focus,
          },
          color: {
            rest: JeneseiThemeVariables.white,
            hover: JeneseiThemeVariables.white,
            active: JeneseiThemeVariables.white,
            focus: JeneseiThemeVariables.white,
          },
          border: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.white,
          },
        },
        secondary: {
          background: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.transparent,
          },
          color: {
            rest: JeneseiThemeVariables.product.rest,
            hover: JeneseiThemeVariables.product.hover,
            active: JeneseiThemeVariables.product.rest,
            focus: JeneseiThemeVariables.product.focus,
          },
          border: {
            rest: JeneseiThemeVariables.product.rest,
            hover: JeneseiThemeVariables.product.hover,
            active: JeneseiThemeVariables.product.rest,
            focus: JeneseiThemeVariables.product.focus,
          },
        },
      },
    },
    checkbox: {
      product: {
        primary: {
          background: {
            rest: JeneseiThemeVariables.product.rest,
            hover: JeneseiThemeVariables.product.hover,
            active: JeneseiThemeVariables.product.rest,
            focus: JeneseiThemeVariables.product.focus,
          },
          color: {
            rest: JeneseiThemeVariables.white,
            hover: JeneseiThemeVariables.white,
            active: JeneseiThemeVariables.white,
            focus: JeneseiThemeVariables.white,
          },
          border: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.white,
          },
        },
        secondary: {
          background: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.transparent,
          },
          color: {
            rest: JeneseiThemeVariables.product.rest,
            hover: JeneseiThemeVariables.product.hover,
            active: JeneseiThemeVariables.product.rest,
            focus: JeneseiThemeVariables.product.focus,
          },
          border: {
            rest: JeneseiThemeVariables.product.rest,
            hover: JeneseiThemeVariables.product.hover,
            active: JeneseiThemeVariables.product.rest,
            focus: JeneseiThemeVariables.product.focus,
          },
        },
      },
    },
  },
}
