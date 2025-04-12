import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Slider as SliderComponent, SliderProps } from '.'
import { Button } from '../button'
import { Stack } from '../stack'

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
  title: 'Component/Slider'
}

export default meta
type Story = StoryObj<typeof SliderComponent>
export const IMAGES: SliderProps['images'] = [
  {
    id: 0,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v'
  },
  {
    id: 1,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://img.goodfon.com/original/2048x1319/8/29/ssha-kaliforniia-los-andzheles-los-angeles-doma-neboskreby-s.jpg'
  },
  {
    id: 3,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Смотрит на Бога, но с другой стороны
        </Button>
      </Stack>
    ),
    imageSrc: 'https://images.pexels.com/photos/2231756/pexels-photo-2231756.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    id: 4,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Дует в трубу
        </Button>
      </Stack>
    ),
    imageSrc: 'https://images.pexels.com/photos/1813157/pexels-photo-1813157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  }
]

export const Slider: Story = {
  args: {
    images: IMAGES,
    children: (
      <Stack justifyContent="flex-end" p="5px" flexGrow={1}>
        <Button isHiddenBorder genre="productBorder" width="asHeight" size="medium" iconName="Heart" />
      </Stack>
    ),
    propsStack: {
      h: '350px',
      w: '500px',
      br: '10px'
    }
  }
}
