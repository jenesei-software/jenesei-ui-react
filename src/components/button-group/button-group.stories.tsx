import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { ButtonGroup, ButtonGroupProps } from '.'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Component/ButtonGroup'
}

export default meta

type Story = StoryObj<typeof ButtonGroup>

const ButtonGroupWrapper: FC<ButtonGroupProps> = props => {
  return (
    <ButtonGroup
      {...props}
      value={[
        {
          styleCustom: {
            justifyContent: 'flex-start'
          },
          children: 'First',
          iconName: 'CallMissed',
          iconOrder: -1,
          loadingOrder: -2,
          width: 'auto',
          type: 'button',
          genre: 'black',
          size: 'medium',
          isLoading: true
        },
        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Third',
          iconOrder: -1,
          loadingOrder: 1,
          iconName: 'Filter2',
          width: 'auto',
          type: 'button',
          genre: 'gray',
          size: 'medium',
          isLoading: true
        },
        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Second',
          iconOrder: 2,
          loadingOrder: 1,
          iconName: 'Graph',
          width: 'auto',
          type: 'button',
          genre: 'blackBorder',
          size: 'medium',
          isLoading: true,
          isIconGroup: true,
          isOnlyLoadingWithGroup: false
        },

        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Third',
          iconName: 'Heart',
          width: 'auto',
          type: 'button',
          genre: 'greenTransparent',
          size: 'medium'
        },
        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Third',
          iconName: 'Arrow1',
          width: 'auto',
          type: 'button',
          genre: 'grayBorder',
          size: 'medium'
        },
        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Third',
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'product',
          size: 'medium'
        },

        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Third',
          iconName: 'Folder',
          width: 'auto',
          type: 'button',
          genre: 'white',
          size: 'medium'
        },
        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Third',
          iconName: 'Scan',
          width: 'auto',
          type: 'button',
          genre: 'productBorder',
          size: 'medium'
        },
        {
          styleCustom: {
            justifyContent: 'space-between'
          },
          children: 'Third',
          iconName: 'Arrow2',
          width: 'auto',
          type: 'button',
          genre: 'redTransparent',
          size: 'medium'
        }
      ]}
    />
  )
}

export const Horizontal: Story = {
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal'
  }
}

export const Vertical: Story = {
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical',
    width: '200px'
  }
}
