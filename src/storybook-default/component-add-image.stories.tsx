import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { AddImage } from '@local/components/add-image'

const meta: Meta<typeof AddImage> = {
  component: AddImage,
  title: 'Component/AddImage'
}

export default meta

type Story = StoryObj<typeof AddImage>

export const Default: Story = {
  args: {
    propsButton: {
      genre: 'blackBorder',
      size: 'medium',
      children: 'Add Image'
    },
    imageSettings: {
      aspect: 16 / 9,
      maxCount: 1,
      maxSize: 5 * 1024 * 1024 // 5 MB
    },
    onAdd(files) {
      if (files) {
        files.forEach(file => {
          console.log(`Added file: ${file.name}, size: ${file.size} bytes`)
        })
      } else {
        console.log('No files added')
      }
    }
  }
}
