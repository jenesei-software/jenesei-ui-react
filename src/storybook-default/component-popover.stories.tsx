import { useMergeRefs } from '@floating-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'
import { Typography } from '@local/components/typography'

import { Popover as PopoverComponent, PopoverProps, usePopover } from '../components/popover'

const meta: Meta<typeof PopoverComponent> = {
  component: PopoverComponent,
  title: 'Component/Popover'
}

export default meta

type Story = StoryObj<typeof PopoverComponent>

const PopoverWrapper: FC<PopoverProps> = props => {
  const { isOpen, reference, floating, floatingStyles } = usePopover({
    placement: 'bottom-start',
    offset: 8,
    mode: 'click'
  })
  const {
    isOpen: isOpenTop,
    reference: referenceTop,
    floating: floatingTop,
    floatingStyles: floatingStylesTop
  } = usePopover({
    placement: 'top-start',
    offset: 8,
    mode: 'hover',
    isFloatingHover: false
  })
  const ref = useMergeRefs([reference, referenceTop])

  return (
    <Stack sx={{ default: { gap: '8px', padding: '100px' } }}>
      <Button genre={'black'} size={'medium'} ref={ref}>
        Popover
      </Button>
      <PopoverComponent {...props} size="small" isOpen={isOpenTop} floatingStyles={floatingStylesTop} ref={floatingTop}>
        Popover
      </PopoverComponent>
      <PopoverComponent
        {...props}
        genre="white"
        size="medium"
        isOpen={isOpen}
        floatingStyles={floatingStyles}
        ref={floating}
        sx={{
          default: {
            padding: '0px',
            gap: '0px',
            width: '120px'
          }
        }}
      >
        <Stack
          sx={{
            default: {
              flexDirection: 'column'
            }
          }}
        >
          <Typography
            sxStandard={{
              default: {
                padding: '8px 16px',
                textAlign: 'left'
              }
            }}
            sx={{
              default: {
                variant: 'h6'
              }
            }}
          >
            Menu
          </Typography>
          <Button genre={'gray'} isHiddenBorder isFullSize size={'small'}>
            First
          </Button>
          <Button genre={'gray'} isHiddenBorder isFullSize size={'small'}>
            Second
          </Button>
          <Button genre={'gray'} isHiddenBorder isFullSize size={'small'}>
            Third
          </Button>
        </Stack>
      </PopoverComponent>
    </Stack>
  )
}

export const Popover: Story = {
  render: args => <PopoverWrapper {...args} />
}
