import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import 'styled-components'

import { Button } from '@components/button'
import { Stack } from '@components/flex'

import { TitleH4 } from '@fonts/index'

import { Accordion, AccordionProps } from '.'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
}

export default meta

type Story = StoryObj<typeof Accordion>

const AccordionWrapper: React.FC<AccordionProps> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [expandedTwo, setExpandedTwo] = useState<boolean>(false)
  const [expandedThree, setExpandedThree] = useState<boolean>(false)

  const changeExpanded = useCallback(() => {
    setExpanded((prevState) => !prevState)
  }, [])

  const onClickSummary = useCallback(() => {
    changeExpanded()
  }, [changeExpanded])

  const onClickIcon = useCallback(() => {
    changeExpanded()
  }, [changeExpanded])

  const changeExpandedTwo = useCallback(() => {
    setExpandedTwo((prevState) => !prevState)
  }, [])

  const onClickSummaryTwo = useCallback(() => {
    changeExpandedTwo()
  }, [changeExpandedTwo])

  const onClickIconTwo = useCallback(() => {
    changeExpandedTwo()
  }, [changeExpandedTwo])

  const changeExpandedThree = useCallback(() => {
    setExpandedThree((prevState) => !prevState)
  }, [])

  const onClickSummaryThree = useCallback(() => {
    changeExpandedThree()
  }, [changeExpandedThree])

  const onClickIconThree = useCallback(() => {
    changeExpandedThree()
  }, [changeExpandedThree])
  return (
    <Accordion
      {...props}
      expanded={expanded}
      onClickSummary={onClickSummary}
      onClickIcon={onClickIcon}
      accordionDetails={
        <Stack $gap="10px" $flexDirection="column" $pt="6px">
          <Accordion
            accordionSummary={
              <Button
                $styles={{
                  $justifyContent: 'flex-start',
                }}
                genre={'productBorder'}
                size={'medium'}
                width="100%"
              >
                Show more
              </Button>
            }
            accordionDetails={
              <Stack $gap="10px" $flexDirection="column" $pt="6px">
                <Button
                  $styles={{
                    $justifyContent: 'flex-start',
                  }}
                  genre={'gray'}
                  size={'medium'}
                  width="100%"
                >
                  First
                </Button>
                <Button
                  $styles={{
                    $justifyContent: 'flex-start',
                  }}
                  genre={'black'}
                  size={'medium'}
                  width="100%"
                >
                  Second
                </Button>
                <Button
                  $styles={{
                    $justifyContent: 'flex-start',
                  }}
                  genre={'greenTransparent'}
                  size={'medium'}
                  width="100%"
                >
                  Third
                </Button>
              </Stack>
            }
            expanded={expandedTwo}
            onClickSummary={onClickSummaryTwo}
            onClickIcon={onClickIconTwo}
            wrapperProps={{ $p: '0px', $w: '100%' }}
          />
          <Accordion
            accordionSummary={
              <Button
                $styles={{
                  $justifyContent: 'flex-start',
                }}
                genre={'grayBorder'}
                size={'medium'}
                width="100%"
              >
                Show more more
              </Button>
            }
            accordionDetails={
              <Stack $gap="10px" $flexDirection="column" $pt="6px">
                <Button
                  $styles={{
                    $justifyContent: 'flex-start',
                  }}
                  genre={'gray'}
                  size={'medium'}
                  width="100%"
                >
                  First
                </Button>
                <Button
                  $styles={{
                    $justifyContent: 'flex-start',
                  }}
                  genre={'black'}
                  size={'medium'}
                  width="100%"
                >
                  Second
                </Button>
                <Button
                  $styles={{
                    $justifyContent: 'flex-start',
                  }}
                  genre={'greenTransparent'}
                  size={'medium'}
                  width="100%"
                >
                  Third
                </Button>
              </Stack>
            }
            expanded={expandedThree}
            onClickSummary={onClickSummaryThree}
            onClickIcon={onClickIconThree}
            wrapperProps={{ $p: '0px', $w: '100%' }}
          />
        </Stack>
      }
    />
  )
}

export const Default: Story = {
  render: (args) => <AccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: (
      <Stack $p="10px" $w="200px" style={{ cursor: 'pointer' }}>
        <TitleH4>Show</TitleH4>
      </Stack>
    ),
    wrapperProps: {
      $p: '10px',
      $w: '200px',
    },
  },
}
