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
          customStyles: {
            justifyContent: 'flex-start',
          },
          children: 'First',
          iconName: 'Folder',
          iconOrder: -1,
          loadingOrder:-2,
          width: 'auto',
          type: 'button',
          genre: 'black',
          size: 'medium',
          isLoading:true
        },
        {
          customStyles: {
            justifyContent: 'space-between',
            
          },
          children: 'Third',
          iconOrder: -1,
          loadingOrder:1,
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'gray',
          size: 'medium',
          isLoading:true
        },
        {
          customStyles: {
            justifyContent: 'space-between',
          },
          children: 'Second',
          iconOrder: 2,
          loadingOrder:1,
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'blackBorder',
          size: 'medium',
          isLoading:true,
          isIconGroup:true,
          isOnlyLoadingWithGroup:false
        },

        {
          customStyles: {
            justifyContent: 'space-between',
          },
          children: 'Third',
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'greenTransparent',
          size: 'medium',
        },
        {
          customStyles: {
            justifyContent: 'space-between',
          },
          children: 'Third',
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'grayBorder',
          size: 'medium',
        },
        {
          customStyles: {
            justifyContent: 'space-between',
          },
          children: 'Third',
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'product',
          size: 'medium',
        },

        {
          customStyles: {
            justifyContent: 'space-between',
          },
          children: 'Third',
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'white',
          size: 'medium',
        },
        {
          customStyles: {
            justifyContent: 'space-between',
          },
          children: 'Third',
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'productBorder',
          size: 'medium',
        },
        {
          customStyles: {
            justifyContent: 'space-between',
          },
          children: 'Third',
          iconName: 'Folder',
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
