import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { Button } from '@components/button'
import { Stack } from '@components/stack'

import { ProviderSonner, ProviderSonnerProps, useSonnerContext } from '.'

const meta: Meta<typeof ProviderSonner> = {
  component: ProviderSonner,
  title: 'Provider/Sonner',
  tags: ['autodocs']
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

const ProviderSonnerWrapperDouble: FC = props => {
  const { toast } = useSonnerContext()

  const handleToast = () => {
    const id = uuidv4()
    toast({ title: 'Чебурашка', description: id })
  }
  return (
    <Stack p="12px" gap="8px">
      Test
      <Button onClick={handleToast} genre="product" size="medium">
        Check
      </Button>
    </Stack>
  )
}

export const Default: Story = {
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {}
}
