import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Button } from '@components/button'
import { Stack } from '@components/stack'
import { Typography } from '@components/typography'

import { Scroll, ScrollProps } from '.'

const meta: Meta<typeof Scroll> = {
  component: Scroll,
  title: 'Area/Scroll',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Scroll>

const ScrollWrapper: FC<ScrollProps> = props => {
  const [content, setContent] = useState<boolean>(false)

  const toggleContent = () => {
    setContent(prev => !prev)
  }

  return (
    <Scroll {...props} w="300px" bg="black40" p="12px" bs="content-box">
      <Button onClick={toggleContent} size={'small'} genre={'gray'}>
        Toggle Content
      </Button>
      <Stack bg="whiteStandard" h="100px" w="100px">
        <Typography variant="h7">One</Typography>
      </Stack>
      {content && (
        <Stack minW="1000px" bg="whiteStandard" h="100px" w="1000px">
          <Typography variant="h7">Two</Typography>
        </Stack>
      )}
    </Scroll>
  )
}

export const Default: Story = {
  render: args => <ScrollWrapper {...args} />,
  args: { horizontal: true }
}
