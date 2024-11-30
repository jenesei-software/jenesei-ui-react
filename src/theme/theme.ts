import {
  IJeneseiTheme,
  IJeneseiThemeSize,
  IJeneseiThemeSizeToggle,
  JeneseiThemeVariablesKeys,
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
  green10: 'rgba(52 168 83 / 0.1)',
  yellowGoogle: '#fbbc04',
  redGoogle: '#ea4335',
  red100: '#ff4141',
  red25: 'rgba(255 65 65 / 0.25)',
  red10: 'rgba(255 65 65 / 0.1)',
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
    track: {
      rest: {
        active: JeneseiThemeVariables.blueRest,
        unActive: JeneseiThemeVariables.black10
      },
      hover: {
        active: JeneseiThemeVariables.blueHover,
        unActive: JeneseiThemeVariables.graySandra
      }
    },
    thumb: {
      rest: {
        active: JeneseiThemeVariables.whiteStandard,
        unActive: JeneseiThemeVariables.whiteStandard
      },
      hover: {
        active: JeneseiThemeVariables.whiteStandard,
        unActive: JeneseiThemeVariables.whiteStandard
      }
    },
    border: {
      rest: {
        active: JeneseiThemeVariables.transparent,
        unActive: JeneseiThemeVariables.transparent
      },
      hover: {
        active: JeneseiThemeVariables.transparent,
        unActive: JeneseiThemeVariables.transparent
      }
    }
  }
}
export const JeneseiTheme: IJeneseiTheme = {
  transition: '0.3s ease',
  transitionDuration: '0.3s',
  defaultLineHeight: 1.2,
  defaultFontSize: {
    desktop: 16,
    mobile: 12,
    tablet: 14
  },
  transitionTimingFunction: 'ease',
  screens: {
    mobile: { width: '850px' },
    tablet: { width: '1290px' }
  },
  fontFamily: 'Inter',
  effects: {
    sonner: {
      background: '0px 10px 30px 0px rgba(0, 0, 0, 0.2)'
    },
    input: {
      default: 'inset 0px 0px 4px rgba(0, 0, 0, 0.20)'
    },
    toggle: {
      active: '0 0 10px 0 rgba(0 0 0 / 0.4)',
      hover: '0 0 2px 0 rgba(0 0 0 / 0.2)',
      rest: ' 0 0 2px 1px rgba(0 0 0 / 0.1)'
    },
    button: {
      playstation: '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    }
  },
  palette: JeneseiThemeVariables,
  colors: {
    form: DefaultJeneseiThemeGenreForm,
    white: JeneseiThemeVariables.whiteStandard,
    focus: JeneseiThemeVariables.black60,
    danger: JeneseiThemeVariables.redGoogle,
    button: DefaultJeneseiThemeGenre,
    date: DefaultJeneseiThemeGenreDate,
    toggle: DefaultJeneseiThemeGenreToggle,
    checkbox: DefaultJeneseiThemeGenre,
    input: DefaultJeneseiThemeGenreInput
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
