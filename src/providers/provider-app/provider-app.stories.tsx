import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ProviderApp } from '.'
import { TitleH1 } from '../../fonts'
import {
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
  TitleH6,
} from './../../fonts/inter'

const meta: Meta<typeof ProviderApp> = {
  component: ProviderApp,
  title: 'ProviderApp',
}

export default meta

type Story = StoryObj<typeof ProviderApp>
// Создаем макеты для различных состояний
const defaultHeader = (
  <div
    style={{
      backgroundColor: 'lightblue',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH1>Header</TitleH1>
  </div>
)
const defaultFooter = (
  <div
    style={{
      backgroundColor: 'lightcoral',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH1>Footer</TitleH1>
  </div>
)
const defaultLeftSection = (
  <div
    style={{
      backgroundColor: 'lightgreen',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Left Section</TitleH6>
  </div>
)
const defaultRightSection = (
  <div
    style={{
      backgroundColor: 'lightyellow',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Right Section</TitleH6>
  </div>
)

const defaultChildren = (
  <div
    style={{
      backgroundColor: 'white',
      padding: '10px',
      height: '600px',
      width: '100%',
    }}
  >
    <TitleH1>Title H1</TitleH1>
    <TitleH2>Title H2</TitleH2>
    <TitleH3>Title H3</TitleH3>
    <TitleH4>Title H4</TitleH4>
    <TitleH5>Title H5</TitleH5>
    <TitleH6>Title H6</TitleH6>
  </div>
)

export const Default: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'grayFocus',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    leftSection: {
      component: defaultLeftSection,
      width: '80px',
      widthTablet: '60px',
    },
    rightSection: {
      component: defaultRightSection,
      width: '80px',
      widthTablet: '60px',
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    children: defaultChildren,
  },
}

export const SectionDifferentTop: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'grayFocus',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    leftSection: {
      component: defaultLeftSection,
      width: '80px',
      widthTablet: '60px',
      isTopHeader: true,
    },
    rightSection: {
      component: defaultRightSection,
      width: '80px',
      widthTablet: '60px',
      isTopFooter: true,
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    children: defaultChildren,
  },
}

export const WithoutSections: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'grayFocus',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    children: defaultChildren,
  },
}
