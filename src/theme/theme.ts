import { IJeneseiTheme } from '.'

const JeneseiThemeVariables = {
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
  focus: '#1565C01A',
  product: {
    rest: '#4195D2FF',
    hover: '#1769A5FF',
    active: '#4195D21A',
    focus: '#1769A5FF',
  },
  gray: {
    rest: '#484848FF',
    hover: '#737373FF',
    active: '#E5E5EAff',
    focus: '#737373FF',
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
            active: JeneseiThemeVariables.product.active,
            focus: JeneseiThemeVariables.product.focus,
          },
          color: {
            rest: JeneseiThemeVariables.white,
            hover: JeneseiThemeVariables.white,
            active: JeneseiThemeVariables.product.rest,
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
            active: JeneseiThemeVariables.product.active,
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
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.product.focus,
          },
        },
      },
      gray: {
        primary: {
          background: {
            rest: JeneseiThemeVariables.gray.rest,
            hover: JeneseiThemeVariables.gray.hover,
            active: JeneseiThemeVariables.gray.active,
            focus: JeneseiThemeVariables.gray.focus,
          },
          color: {
            rest: JeneseiThemeVariables.white,
            hover: JeneseiThemeVariables.white,
            active: JeneseiThemeVariables.black,
            focus: JeneseiThemeVariables.white,
          },
          border: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.transparent,
          },
        },
        secondary: {
          background: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.gray.active,
            focus: JeneseiThemeVariables.transparent,
          },
          color: {
            rest: JeneseiThemeVariables.gray.rest,
            hover: JeneseiThemeVariables.gray.hover,
            active: JeneseiThemeVariables.black,
            focus: JeneseiThemeVariables.gray.focus,
          },
          border: {
            rest: JeneseiThemeVariables.gray.rest,
            hover: JeneseiThemeVariables.gray.hover,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.gray.focus,
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
            active: JeneseiThemeVariables.product.active,
            focus: JeneseiThemeVariables.product.focus,
          },
          color: {
            rest: JeneseiThemeVariables.white,
            hover: JeneseiThemeVariables.white,
            active: JeneseiThemeVariables.product.rest,
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
            active: JeneseiThemeVariables.product.active,
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
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.product.focus,
          },
        },
      },
      gray: {
        primary: {
          background: {
            rest: JeneseiThemeVariables.gray.rest,
            hover: JeneseiThemeVariables.gray.hover,
            active: JeneseiThemeVariables.gray.active,
            focus: JeneseiThemeVariables.gray.focus,
          },
          color: {
            rest: JeneseiThemeVariables.white,
            hover: JeneseiThemeVariables.white,
            active: JeneseiThemeVariables.black,
            focus: JeneseiThemeVariables.white,
          },
          border: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.transparent,
          },
        },
        secondary: {
          background: {
            rest: JeneseiThemeVariables.transparent,
            hover: JeneseiThemeVariables.transparent,
            active: JeneseiThemeVariables.gray.active,
            focus: JeneseiThemeVariables.transparent,
          },
          color: {
            rest: JeneseiThemeVariables.gray.rest,
            hover: JeneseiThemeVariables.gray.hover,
            active: JeneseiThemeVariables.black,
            focus: JeneseiThemeVariables.gray.focus,
          },
          border: {
            rest: JeneseiThemeVariables.gray.rest,
            hover: JeneseiThemeVariables.gray.hover,
            active: JeneseiThemeVariables.transparent,
            focus: JeneseiThemeVariables.gray.focus,
          },
        },
      },
    },
  },
}
