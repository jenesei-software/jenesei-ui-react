import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'
import { Typography } from '@local/components/typography'

import { ProviderDialog, ProviderDialogProps, useDialog } from '.'

const meta: Meta<typeof ProviderDialog> = {
  component: ProviderDialog,
  title: 'Context/Dialog'
}

export default meta

type Story = StoryObj<typeof ProviderDialog>

const ProviderDialogWrapper: FC<ProviderDialogProps> = props => {
  return (
    <ProviderDialog {...props}>
      <ProviderDialogWrapperDouble />
    </ProviderDialog>
  )
}
const ProviderDialogWrapperDouble: FC = () => {
  const { add, remove } = useDialog()

  const handleAdd = () => {
    add({
      content: (
        <Stack>
          <Typography variant="h6">test</Typography>
        </Stack>
      )
    })
  }
  return (
    <Stack p="12px" gap="8px">
      <Button onClick={handleAdd} genre="black" size="medium">
        Add Dialog!
      </Button>
      <Button onClick={remove} genre="black" size="medium">
        Remove Dialog!
      </Button>
    </Stack>
  )
}

export const Default: Story = {
  render: args => <ProviderDialogWrapper {...args} />,
  args: {
    zIndex: 100
  }
}
