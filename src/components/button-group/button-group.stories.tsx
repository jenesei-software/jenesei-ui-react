import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { ButtonGroup, ButtonGroupProps } from '.'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'ButtonGroup',
}

export default meta

type Story = StoryObj<typeof ButtonGroup>

const ButtonGroupWrapper: React.FC<ButtonGroupProps> = (props) => {
  const [value, setValue] = useState({
    first: false,
    second: false,
    third: true,
  })

  return (
    <ButtonGroup
      {...props}
      value={[
        {
          children: 'First',
          icon: 'Copy',
          iconPosition: 'left',
          width: 'auto',
          type: 'button',
          genre: 'gray',
          size: 'medium',
          isLoading: false,
          isDisabled: false,
          isOnlyLoading: false,
          isActive: value.first,
          onClick: () => {
            setValue((prevState) => ({ ...prevState, first: !prevState.first }))
          },
        },
        {
          children: 'Second',
          icon: 'ChevronLeft',
          width: 'auto',
          type: 'button',
          genre: 'gray',
          size: 'medium',
          isLoading: false,
          isDisabled: false,
          isOnlyLoading: false,
          isActive: value.second,
          onClick: () => {
            setValue((prevState) => ({
              ...prevState,
              second: !prevState.second,
            }))
          },
        },
        {
          children: 'Third',
          icon: 'Coffee',
          width: 'auto',
          type: 'button',
          genre: 'gray',
          size: 'medium',
          isLoading: false,
          isDisabled: false,
          isOnlyLoading: false,
          isActive: value.third,
          onClick: () => {
            setValue((prevState) => ({ ...prevState, third: !prevState.third }))
          },
        },
      ]}
    />
  )
}

export const Default: Story = {
  render: (args) => <ButtonGroupWrapper {...args} />,
}
