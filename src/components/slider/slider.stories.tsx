import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { IMAGES, Slider as SliderComponent } from '.'
import { Button } from '../button'
import { Stack } from '../stack'

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
  title: 'Component/Slider'
}

export default meta
type Story = StoryObj<typeof SliderComponent>

export const Slider: Story = {
  args: {
    images: IMAGES,
    children: () => (
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
