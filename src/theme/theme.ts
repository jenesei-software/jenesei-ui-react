import {
  IJeneseiTheme,
  IJeneseiThemeSize,
  IJeneseiThemeSizeToggle,
  JeneseiThemeVariablesKeys,
  TJeneseiThemeGenreSonner,
  TJeneseiThemeSize
} from '.'

export const JeneseiThemeVariables: Record<JeneseiThemeVariablesKeys, string> = {
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
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard
    },
    color: {
      rest: JeneseiThemeVariables.black80,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  },
  product: {
    background: {
      rest: JeneseiThemeVariables.blueRest,
      hover: JeneseiThemeVariables.blueHover
    },
    color: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      placeholder: JeneseiThemeVariables.whiteStandard
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  },
  productBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard
    },
    color: {
      rest: JeneseiThemeVariables.blueRest,
      hover: JeneseiThemeVariables.blueHover,
      placeholder: JeneseiThemeVariables.blueRest
    },
    border: {
      rest: JeneseiThemeVariables.blueRest,
      hover: JeneseiThemeVariables.blueHover
    }
  },
  gray: {
    background: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80
    },
    border: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra
    }
  },
  black: {
    background: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black60
    },
    color: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      placeholder: JeneseiThemeVariables.whiteStandard
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  },
  blackBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard
    },
    color: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black100
    },
    border: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black60
    }
  },
  greenTransparent: {
    background: {
      rest: JeneseiThemeVariables.green10,
      hover: JeneseiThemeVariables.green25
    },
    color: {
      rest: JeneseiThemeVariables.green100,
      hover: JeneseiThemeVariables.green100,
      placeholder: JeneseiThemeVariables.green100
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  },
  yellowTransparent: {
    background: {
      rest: JeneseiThemeVariables.yellow10,
      hover: JeneseiThemeVariables.yellow25
    },
    color: {
      rest: JeneseiThemeVariables.yellow100,
      hover: JeneseiThemeVariables.yellow100,
      placeholder: JeneseiThemeVariables.yellow100
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  },
  redTransparent: {
    background: {
      rest: JeneseiThemeVariables.red10,
      hover: JeneseiThemeVariables.red25
    },
    color: {
      rest: JeneseiThemeVariables.red100,
      hover: JeneseiThemeVariables.red100,
      placeholder: JeneseiThemeVariables.red100
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  }
}

const DefaultJeneseiThemeGenreInput = {
  gray: {
    background: {
      rest: JeneseiThemeVariables.grayJanice,
      hover: JeneseiThemeVariables.graySandra
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent
    }
  },
  blackBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard
    },
    color: {
      rest: JeneseiThemeVariables.black80,
      hover: JeneseiThemeVariables.black80,
      placeholder: JeneseiThemeVariables.black40
    },
    border: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black80
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black40
    },
    border: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra
    }
  }
}
const DefaultJeneseiThemeGenreInputSelect = {
  gray: {
    background: {
      rest: JeneseiThemeVariables.grayJanice,
      hover: JeneseiThemeVariables.graySandra,
      select: ''
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80,
      select: ''
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
      select: ''
    }
  },
  blackBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      select: JeneseiThemeVariables.blueActive
    },
    color: {
      rest: JeneseiThemeVariables.black80,
      hover: JeneseiThemeVariables.black80,
      placeholder: JeneseiThemeVariables.black40,
      select: JeneseiThemeVariables.black100
    },
    border: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black80,
      select: JeneseiThemeVariables.blueRest
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      select: ''
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black40,
      select: ''
    },
    border: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra,
      select: ''
    }
  }
}
const DefaultJeneseiThemeGenreDate = {
  blackBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      today: JeneseiThemeVariables.black80,
      weekend: JeneseiThemeVariables.black10,
      choice: JeneseiThemeVariables.graySarah,
      line: JeneseiThemeVariables.whiteStandard
    },
    color: {
      rest: JeneseiThemeVariables.black80,
      hover: JeneseiThemeVariables.black80,
      placeholder: JeneseiThemeVariables.black40,
      today: JeneseiThemeVariables.whiteStandard,
      weekend: JeneseiThemeVariables.black100,
      choice: JeneseiThemeVariables.whiteStandard,
      line: JeneseiThemeVariables.transparent
    },
    border: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra,
      today: JeneseiThemeVariables.transparent,
      weekend: JeneseiThemeVariables.transparent,
      choice: JeneseiThemeVariables.transparent,
      line: JeneseiThemeVariables.transparent
    }
  },
  gray: {
    background: {
      rest: JeneseiThemeVariables.grayJanice,
      hover: JeneseiThemeVariables.graySandra,
      today: JeneseiThemeVariables.graySarah,
      weekend: JeneseiThemeVariables.black10,
      choice: JeneseiThemeVariables.graySarah,
      line: JeneseiThemeVariables.transparent
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80,
      today: JeneseiThemeVariables.whiteStandard,
      weekend: JeneseiThemeVariables.grayJanice,
      choice: JeneseiThemeVariables.whiteStandard,
      line: JeneseiThemeVariables.transparent
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
      today: JeneseiThemeVariables.transparent,
      weekend: JeneseiThemeVariables.transparent,
      choice: JeneseiThemeVariables.transparent,
      line: JeneseiThemeVariables.transparent
    }
  },
  grayBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      today: JeneseiThemeVariables.black60,
      weekend: JeneseiThemeVariables.black10,
      line: JeneseiThemeVariables.transparent,
      choice: JeneseiThemeVariables.black60
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80,
      today: JeneseiThemeVariables.whiteStandard,
      choice: JeneseiThemeVariables.whiteStandard,
      weekend: JeneseiThemeVariables.black80,
      line: JeneseiThemeVariables.transparent
    },
    border: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra,
      today: JeneseiThemeVariables.transparent,
      weekend: JeneseiThemeVariables.black10,
      line: JeneseiThemeVariables.transparent,
      choice: JeneseiThemeVariables.transparent
    }
  }
}
const DefaultJeneseiThemeGenreForm = {
  gray: {
    background: JeneseiThemeVariables.whiteStandard,
    color: JeneseiThemeVariables.black60,
    border: JeneseiThemeVariables.transparent
  },
  grayBorder: {
    background: JeneseiThemeVariables.whiteStandard,
    color: JeneseiThemeVariables.black60,
    border: JeneseiThemeVariables.black10
  }
}
const DefaultJeneseiThemeGenreToggle = {
  product: {
    active: {
      rest: {
        border: JeneseiThemeVariables.transparent,
        track: JeneseiThemeVariables.blueRest,
        thumb: JeneseiThemeVariables.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)'
      },
      hover: {
        border: JeneseiThemeVariables.transparent,
        track: JeneseiThemeVariables.blueHover,
        thumb: JeneseiThemeVariables.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
      }
    },
    unActive: {
      rest: {
        border: JeneseiThemeVariables.transparent,
        track: JeneseiThemeVariables.black10,
        thumb: JeneseiThemeVariables.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)'
      },
      hover: {
        border: JeneseiThemeVariables.transparent,
        track: JeneseiThemeVariables.graySandra,
        thumb: JeneseiThemeVariables.whiteStandard,
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
      background: JeneseiThemeVariables.whiteStandard,
      borderColor: JeneseiThemeVariables.grayKaren,
      boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.2)',
      boxShadowHover: '0px 10px 30px 0px rgba(0, 0, 0, 0.5)'
    },
    icon: {
      color: 'black100'
    },
    title: {
      color: JeneseiThemeVariables.black100
    },
    description: {
      color: JeneseiThemeVariables.grayPatricia
    }
  },
  greenTransparent: {
    button: {
      genre: 'greenTransparent'
    },
    wrapper: {
      background: JeneseiThemeVariables.green10Background,
      borderColor: JeneseiThemeVariables.green25,
      boxShadow: `0px 10px 30px 0px ${JeneseiThemeVariables.green25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiThemeVariables.green50}`
    },
    icon: {
      color: 'green100'
    },
    title: {
      color: JeneseiThemeVariables.green100
    },
    description: {
      color: JeneseiThemeVariables.greenGoogle
    }
  },
  redTransparent: {
    button: {
      genre: 'redTransparent'
    },
    wrapper: {
      background: JeneseiThemeVariables.red10Background,
      borderColor: JeneseiThemeVariables.red25,
      boxShadow: `0px 10px 30px 0px ${JeneseiThemeVariables.red25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiThemeVariables.red50}`
    },
    icon: {
      color: 'red100'
    },
    title: {
      color: JeneseiThemeVariables.red100
    },
    description: {
      color: JeneseiThemeVariables.redGoogle
    }
  },
  yellowTransparent: {
    button: {
      genre: 'yellowTransparent'
    },
    wrapper: {
      background: JeneseiThemeVariables.yellow10Background,
      borderColor: JeneseiThemeVariables.yellow25,
      boxShadow: `0px 10px 30px 0px ${JeneseiThemeVariables.yellow25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiThemeVariables.yellow50}`
    },
    icon: {
      color: 'yellow100'
    },
    title: {
      color: JeneseiThemeVariables.yellow100
    },
    description: {
      color: JeneseiThemeVariables.yellowGoogle
    }
  }
}
export const JeneseiTheme: IJeneseiTheme = {
  transition: {
    duration: '0.3s',
    timingFunction: 'ease',
    default: '0.3s ease'
  },
  scrollbar: {
    width: 4,
    background: JeneseiThemeVariables.black05,
    thumb: JeneseiThemeVariables.black10,
    thumbBorder: JeneseiThemeVariables.black05
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
  palette: JeneseiThemeVariables,
  colors: {
    white: JeneseiThemeVariables.whiteStandard,
    focus: JeneseiThemeVariables.black60,
    danger: JeneseiThemeVariables.redGoogle,
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
    heightIcon: 20,
    radius: 6,
    padding: 16,
    font: 20
  },
  largeMedium: {
    height: 42,
    heightIcon: 18,
    radius: 6,
    padding: 14,
    font: 18
  },
  medium: {
    height: 38,
    heightIcon: 16,
    radius: 6,
    padding: 12,
    font: 16
  },
  mediumSmall: {
    height: 34,
    heightIcon: 14,
    radius: 6,
    padding: 10,
    font: 14
  },
  small: {
    height: 30,
    heightIcon: 12,
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
