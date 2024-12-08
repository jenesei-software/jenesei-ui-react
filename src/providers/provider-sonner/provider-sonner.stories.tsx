import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@components/button'
import { Stack } from '@components/stack'

import { ProviderSonner, ProviderSonnerProps, useSonnerContext } from '.'

const meta: Meta<typeof ProviderSonner> = {
  component: ProviderSonner,
  title: 'Provider/Sonner'
}

export default meta

type Story = StoryObj<typeof ProviderSonner>

const ProviderSonnerWrapper: FC<ProviderSonnerProps> = props => {
  return (
    <ProviderSonner {...props}>
      <ProviderSonnerWrapperDouble />
    </ProviderSonner>
  )
}

const ProviderSonnerWrapperDouble: FC = () => {
  const { toast } = useSonnerContext()

  const handleToast = () => {
    toast({
      title: 'Чебурашка',
      description: 'Или крокодайл?'
    })
  }
  return (
    <Stack p="12px" gap="8px">
      <Button onClick={handleToast} genre="product" size="medium">
        Toast!
      </Button>
    </Stack>
  )
}

export const Default: Story = {
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {
    visibleToasts: 3,
    position: 'bottom-left',
    theme: 'standard'
  }
}
