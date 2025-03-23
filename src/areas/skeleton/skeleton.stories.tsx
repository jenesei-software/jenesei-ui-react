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
    <SkeletonComponent {...props} w="300px" h="300px" br="12px">
      <Stack p="12px" bg="whiteStandard" h="100%" w="100%" br="6px">
        <Typography variant="h7">One</Typography>
      </Stack>
    </SkeletonComponent>
  )
}

export const SkeletonOne: Story = {
  render: args => <SkeletonWrapper {...args} />,
  args: { visible: true, isHover: true }
}

const SkeletonManyWrapper: FC<SkeletonProps> = props => {
  return (
    <Stack flexDirection="row" gap="12px">
      <Stack flexDirection="column" gap="12px">
        <SkeletonComponent {...props} w="300px" h="300px" br="12px">
          <Stack p="12px" bg="whiteStandard" h="100%" w="100%" br="6px">
            <Typography variant="h7">One</Typography>
          </Stack>
        </SkeletonComponent>
        <Stack flexDirection="row" gap="12px">
          <SkeletonComponent {...props} w="50px" h="50px" br="100%" type="secondary">
            <Stack p="12px" bg="whiteStandard" h="100%" w="100%" br="6px">
              <Typography variant="h7">One</Typography>
            </Stack>
          </SkeletonComponent>
          <SkeletonComponent {...props} flexGrow={1} h="50px" br="12px" type="secondary">
            <Stack p="12px" bg="whiteStandard" h="100%" w="100%" br="6px">
              <Typography variant="h7">One</Typography>
            </Stack>
          </SkeletonComponent>
        </Stack>
      </Stack>
      <Stack flexDirection="column" gap="12px">
        <SkeletonComponent {...props} w="300px" h="300px" br="12px">
          <Stack p="12px" bg="whiteStandard" h="100%" w="100%" br="6px">
            <Typography variant="h7">One</Typography>
          </Stack>
        </SkeletonComponent>
        <Stack flexDirection="row" gap="12px">
          <SkeletonComponent {...props} w="50px" h="50px" br="100%" type="secondary">
            <Stack p="12px" bg="whiteStandard" h="100%" w="100%" br="6px">
              <Typography variant="h7">One</Typography>
            </Stack>
          </SkeletonComponent>
          <SkeletonComponent {...props} flexGrow={1} h="50px" br="12px" type="secondary">
            <Stack p="12px" bg="whiteStandard" h="100%" w="100%" br="6px">
              <Typography variant="h7">One</Typography>
            </Stack>
          </SkeletonComponent>
        </Stack>
      </Stack>
    </Stack>
  )
}

export const SkeletonMany: Story = {
  render: args => <SkeletonManyWrapper {...args} />,
  args: {
    visible: true,
    isHover: true
  }
}
