import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import 'styled-components'

import { Accordion, AccordionProps } from '.'
import { Stack, TitleH4 } from '../../main'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
}

export default meta

type Story = StoryObj<typeof Accordion>

const AccordionWrapper: React.FC<AccordionProps> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const changeExpanded = useCallback(() => {
    setExpanded((prevState) => !prevState)
  }, [])

  const onClickSummary = useCallback(() => {
    changeExpanded()
  }, [changeExpanded])

  const onClickIcon = useCallback(() => {
    changeExpanded()
  }, [changeExpanded])

  return (
    <Accordion
      {...props}
      expanded={expanded}
      onClickSummary={onClickSummary}
      onClickIcon={onClickIcon}
    />
  )
}

export const Default: Story = {
  render: (args) => <AccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: (
      <Stack $p="10px" $w="200px" style={{ cursor: 'pointer' }}>
        <TitleH4>Go</TitleH4>
      </Stack>
    ),
    accordionDetails: (
      <>
        <Stack $p="10px" $w="200px">
          <TitleH4>Test</TitleH4>
        </Stack>
        <Stack $p="10px" $w="200px">
          <TitleH4>Test</TitleH4>
        </Stack>
        <Stack $p="10px" $w="200px">
          <TitleH4>Test</TitleH4>
        </Stack>
        <Stack $p="10px" $w="200px">
          <TitleH4>Test</TitleH4>
        </Stack>
        <Stack $p="10px" $w="200px">
          <TitleH4>Test</TitleH4>
        </Stack>
      </>
    ),
    wrapperProps: {
      $p: '10px',
      $w: '200px',
    },
  },
}
