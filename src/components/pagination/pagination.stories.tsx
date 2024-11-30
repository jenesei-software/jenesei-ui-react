import type { Meta, StoryObj } from '@storybook/react'
import { FC, useEffect, useState } from 'react'
import 'styled-components'

import { Stack } from '@components/stack'

import { Pagination, PaginationProps } from '.'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Component/Pagination',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Pagination>

const defaultArgs: Partial<PaginationProps> = {}

const PaginationWrapper: FC<PaginationProps> = props => {
  const [index, setIndex] = useState(props.index)

  useEffect(() => {
    setIndex(props.index)
  }, [props.index])
  return (
    <Stack p="10px">
      <Pagination {...props} index={index} changeIndex={index => setIndex(index)} />
    </Stack>
  )
}

export const Default: Story = {
  render: args => <PaginationWrapper {...args} />,
  args: {
    ...defaultArgs,
    index: 1,
    length: 12,
    genre: 'black',
    isInfinity: false,
    viewQuantity: 4
  }
}
