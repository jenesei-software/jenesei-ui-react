import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { SelectImage as SelectImageComponent } from '../components/select-image'

const meta: Meta<typeof SelectImageComponent> = {
  component: SelectImageComponent,
  title: 'Component/SelectImage'
}

export default meta
type Story = StoryObj<typeof SelectImageComponent>

export const SelectImage: Story = {
  args: {
    genre: 'realebail-white',
    width: '100%',
    size: 'medium',
    onChange(images) {
      console.log('Selected images:', images)
    },
    imageSettings: {
      maxSize: 5 * 1024 * 1024,
      maxCount: 5,
      width: 200,
      height: 200
    },
    locale: {
      textFallbackImage: 'Fallback image',
      textAddImage: 'Add image',
      textResetImage: 'Reset image',
      dragAndDrop: 'Drag and drop your files here'
    },
    defaultImages: [],
    images: [
      {
        id: 0,
        index: 0,
        isNew: false,
        url: 'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v'
      }
    ]
  }
}
