import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Typography } from '@local/components/typography'

import { ProviderApp } from '../contexts/context-app'

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
    <Typography
      sx={{
        default: {
          variant: 'h8',
          wrap: 'nowrap'
        }
      }}
    >
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
    <Typography
      sx={{
        default: {
          variant: 'h1',
          wrap: 'nowrap'
        }
      }}
    >
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
    <Typography
      sx={{
        default: {
          variant: 'h1'
        }
      }}
    >
      Footer
    </Typography>
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
    <Typography
      sx={{
        default: {
          variant: 'h6'
        }
      }}
    >
      Left Aside
    </Typography>
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
    <Typography
      sx={{
        default: {
          variant: 'h6'
        }
      }}
    >
      Right Aside
    </Typography>
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
    <Typography
      sx={{
        default: {
          variant: 'h6'
        }
      }}
    >
      Nav
    </Typography>
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
    <Typography
      sx={{
        default: {
          variant: 'h1'
        }
      }}
    >
      Title H1
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h2'
        }
      }}
    >
      Title H2
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h3'
        }
      }}
    >
      Title H3
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h4'
        }
      }}
    >
      Title H4
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h5'
        }
      }}
    >
      Title H5
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h6'
        }
      }}
    >
      Title H6
    </Typography>
  </div>
)

export const Default: Story = {
  args: {
    defaultPreview: {
      time: 1000,
      content: (
        <Typography
          sx={{
            default: {
              variant: 'h6',
              weight: 700
            }
          }}
        >
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
      height: {
        default: '20px',
        tablet: '20px',
        mobile: '20px'
      }
    },
    header: {
      component: defaultHeader,
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    leftAside: {
      component: defaultLeftAside,
      width: {
        default: '80px',
        tablet: '60px',
        mobile: '0px'
      }
    },
    nav: {
      component: defaultNav,
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    rightAside: {
      component: defaultRightAside,
      width: {
        default: '80px',
        tablet: '60px',
        mobile: '0px'
      }
    },
    footer: {
      component: defaultFooter,
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
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
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    nav: {
      component: defaultNav,
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    leftAside: {
      component: defaultLeftAside,
      width: {
        default: '80px',
        tablet: '60px',
        mobile: '0px'
      },
      isTopNav: true
    },
    rightAside: {
      component: defaultRightAside,
      width: {
        default: '80px',
        tablet: '60px',
        mobile: '0px'
      },
      isTopFooter: true,
      isTopHeader: true
    },
    footer: {
      component: defaultFooter,
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
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
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    footer: {
      component: defaultFooter,
      height: {
        default: '80px',
        tablet: '60px',
        mobile: '0px'
      }
    },
    children: defaultChildren
  }
}
