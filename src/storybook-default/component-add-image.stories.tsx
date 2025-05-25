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
    button: {
      genre: 'blackBorder',
      size: 'medium',
      children: 'Add Image'
    },
    dialog: {
      button: {
        genre: 'blackBorder',
        size: 'medium'
      }
    },
    locale: {
      dialogSave: 'Save Image'
    },
    imageSettings: {
      aspect: 2 / 2,
      maxCount: 1,
      maxSize: 5 * 1024 * 1024 // 5 MB
    },
    onSave(files) {
      if (files) {
        files.forEach(file => {
          console.log(`Added file: ${file.name}, size: ${file.isNew} bytes`)
        })
      } else {
        console.log('No files added')
      }
    }
  }
}
