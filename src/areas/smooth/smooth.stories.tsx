import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { FlexShortStylesProps, Stack } from '@local/components/stack'
import { Typography } from '@local/components/typography'

import { Smooth as SmoothComponent } from '.'

const meta: Meta<typeof SmoothComponent> = {
  component: SmoothComponent,
  title: 'Area/Smooth'
}

export default meta
type Story = StoryObj<typeof SmoothComponent>

const SmoothWrapper: FC<FlexShortStylesProps> = props => {
  const [content, setContent] = useState<boolean>(false)

  const toggleContent = () => {
    setContent(prev => !prev)
  }

  return (
    <SmoothComponent {...props} flexDirection="column" bg="black40" p="12px" bs="content-box">
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
    </SmoothComponent>
  )
}

export const Smooth: Story = {
  render: args => <SmoothWrapper {...args} />,
  args: {}
}
