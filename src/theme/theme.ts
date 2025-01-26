import {
  IJeneseiTheme,
  IJeneseiThemeSize,
  IJeneseiThemeSizeToggle,
  JeneseiPaletteKeys,
  TJeneseiThemeGenreSonner,
  TJeneseiThemeSize
} from '.'

export const JeneseiPalette: Record<JeneseiPaletteKeys, string> = {
  currentColor: 'currentColor',
  inherit: 'inherit',
  transparent: 'transparent',
  black100: '#000000;',
  black80: 'rgba(0 0 0 / 0.8)',
  black60: 'rgba(0 0 0 / 0.6)',
  black50: 'rgba(0 0 0 / 0.5)',
  black40: 'rgba(0 0 0 / 0.4)',
  black10: 'rgba(0 0 0 / 0.1)',
  black05: 'rgba(0 0 0 / 0.05)',
  grayJanice: '#f2f2f7',
  grayKaren: '#e5e5ea',
  grayMonica: '#c7c7cc',
  graySandra: '#d1d1d6',
  grayPatricia: '#484848',
  graySarah: '#737373',
  grayStassie: '#8D8D8F',
  whiteStandard: '#ffffff',
  greenGoogle: '#34a853',
  green100: '#34a853',
  green25: 'rgba(52 168 83 / 0.25)',
  green50: 'rgba(52 168 83 / 0.50)',
  green10: 'rgba(52 168 83 / 0.1)',
  green10Background: '#EFFFF3',
  yellowGoogle: '#fbbc04',
  yellow100: '#e4bc1b',
  yellow50: 'rgba(228, 188, 27, 0.50)',
  yellow25: 'rgba(228, 188, 27, 0.25)',
  yellow10: 'rgba(228, 188, 27, 0.1)',
  yellow10Background: '#FFFBEA',
  redGoogle: '#ea4335',
  red100: '#ff4141',
  red50: 'rgba(255 65 65 / 0.50)',
  red25: 'rgba(255 65 65 / 0.25)',
  red10: 'rgba(255 65 65 / 0.1)',
  red10Background: '#FFEDED',
  blueGoogle: '#4285f4',
  blueRest: '#4195d2',
  blueActive: 'rgba(65 149 210 / 0.1)',
  blueHover: 'rgba(23 105 165 / 0.8)',
  blueFocus: '#1769a5',
  blueBr: '#0975a6',
  amnezia: '#222224'
}

const DefaultJeneseiThemeGenre = {
  white: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  },
  product: {
    background: {
      rest: JeneseiPalette.blueRest,
      hover: JeneseiPalette.blueHover
    },
    color: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      placeholder: JeneseiPalette.whiteStandard
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  },
  productBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard
    },
    color: {
      rest: JeneseiPalette.blueRest,
      hover: JeneseiPalette.blueHover,
      placeholder: JeneseiPalette.blueRest
    },
    border: {
      rest: JeneseiPalette.blueRest,
      hover: JeneseiPalette.blueHover
    }
  },
  gray: {
    background: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra
    }
  },
  black: {
    background: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60
    },
    color: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      placeholder: JeneseiPalette.whiteStandard
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard
    },
    color: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black100
    },
    border: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60
    }
  },
  greenTransparent: {
    background: {
      rest: JeneseiPalette.green10,
      hover: JeneseiPalette.green25
    },
    color: {
      rest: JeneseiPalette.green100,
      hover: JeneseiPalette.green100,
      placeholder: JeneseiPalette.green100
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  },
  yellowTransparent: {
    background: {
      rest: JeneseiPalette.yellow10,
      hover: JeneseiPalette.yellow25
    },
    color: {
      rest: JeneseiPalette.yellow100,
      hover: JeneseiPalette.yellow100,
      placeholder: JeneseiPalette.yellow100
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  },
  redTransparent: {
    background: {
      rest: JeneseiPalette.red10,
      hover: JeneseiPalette.red25
    },
    color: {
      rest: JeneseiPalette.red100,
      hover: JeneseiPalette.red100,
      placeholder: JeneseiPalette.red100
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  }
}

const DefaultJeneseiThemeGenreInput = {
  gray: {
    background: {
      rest: JeneseiPalette.grayJanice,
      hover: JeneseiPalette.graySandra
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent
    }
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40
    },
    border: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black80
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black40
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra
    }
  }
}
const DefaultJeneseiThemeGenreInputSelect = {
  gray: {
    background: {
      rest: JeneseiPalette.grayJanice,
      hover: JeneseiPalette.graySandra,
      select: ''
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
      select: ''
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
      select: ''
    }
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      select: JeneseiPalette.blueActive
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40,
      select: JeneseiPalette.black100
    },
    border: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black80,
      select: JeneseiPalette.blueRest
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      select: ''
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black40,
      select: ''
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
      select: ''
    }
  }
}
const DefaultJeneseiThemeGenreDate = {
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      today: JeneseiPalette.black80,
      weekend: JeneseiPalette.black10,
      choice: JeneseiPalette.graySarah,
      line: JeneseiPalette.whiteStandard
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40,
      today: JeneseiPalette.whiteStandard,
      weekend: JeneseiPalette.black100,
      choice: JeneseiPalette.whiteStandard,
      line: JeneseiPalette.transparent
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
      today: JeneseiPalette.transparent,
      weekend: JeneseiPalette.transparent,
      choice: JeneseiPalette.transparent,
      line: JeneseiPalette.transparent
    }
  },
  gray: {
    background: {
      rest: JeneseiPalette.grayJanice,
      hover: JeneseiPalette.graySandra,
      today: JeneseiPalette.graySarah,
      weekend: JeneseiPalette.black10,
      choice: JeneseiPalette.graySarah,
      line: JeneseiPalette.transparent
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
      today: JeneseiPalette.whiteStandard,
      weekend: JeneseiPalette.grayJanice,
      choice: JeneseiPalette.whiteStandard,
      line: JeneseiPalette.transparent
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
      today: JeneseiPalette.transparent,
      weekend: JeneseiPalette.transparent,
      choice: JeneseiPalette.transparent,
      line: JeneseiPalette.transparent
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      today: JeneseiPalette.black60,
      weekend: JeneseiPalette.black10,
      line: JeneseiPalette.transparent,
      choice: JeneseiPalette.black60
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
      today: JeneseiPalette.whiteStandard,
      choice: JeneseiPalette.whiteStandard,
      weekend: JeneseiPalette.black80,
      line: JeneseiPalette.transparent
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
      today: JeneseiPalette.transparent,
      weekend: JeneseiPalette.black10,
      line: JeneseiPalette.transparent,
      choice: JeneseiPalette.transparent
    }
  }
}
const DefaultJeneseiThemeGenreForm = {
  gray: {
    background: JeneseiPalette.whiteStandard,
    color: JeneseiPalette.black60,
    border: JeneseiPalette.transparent
  },
  grayBorder: {
    background: JeneseiPalette.whiteStandard,
    color: JeneseiPalette.black60,
    border: JeneseiPalette.black10
  }
}
const DefaultJeneseiThemeGenreToggle = {
  product: {
    active: {
      rest: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.blueRest,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)'
      },
      hover: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.blueHover,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
      }
    },
    unActive: {
      rest: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.black10,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)'
      },
      hover: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.graySandra,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
      }
    }
  }
}
const DefaultJeneseiThemeGenreSonner: TJeneseiThemeGenreSonner = {
  black: {
    button: {
      genre: 'black'
    },
    wrapper: {
      background: JeneseiPalette.whiteStandard,
      borderColor: JeneseiPalette.grayKaren,
      boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.2)',
      boxShadowHover: '0px 10px 30px 0px rgba(0, 0, 0, 0.5)'
    },
    icon: {
      color: JeneseiPalette.black100
    },
    title: {
      color: JeneseiPalette.black100
    },
    description: {
      color: JeneseiPalette.grayPatricia
    }
  },
  greenTransparent: {
    button: {
      genre: 'greenTransparent'
    },
    wrapper: {
      background: JeneseiPalette.green10Background,
      borderColor: JeneseiPalette.green25,
      boxShadow: `0px 10px 30px 0px ${JeneseiPalette.green25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiPalette.green50}`
    },
    icon: {
      color: JeneseiPalette.green100
    },
    title: {
      color: JeneseiPalette.green100
    },
    description: {
      color: JeneseiPalette.greenGoogle
    }
  },
  redTransparent: {
    button: {
      genre: 'redTransparent'
    },
    wrapper: {
      background: JeneseiPalette.red10Background,
      borderColor: JeneseiPalette.red25,
      boxShadow: `0px 10px 30px 0px ${JeneseiPalette.red25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiPalette.red50}`
    },
    icon: {
      color: JeneseiPalette.red100
    },
    title: {
      color: JeneseiPalette.red100
    },
    description: {
      color: JeneseiPalette.redGoogle
    }
  },
  yellowTransparent: {
    button: {
      genre: 'yellowTransparent'
    },
    wrapper: {
      background: JeneseiPalette.yellow10Background,
      borderColor: JeneseiPalette.yellow25,
      boxShadow: `0px 10px 30px 0px ${JeneseiPalette.yellow25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiPalette.yellow50}`
    },
    icon: {
      color: 'yellow100'
    },
    title: {
      color: JeneseiPalette.yellow100
    },
    description: {
      color: JeneseiPalette.yellowGoogle
    }
  }
}
export const JeneseiTheme: IJeneseiTheme = {
  transition: {
    duration: '0.3s',
    timingFunction: 'ease',
    default: '0.3s ease',
    icon: '0.05s ease'
  },
  scrollbar: {
    width: 4,
    background: JeneseiPalette.black05,
    thumb: JeneseiPalette.black10,
    thumbBorder: JeneseiPalette.black05
  },
  font: {
    family: 'Inter',
    weight: 400,
    lineHeight: 1.2,
    sizeDefault: {
      default: 16,
      mobile: 12,
      tablet: 14
    },
    sizeHeading: {
      h1: 2.5,
      h2: 2.25,
      h3: 2,
      h4: 1.75,
      h5: 1.5,
      h6: 1.25,
      h7: 1,
      h8: 0.75,
      h9: 0.5
    }
  },
  screens: {
    mobile: { width: '850px' },
    tablet: { width: '1290px' },
    default: { width: '1920px' }
  },
  effects: {
    input: 'inset 0px 0px 4px rgba(0, 0, 0, 0.20)',
    button: '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  },
  palette: JeneseiPalette,
  colors: {
    white: JeneseiPalette.whiteStandard,
    focus: JeneseiPalette.black60,
    danger: JeneseiPalette.redGoogle,
    sonner: DefaultJeneseiThemeGenreSonner,
    form: DefaultJeneseiThemeGenreForm,
    button: DefaultJeneseiThemeGenre,
    date: DefaultJeneseiThemeGenreDate,
    toggle: DefaultJeneseiThemeGenreToggle,
    checkbox: DefaultJeneseiThemeGenre,
    input: DefaultJeneseiThemeGenreInput,
    select: DefaultJeneseiThemeGenreInputSelect
  }
}
export const KEY_SIZE_DATA: Record<TJeneseiThemeSize, IJeneseiThemeSize> = {
  large: {
    height: 46,
    heightIcon: 24,
    radius: 6,
    padding: 16,
    font: 20
  },
  largeMedium: {
    height: 42,
    heightIcon: 22,
    radius: 6,
    padding: 14,
    font: 18
  },
  medium: {
    height: 38,
    heightIcon: 20,
    radius: 6,
    padding: 12,
    font: 16
  },
  mediumSmall: {
    height: 34,
    heightIcon: 18,
    radius: 6,
    padding: 10,
    font: 14
  },
  small: {
    height: 30,
    heightIcon: 16,
    radius: 8,
    padding: 8,
    font: 12
  }
}
export const KEY_SIZE_DATA_TOGGLE: Record<TJeneseiThemeSize, IJeneseiThemeSizeToggle> = {
  large: {
    height: 46,
    width: 92,
    padding: 3,
    thumb: 40
  },
  largeMedium: {
    height: 42,
    width: 84,
    padding: 2,
    thumb: 38
  },
  medium: {
    height: 38,
    width: 76,
    padding: 2,
    thumb: 34
  },
  mediumSmall: {
    height: 34,
    width: 68,
    padding: 2,
    thumb: 30
  },
  small: {
    height: 30,
    width: 60,
    padding: 2,
    thumb: 26
  }
}
