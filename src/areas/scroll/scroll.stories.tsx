import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'
import { Typography } from '@local/components/typography'

import { Scroll as ScrollComponent, ScrollProps } from '.'

const meta: Meta<typeof ScrollComponent> = {
  component: ScrollComponent,
  title: 'Area/Scroll'
}

export default meta
type Story = StoryObj<typeof ScrollComponent>

const ScrollWrapper: FC<ScrollProps> = props => {
  const [content, setContent] = useState<boolean>(false)

  const toggleContent = () => {
    setContent(prev => !prev)
  }

  return (
    <ScrollComponent {...props} w="300px" bg="black40" p="12px" bs="content-box">
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
    </ScrollComponent>
  )
}

export const Scroll: Story = {
  render: args => <ScrollWrapper {...args} />,
  args: { horizontal: true }
}
