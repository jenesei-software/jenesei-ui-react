import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  staticDirs: ['../public'],
  viteFinal: (config) => {
    return config
  },
  managerHead: (head) => ` 
    ${head}
    <link rel="shortcut icon" href="/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/icon-180x180.png"
    />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
  `,
}
export default config
