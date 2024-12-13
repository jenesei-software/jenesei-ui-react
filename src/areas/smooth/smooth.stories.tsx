import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { FlexShortStylesProps, Stack } from '@local/components/stack'
import { Typography } from '@local/components/typography'

import { Smooth } from '.'

const meta: Meta<typeof Smooth> = {
  component: Smooth,
  title: 'Area/Smooth',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Smooth>

const SmoothWrapper: FC<FlexShortStylesProps> = props => {
  const [content, setContent] = useState<boolean>(false)

  const toggleContent = () => {
    setContent(prev => !prev)
  }

  return (
    <Smooth {...props} flexDirection="column" bg="black40" p="12px" bs="content-box">
      <Button onClick={toggleContent} size={'small'} genre={'gray'}>
        Toggle Content
      </Button>
      <Stack bg="whiteStandard" h="100px">
        <Typography variant="h7">One</Typography>
      </Stack>
      {content && (
        <Stack bg="whiteStandard" h="100px">
          <Typography variant="h7">Two</Typography>
        </Stack>
      )}
    </Smooth>
  )
}

export const Default: Story = {
  render: args => <SmoothWrapper {...args} />,
  args: {}
}
