import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Button } from '../components/button'
import { IMAGES, Slider as SliderComponent } from '../components/image-slider'
import { Stack } from '../components/stack'

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
  title: 'Component/Image/Slider'
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
          isWidthAsHeight
          size="medium"
          icons={[
            {
              type: 'id',
              name: 'Heart'
            }
          ]}
        />
      </Stack>
    ),
    locales: {
      failedToLoad: 'Failed to load image',
      noImagesAvailable: 'No images available'
    },
    imageSettings: {
      aspect: 1.5
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
