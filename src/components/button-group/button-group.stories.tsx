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
          $justifyContent: 'flex-start',  // Ensure this prop is being set here
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
          genre: 'product',
          size: 'medium',
          isLoading: false,
          isDisabled: false,
          isOnlyLoading: false,
          isActive: value.second,
          $justifyContent: 'flex-start',  // Ensure this prop is being set here
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
          $justifyContent: 'flex-start',
          onClick: () => {
            setValue((prevState) => ({ ...prevState, third: !prevState.third }))
          },
        },
      ]}
    />
  )
}

export const Horizontal: Story = {
  render: (args) => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal',
  },
}

export const Vertical: Story = {
  render: (args) => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical',
    width: '200px',
  },
}
