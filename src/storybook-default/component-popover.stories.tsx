import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'

import { Popover as PopoverComponent, PopoverProps, usePopover } from '../components/popover'

const meta: Meta<typeof PopoverComponent> = {
  component: PopoverComponent,
  title: 'Component/Popover'
}

export default meta

type Story = StoryObj<typeof PopoverComponent>

const PopoverWrapper: FC<PopoverProps> = props => {
  const { isOpen, reference, floating, floatingStyles } = usePopover({
    placement: 'bottom',
    offset: 8,
    hoverOffset: 0,
    hoverCloseDelay: 0,
    mode: 'click'
  })
  return (
    <Stack sx={{ default: { gap: '8px', padding: '100px' } }}>
      <Button genre={'black'} size={'medium'} ref={reference}>
        Popover
      </Button>
      <PopoverComponent {...props} isOpen={isOpen} floatingStyles={floatingStyles} ref={floating} maxHeight={'200px'}>
        TEST
      </PopoverComponent>
    </Stack>
  )
}

export const Popover: Story = {
  render: args => <PopoverWrapper {...args} />
}
