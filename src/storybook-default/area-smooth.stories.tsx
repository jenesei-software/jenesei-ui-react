import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack, StackProps } from '@local/components/stack'
import { Typography } from '@local/components/typography'

import { Smooth as SmoothComponent } from '../areas/smooth'

const meta: Meta<typeof SmoothComponent> = {
  component: SmoothComponent,
  title: 'Area/Smooth'
}

export default meta
type Story = StoryObj<typeof SmoothComponent>

const SmoothWrapper: FC<StackProps> = props => {
  const [content, setContent] = useState<boolean>(false)

  const toggleContent = () => {
    setContent(prev => !prev)
  }

  return (
    <SmoothComponent
      {...props}
      sx={theme => ({
        default: {
          gap: '4px',
          flexDirection: 'column',
          padding: '12px',
          backgroundColor: theme.palette.black40
        }
      })}
    >
      <Button onClick={toggleContent} size={'small'} genre={'gray'}>
        Toggle Content
      </Button>
      <Stack
        sx={theme => ({
          default: {
            height: '100px',
            minHeight: '100px',
            backgroundColor: theme.palette.whiteStandard
          }
        })}
      >
        <Typography
          sx={{
            default: {
              variant: 'h7'
            }
          }}
        >
          One
        </Typography>
      </Stack>
      {content ? (
        <Stack
          sx={theme => ({
            default: {
              height: '100px',
              backgroundColor: theme.palette.whiteStandard
            }
          })}
        >
          <Typography
            sx={{
              default: {
                variant: 'h7'
              }
            }}
          >
            Two
          </Typography>
        </Stack>
      ) : null}
    </SmoothComponent>
  )
}

export const Smooth: Story = {
  render: args => <SmoothWrapper {...args} />,
  args: {}
}
