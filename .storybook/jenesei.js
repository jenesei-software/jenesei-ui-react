import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  brandTitle: 'Jenesei',
  brandUrl: 'https://jenesei.ru/',
  brandImage: 'https://id.jenesei.ru/logo/logo-sticker-min-jenesei.png',
  brandTarget: '_blank',

  colorPrimary: '#395295',
  colorSecondary: '#4195D2',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
})
