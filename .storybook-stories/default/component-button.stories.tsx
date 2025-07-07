import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'

import { WrapperBig, WrapperMin } from './untils'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Component/Button'
}

export default meta

type Story = StoryObj<typeof Button>

export const Text: Story = {
  args: {
    children: 'Click',
    type: 'button',
    genre: 'gray',
    size: 'medium'
  }
}

export const Icon: Story = {
  args: {
    isWidthAsHeight: true,
    type: 'button',
    icons: [
      {
        type: 'checkbox',
        name: 'Heart',
        order: -1
      }
    ],
    genre: 'gray',
    size: 'medium'
  }
}

const ButtonWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperMin>
        <Button size="medium" genre="black" isDisabledRipple isWhileTapEffect>
          black
        </Button>
        <Button size="medium" genre="blackBorder">
          blackBorder
        </Button>
        <Button size="medium" genre="gray">
          gray
        </Button>
        <Button size="medium" genre="grayBorder">
          grayBorder
        </Button>
        <Button size="medium" genre="greenTransparent">
          greenTransparent
        </Button>
        <Button size="medium" genre="product">
          product
        </Button>
        <Button size="medium" genre="productBorder">
          productBorder
        </Button>
        <Button size="medium" genre="realebail-gray">
          realebail-gray
        </Button>
        <Button size="medium" genre="realebail-product">
          realebail-product
        </Button>
        <Button size="medium" genre="realebail-white">
          realebail-white
        </Button>
        <Button size="medium" genre="redTransparent">
          redTransparent
        </Button>
        <Button size="medium" genre="white">
          white
        </Button>
        <Button size="medium" genre="yellowTransparent">
          yellowTransparent
        </Button>
      </WrapperMin>
      <WrapperMin>
        <Button size="large" genre="black">
          large
        </Button>
        <Button size="largeMedium" genre="black">
          largeMedium
        </Button>
        <Button size="medium" genre="black">
          medium
        </Button>
        <Button size="mediumSmall" genre="black">
          mediumSmall
        </Button>
        <Button size="small" genre="black">
          small
        </Button>
      </WrapperMin>
    </WrapperBig>
  )
}

export const All = {
  render: () => <ButtonWrapper />
}
