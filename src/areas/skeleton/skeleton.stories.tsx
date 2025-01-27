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
      <Stack bg="whiteStandard" h="100%" w="100%" br="6px">
        <Typography variant="h7">One</Typography>
      </Stack>
    </SkeletonComponent>
  )
}

export const SkeletonOne: Story = {
  render: args => <SkeletonWrapper {...args} />,
  args: { visible: true }
}

const SkeletonManyWrapper: FC<SkeletonProps> = props => {
  return (
    <Stack flexDirection="row" gap="12px">
      <Stack flexDirection="column" gap="12px">
        <SkeletonComponent {...props} w="300px" h="300px" p="12px" br="12px">
          <Stack bg="whiteStandard" h="100%" w="100%" br="6px">
            <Typography variant="h7">One</Typography>
          </Stack>
        </SkeletonComponent>
        <SkeletonComponent {...props} w="300px" h="50px" p="12px" br="12px" type="secondary">
          <Stack bg="whiteStandard" h="100%" w="100%" br="6px">
            <Typography variant="h7">One</Typography>
          </Stack>
        </SkeletonComponent>
      </Stack>
      <Stack flexDirection="column" gap="12px">
        <SkeletonComponent {...props} w="300px" h="300px" p="12px" br="12px">
          <Stack bg="whiteStandard" h="100%" w="100%" br="6px">
            <Typography variant="h7">One</Typography>
          </Stack>
        </SkeletonComponent>
        <SkeletonComponent {...props} w="300px" h="50px" p="12px" br="12px" type="secondary">
          <Stack bg="whiteStandard" h="100%" w="100%" br="6px">
            <Typography variant="h7">One</Typography>
          </Stack>
        </SkeletonComponent>
      </Stack>
    </Stack>
  )
}

export const SkeletonMany: Story = {
  render: args => <SkeletonManyWrapper {...args} />,
  args: {
    time: 2000
  }
}
