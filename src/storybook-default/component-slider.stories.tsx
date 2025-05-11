import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '../components/button'
import { IMAGES, Slider as SliderComponent } from '../components/slider'
import { Stack } from '../components/stack'

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
      <Stack
        sx={{
          default: {
            justifyContent: 'flex-end',
            padding: '5px',
            flexGrow: 1
          }
        }}
      >
        <Button
          isHiddenBorder
          genre="productBorder"
          width="asHeight"
          size="medium"
          icon={{
            type: 'id',
            name: 'Heart'
          }}
        />
      </Stack>
    ),
    locales: {
      failedToLoad: 'Failed to load image',
      noImagesAvailable: 'No images available'
    },
    propsStack: {
      sx: {
        default: {
          height: '350px',
          width: '500px',
          borderRadius: '10px'
        }
      }
    }
  }
}
