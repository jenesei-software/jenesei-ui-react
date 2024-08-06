import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ButtonGroup, ButtonGroupProps } from '.'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'ButtonGroup',
}

export default meta

type Story = StoryObj<typeof ButtonGroup>

const ButtonGroupWrapper: React.FC<ButtonGroupProps> = (props) => {
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
          genre: 'black',
          size: 'medium',
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
        },
        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Second',
          icon: 'Delete',
          width: 'auto',
          type: 'button',
          genre: 'blackBorder',
          size: 'medium',
        },

        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Third',
          icon: 'Image',
          width: 'auto',
          type: 'button',
          genre: 'greenTransparent',
          size: 'medium',
        },
        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Third',
          icon: 'Image',
          width: 'auto',
          type: 'button',
          genre: 'grayBorder',
          size: 'medium',
        },
        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Third',
          icon: 'Image',
          width: 'auto',
          type: 'button',
          genre: 'product',
          size: 'medium',
        },

        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Third',
          icon: 'Image',
          width: 'auto',
          type: 'button',
          genre: 'white',
          size: 'medium',
        },
        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Third',
          icon: 'Image',
          width: 'auto',
          type: 'button',
          genre: 'productBorder',
          size: 'medium',
        },
        {
          $styles: {
            $justifyContent: 'space-between',
          },
          children: 'Third',
          icon: 'Image',
          width: 'auto',
          type: 'button',
          genre: 'redTransparent',
          size: 'medium',
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
