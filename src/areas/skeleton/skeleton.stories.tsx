import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Stack } from '@local/components/stack'
import { Typography } from '@local/components/typography'

import { Skeleton as SkeletonComponent, SkeletonProps } from '.'

const meta: Meta<typeof SkeletonComponent> = {
  component: SkeletonComponent,
  title: 'Area/Skeleton'
}

export default meta
type Story = StoryObj<typeof SkeletonComponent>

const SkeletonWrapper: FC<SkeletonProps> = props => {
  return (
    <SkeletonComponent {...props} w="300px" h="300px" p="12px" br="12px">
      <Stack bg="whiteStandard" h="100px" w="100px" br="6px">
        <Typography variant="h7">One</Typography>
      </Stack>
    </SkeletonComponent>
  )
}

export const Skeleton: Story = {
  render: args => <SkeletonWrapper {...args} />,
  args: { visible: true }
}
