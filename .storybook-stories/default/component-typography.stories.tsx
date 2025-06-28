import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC } from 'react'
import 'styled-components'

import { Stack } from '@local/components/stack'
import { Typography as TypographyComponent } from '@local/components/typography'
import { useScreenWidth } from '@local/contexts/context-screen-width'

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Component/Typography'
}

export default meta

type Story = StoryObj<typeof TypographyComponent>

export const Variant: Story = {
  args: {
    sx: {
      default: {
        variant: 'h1'
      }
    },
    children: 'Typography, variant H1'
  }
}

export const Size: Story = {
  args: {
    sx: {
      default: {
        size: 14
      }
    },
    children: 'Typography, size 14'
  }
}

const AllWrapper: FC = () => {
  const { screenActual } = useScreenWidth()

  return (
    <Stack sx={{ default: { gap: '8px', padding: '10px', flexDirection: 'column' } }}>
      <TypographyComponent
        sx={{
          default: {
            size: 14
          }
        }}
      >
        Actual screen is
        <TypographyComponent
          sx={{
            default: {
              size: 14,
              color: 'blueGoogle'
            }
          }}
        >
          {' ' + screenActual + ' '}
        </TypographyComponent>
        (size: 14)
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h1'
          }
        }}
      >
        Typography, variant H1
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h2'
          }
        }}
      >
        Typography, variant H2
      </TypographyComponent>
      <TypographyComponent
        isParagraph
        sx={{
          default: {
            variant: 'h2'
          }
        }}
      >
        Typography, variant H2, isParagraph
      </TypographyComponent>
      <TypographyComponent
        isAnchor
        href="https://google.com"
        sx={{
          default: {
            variant: 'h2'
          }
        }}
      >
        Typography, variant H2, isAnchor
      </TypographyComponent>
      <TypographyComponent
        isSpan
        sx={{
          default: {
            variant: 'h2'
          }
        }}
      >
        Typography, variant H2, isSpan
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h3'
          }
        }}
      >
        Typography, variant H3
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h4'
          }
        }}
      >
        Typography, variant H4
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h5'
          }
        }}
      >
        Typography, variant H5
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h6'
          }
        }}
      >
        Typography, variant H6
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h7'
          }
        }}
      >
        Typography, variant H7
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h8'
          }
        }}
      >
        Typography, variant H8
      </TypographyComponent>
      <TypographyComponent
        sx={{
          default: {
            variant: 'h9'
          }
        }}
      >
        Typography, variant H9
      </TypographyComponent>
    </Stack>
  )
}

export const All = {
  render: () => <AllWrapper />
}
