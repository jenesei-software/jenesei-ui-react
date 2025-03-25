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
const IMAGES: SliderProps['images'] = [
  {
    id: 0,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Открыл рот
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 1,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Держит гитару
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://images.pexels.com/photos/164758/pexels-photo-164758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 2,
    children: (
      <Stack justifyContent="flex-start" p="5px" flexGrow={1}>
        <Button isHiddenBorder isDisabled genre="productBorder" size="medium">
          Смотрит на Бога
        </Button>
      </Stack>
    ),
    imageSrc: 'https://images.pexels.com/photos/3430143/pexels-photo-3430143.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
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
    onIndexChange(index) {
      console.log('Index changed to', index)
    },
    children: (
      <Stack justifyContent="flex-end" p="5px" flexGrow={1}>
        <Button isHiddenBorder genre="productBorder" width="asHeight" size="medium" iconName="Location" />
      </Stack>
    ),
    propsStack: {
      h: '350px',
      w: '500px',
      br: '10px'
    }
  }
}
