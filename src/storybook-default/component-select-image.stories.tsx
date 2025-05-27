import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { ImageSelect as ImageSelectComponent } from '../components/image-select'

const meta: Meta<typeof ImageSelectComponent> = {
  component: ImageSelectComponent,
  title: 'Component/Image/Select'
}

export default meta
type Story = StoryObj<typeof ImageSelectComponent>

export const Select: Story = {
  args: {
    genre: 'realebail-white',
    width: '100%',
    size: 'medium',
    onChange(images) {
      console.log('Selected images:', images)
    },
    imageSettings: {
      aspect: 900 / 600,
      maxSize: 5 * 1024 * 1024,
      maxCount: 5,
      width: 200,
      height: 200
    },
    isContain: true,
    locale: {
      dialogSave: 'Save',
      textFallbackImage: 'Fallback image',
      textImageButton: 'Add image',
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
