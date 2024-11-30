import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Stack } from '@components/stack'
import { Typography } from '@components/typography'

import { Skeleton, SkeletonProps } from '.'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Area/Skeleton',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Skeleton>

const SkeletonWrapper: FC<SkeletonProps> = props => {
  return (
    <Skeleton {...props} w="300px" h="300px" p="12px" br="12px">
      <Stack bg="whiteStandard" h="100px" w="100px" br="6px">
        <Typography variant="h7">One</Typography>
      </Stack>
    </Skeleton>
  )
}

export const Default: Story = {
  render: args => <SkeletonWrapper {...args} />,
  args: { visible: true }
}
