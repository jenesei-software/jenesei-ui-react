import { IJeneseiTheme, IJeneseiThemeSizeData, TJeneseiThemeSize } from '.'

const JeneseiThemeVariables = {
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
  danger: 'red',
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
const DefaultJeneseiThemeGenre = {
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
}
const DefaultJeneseiThemeInputGenre = {
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
        placeholder: JeneseiThemeVariables.white,
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
        placeholder: JeneseiThemeVariables.white,
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
        placeholder: JeneseiThemeVariables.gray.active,
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
        placeholder: JeneseiThemeVariables.gray.active,
      },
      border: {
        rest: JeneseiThemeVariables.gray.rest,
        hover: JeneseiThemeVariables.gray.hover,
        active: JeneseiThemeVariables.transparent,
        focus: JeneseiThemeVariables.gray.focus,
      },
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
    input: DefaultJeneseiThemeInputGenre,
  },
}

export const KEY_SIZE_DATA: Record<TJeneseiThemeSize, IJeneseiThemeSizeData> = {
  large: {
    height: 56,
    heightIcon: 16,
    radius: 16,
    padding: 18,
    font: 16,
  },
  largeMedium: {
    height: 49,
    heightIcon: 14,
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
    heightIcon: 12,
    radius: 8,
    padding: 6,
    font: 12,
  },
}
