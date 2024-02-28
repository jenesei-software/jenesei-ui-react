export type TJeneseiTheme = 'cloud'

export interface IJeneseiTheme {
  colors: {
    black: {
      100: string
      80: string
      60: string
      50: string
      40: string
      10: string
      5: string
    }
    white: {
      100: string
      80: string
      60: string
      50: string
      40: string
      10: string
      5: string
    }
    product: {
      100: string
      20: string
    }
    success: {
      100: string
      10: string
    }
    danger: {
      100: string
      10: string
    }
    gray: {
      f2f2f7: string
      e5e5ea: string
      c7c7cc: string
      d1d1d6: string
      484848: string
      737373: string
      d3d3d3: string
    }
  }
  effects: {
    playstation: {
      default: string
    }
    volumetric: {
      wrapper: string
      active: string
      default: string
    }
    input: {
      default: string
    }
    header: {
      wrapper: string
      menu: string
    }
  }
  sizes: {
    header: { width: string }
    container: { width: string }
    footer: { width: string }
    modal: { width: string }
    menu: { width: string }
  }

  screens: {
    mobile: { width: string }
    tablet: { width: string }
    menu: { width: string }
    modal: { width: string }
    desktop: { width: string }
  }
}
