import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'
import { Tooltip } from '@local/components/tooltip'
import { Typography } from '@local/components/typography'
import { LoremIpsumText } from '@local/consts'

import { WrapperBig, WrapperMin } from './untils'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Component/Tooltip'
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    placement: 'bottom-start',
    children: (
      <Typography
        sx={{
          default: {
            variant: 'h3'
          }
        }}
      >
        Example
      </Typography>
    ),
    content: 'Tooltip',
    genre: 'black',
    size: 'large',
    isDisabled: false
  }
}

const TooltipWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperBig>
        <WrapperMin>
          <Tooltip placement="bottom" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              bottom
            </Button>
          </Tooltip>
          <Tooltip placement="bottom-end" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              bottom-end
            </Button>
          </Tooltip>
          <Tooltip placement="bottom-start" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              bottom-start
            </Button>
          </Tooltip>
        </WrapperMin>
        <WrapperMin>
          <Tooltip placement="left" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              left
            </Button>
          </Tooltip>
          <Tooltip placement="left-end" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              left-end
            </Button>
          </Tooltip>
          <Tooltip placement="left-start" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              left-start
            </Button>
          </Tooltip>
        </WrapperMin>
        <WrapperMin>
          <Tooltip placement="right" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              right
            </Button>
          </Tooltip>
          <Tooltip placement="right-end" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              right-end
            </Button>
          </Tooltip>
          <Tooltip placement="right-start" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              right-start
            </Button>
          </Tooltip>
        </WrapperMin>
        <WrapperMin>
          <Tooltip placement="top" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              top
            </Button>
          </Tooltip>
          <Tooltip placement="top-end" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              top-end
            </Button>
          </Tooltip>
          <Tooltip placement="top-start" size="medium" genre="black" content={'Tooltip'}>
            <Button genre="black" size={'medium'}>
              top-start
            </Button>
          </Tooltip>
        </WrapperMin>
      </WrapperBig>
      <WrapperBig>
        <Tooltip placement="bottom" size="medium" genre="black" content={'Tooltip'}>
          <Button genre="black" size={'medium'}>
            black
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-end" size="medium" genre="blackBorder" content={'Tooltip'}>
          <Button genre="blackBorder" size={'medium'}>
            blackBorder
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="gray" content={'Tooltip'}>
          <Button genre="gray" size={'medium'}>
            gray
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="grayBorder" content={'Tooltip'}>
          <Button genre="grayBorder" size={'medium'}>
            grayBorder
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="greenTransparent" content={'Tooltip'}>
          <Button genre="greenTransparent" size={'medium'}>
            greenTransparent
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="product" content={'Tooltip'}>
          <Button genre="product" size={'medium'}>
            product
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="productBorder" content={'Tooltip'}>
          <Button genre="productBorder" size={'medium'}>
            productBorder
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="redTransparent" content={'Tooltip'}>
          <Button genre="redTransparent" size={'medium'}>
            redTransparent
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="white" content={'Tooltip'}>
          <Button genre="white" size={'medium'}>
            white
          </Button>
        </Tooltip>
        <Tooltip placement="bottom-start" size="medium" genre="yellowTransparent" content={'Tooltip'}>
          <Button genre="yellowTransparent" size={'medium'}>
            yellowTransparent
          </Button>
        </Tooltip>
      </WrapperBig>
      <WrapperBig>
        <Tooltip placement="bottom" size="large" genre="black" content={'Tooltip'}>
          <Button genre="black" size={'large'}>
            large
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" size="largeMedium" genre="black" content={'Tooltip'}>
          <Button genre="black" size={'largeMedium'}>
            largeMedium
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" size="medium" genre="black" content={'Tooltip'}>
          <Button genre="black" size={'medium'}>
            medium
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" size="mediumSmall" genre="black" content={'Tooltip'}>
          <Button genre="black" size={'mediumSmall'}>
            mediumSmall
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" size="small" genre="black" content={'Tooltip'}>
          <Button genre="black" size={'small'}>
            small
          </Button>
        </Tooltip>
      </WrapperBig>
      <WrapperBig>
        <Tooltip placement="bottom" size="medium" genre="black" content={'Tooltip'}>
          <Stack
            sx={theme => ({
              default: {
                backgroundColor: theme.palette.blueGoogle,
                padding: '8px',
                borderRadius: '0px',
                flexDirection: 'column'
              }
            })}
          >
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'whiteStandard'
                }
              }}
            >
              Custom component
            </Typography>
            <Typography
              sx={{
                default: {
                  variant: 'h8',
                  color: 'whiteStandard'
                }
              }}
            >
              Description
            </Typography>
          </Stack>
        </Tooltip>
        <Tooltip placement="bottom" size="medium" genre="black" content={'Tooltip'} isWidthAsContent>
          <Button genre="black" size={'medium'}>
            isWidthAsContent
          </Button>
        </Tooltip>
        <Tooltip
          placement="bottom"
          size="medium"
          genre="blackBorder"
          maxHeight="100px"
          content={LoremIpsumText}
          isWidthAsContent
        >
          <Button genre="blackBorder" size={'medium'}>
            Tooltip with long text
          </Button>
        </Tooltip>
      </WrapperBig>
    </WrapperBig>
  )
}

export const All = {
  render: () => <TooltipWrapper />
}
