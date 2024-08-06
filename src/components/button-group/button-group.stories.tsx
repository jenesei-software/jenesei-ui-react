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
  const [, setValue] = useState({
    first: false,
    second: false,
    third: true,
  })

  return (
    <ButtonGroup
      {...props}
      value={[
        {
          $styles: {
            $justifyContent: 'flex-start',
          },
          children: 'First',
          icon: 'AddUser',
          iconPosition: 'left',
          width: 'auto',
          type: 'button',
          genre: 'gray',
          size: 'medium',
          isLoading: false,
          isDisabled: false,
          isOnlyLoading: false,
          onClick: () => {
            setValue((prevState) => ({ ...prevState, first: !prevState.first }))
          },
        },
        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Second',
          icon: 'Delete',
          width: 'auto',
          type: 'button',
          genre: 'product',
          size: 'medium',
          isLoading: false,
          isDisabled: false,
          isOnlyLoading: false,
          onClick: () => {
            setValue((prevState) => ({
              ...prevState,
              second: !prevState.second,
            }))
          },
        },
        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Third',
          icon: 'Image',
          width: 'auto',
          type: 'button',
          genre: 'gray',
          size: 'medium',
          isLoading: false,
          isDisabled: false,
          isOnlyLoading: false,
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
