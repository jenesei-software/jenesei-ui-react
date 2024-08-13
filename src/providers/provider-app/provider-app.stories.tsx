import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import {
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
  TitleH6,
} from '@fonts/index'

import { ProviderApp } from '.'

const meta: Meta<typeof ProviderApp> = {
  component: ProviderApp,
  title: 'Provider/ProviderApp',
}

export default meta

type Story = StoryObj<typeof ProviderApp>

const defaultNotification = (
  <div
    style={{
      backgroundColor: 'darkgoldenrod',
      padding: '2px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH5>Notification</TitleH5>
  </div>
)
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
const defaultLeftAside = (
  <div
    style={{
      backgroundColor: 'lightgreen',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Left Aside</TitleH6>
  </div>
)
const defaultRightAside = (
  <div
    style={{
      backgroundColor: 'lightyellow',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Right Aside</TitleH6>
  </div>
)

const defaultNav = (
  <div
    style={{
      backgroundColor: 'beige',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Nav</TitleH6>
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
    defaultBgColor: 'black40',
    isScrollOutlet: false,
    defaultTitle: 'Storybook?',
    defaultDescription: 'Description from Storybook?',
    notification: {
      component: defaultNotification,
      height: '30px',
      heightTablet: '20px',
      heightMobile: '20px',
      isFixed: false,
    },
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px',
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    rightAside: {
      component: defaultRightAside,
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

export const AsideDifferentTop: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px',
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px',
      isTopNav: true,
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px',
      isTopFooter: true,
      isTopHeader: true,
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

export const WithoutAsides: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black50',
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
