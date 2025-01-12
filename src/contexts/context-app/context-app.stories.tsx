import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Typography } from '@local/components/typography'

import { ProviderApp } from '.'

const meta: Meta<typeof ProviderApp> = {
  component: ProviderApp,
  title: 'Context/App'
}

export default meta

type Story = StoryObj<typeof ProviderApp>

const defaultNotification = (
  <div
    style={{
      backgroundColor: 'darkgoldenrod',
      padding: '2px',
      height: '100%',
      width: '100%'
    }}
  >
    <Typography variant="h8" textWrap="nowrap">
      Notification
    </Typography>
  </div>
)
const defaultHeader = (
  <div
    style={{
      backgroundColor: 'lightblue',
      padding: '10px',
      height: '100%',
      width: '100%'
    }}
  >
    <Typography variant="h1" textWrap="nowrap">
      Header
    </Typography>
  </div>
)
const defaultFooter = (
  <div
    style={{
      backgroundColor: 'lightcoral',
      padding: '10px',
      height: '100%',
      width: '100%'
    }}
  >
    <Typography variant="h1">Footer</Typography>
  </div>
)
const defaultLeftAside = (
  <div
    style={{
      backgroundColor: 'lightgreen',
      padding: '10px',
      height: '100%',
      width: '100%'
    }}
  >
    <Typography variant="h6">Left Aside</Typography>
  </div>
)
const defaultRightAside = (
  <div
    style={{
      backgroundColor: 'lightyellow',
      padding: '10px',
      height: '100%',
      width: '100%'
    }}
  >
    <Typography variant="h6">Right Aside</Typography>
  </div>
)

const defaultNav = (
  <div
    style={{
      backgroundColor: 'beige',
      padding: '10px',
      height: '100%',
      width: '100%'
    }}
  >
    <Typography>Nav</Typography>
  </div>
)

const defaultChildren = (
  <div
    style={{
      backgroundColor: 'white',
      padding: '10px',
      height: '600px',
      width: '100%'
    }}
  >
    <Typography variant="h1">Title H1</Typography>
    <Typography variant="h2">Title H2</Typography>
    <Typography variant="h3">Title H3</Typography>
    <Typography variant="h4">Title H4</Typography>
    <Typography variant="h5">Title H5</Typography>
    <Typography variant="h6">Title H6</Typography>
  </div>
)

export const Default: Story = {
  args: {
    defaultPreview: {
      time: 1000,
      content: (
        <Typography variant="h6" weight={700}>
          Loading
        </Typography>
      )
    },
    defaultBgColor: 'black40',
    isScrollOutlet: false,
    defaultTitle: 'Storybook?',
    defaultDescription: 'Description from Storybook?',
    notification: {
      component: defaultNotification,
      height: '30px',
      heightTablet: '20px',
      heightMobile: '20px',
      isFixed: false
    },
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}

export const AsideDifferentTop: Story = {
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px',
      isTopNav: true
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px',
      isTopFooter: true,
      isTopHeader: true
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}

export const WithoutAsides: Story = {
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black50',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}
